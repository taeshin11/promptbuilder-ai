import { useState, useCallback, useEffect, useMemo } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TemplateSelector from "./components/TemplateSelector";
import PlatformSelector from "./components/PlatformSelector";
import CategorySection from "./components/CategorySection";
import PromptOutput from "./components/PromptOutput";
import NegativePrompts from "./components/NegativePrompts";
import AspectRatioSelector from "./components/AspectRatioSelector";
import PromptHistory from "./components/PromptHistory";
import PromptTips from "./components/PromptTips";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import { promptCategories, negativePromptOptions, aspectRatios } from "./data/promptOptions";
import "./index.css";

const WEBHOOK_URL = "";
const HISTORY_KEY = "promptbuilder_history";

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function loadFromURL() {
  try {
    const params = new URLSearchParams(window.location.search);
    const data = params.get("p");
    if (data) return JSON.parse(atob(data));
  } catch {
    // invalid URL data
  }
  return null;
}

function formatForPlatform(parts, aspectRatio, negatives, platform, weights) {
  switch (platform) {
    case "stable-diffusion": {
      const weighted = parts.map(({ text, weight }) => {
        const w = weight || 1.0;
        return w !== 1.0 ? `(${text}:${w.toFixed(1)})` : text;
      });
      let prompt = weighted.join(", ");
      if (negatives.length > 0) {
        prompt += `\nNegative prompt: ${negatives.join(", ")}`;
      }
      return prompt;
    }
    case "dall-e": {
      let prompt = parts.map((p) => p.text).join(", ");
      if (negatives.length > 0) {
        prompt += `. Avoid: ${negatives.join(", ")}`;
      }
      return prompt;
    }
    default: {
      // midjourney
      const highWeightParts = [];
      const normalParts = [];
      parts.forEach(({ text, weight }) => {
        if (weight >= 1.3) {
          highWeightParts.push(text);
        } else {
          normalParts.push(text);
        }
      });
      let prompt = [...highWeightParts, ...normalParts].join(", ");
      if (aspectRatio) prompt += ` ${aspectRatio}`;
      if (negatives.length > 0) prompt += ` --no ${negatives.join(", ")}`;
      return prompt;
    }
  }
}

function App() {
  const [selections, setSelections] = useState({});
  const [customInputs, setCustomInputs] = useState({});
  const [negatives, setNegatives] = useState([]);
  const [aspectRatio, setAspectRatio] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState(loadHistory);
  const [platform, setPlatform] = useState("midjourney");
  const [weights, setWeights] = useState({});

  // Load from shared URL on mount
  useEffect(() => {
    const urlData = loadFromURL();
    if (urlData) {
      if (urlData.s) setSelections(urlData.s);
      if (urlData.a) setAspectRatio(urlData.a);
      if (urlData.n) setNegatives(urlData.n);
      if (urlData.w) setWeights(urlData.w);
      if (urlData.pl) setPlatform(urlData.pl);
      // Clear URL params after loading
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
    } catch {
      // storage full or unavailable
    }
  }, [history]);

  const handleSelect = useCallback((categoryId, option) => {
    setSelections((prev) => {
      if (prev[categoryId] === option) {
        const next = { ...prev };
        delete next[categoryId];
        return next;
      }
      return { ...prev, [categoryId]: option };
    });
  }, []);

  const handleCustomInput = useCallback((categoryId, value) => {
    setCustomInputs((prev) => ({ ...prev, [categoryId]: value }));
  }, []);

  const handleWeightChange = useCallback((categoryId, value) => {
    setWeights((prev) => ({ ...prev, [categoryId]: value }));
  }, []);

  const toggleNegative = useCallback((option) => {
    setNegatives((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  }, []);

  const prompt = useMemo(() => {
    const parts = promptCategories
      .map((cat) => {
        const custom = customInputs[cat.id]?.trim();
        const text = custom || selections[cat.id] || null;
        if (!text) return null;
        return { text, weight: weights[cat.id] || 1.0 };
      })
      .filter(Boolean);

    if (parts.length === 0) return "";
    return formatForPlatform(parts, aspectRatio, negatives, platform, weights);
  }, [selections, customInputs, negatives, aspectRatio, platform, weights]);

  const handleCopy = useCallback(async () => {
    if (!prompt) return;

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

    setHistory((prev) => [
      { prompt, timestamp: new Date().toISOString(), platform },
      ...prev.filter((h) => h.prompt !== prompt),
    ]);

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            timestamp: new Date().toISOString(),
            selections,
            platform,
          }),
          mode: "no-cors",
        });
      } catch {
        // silent fail for webhook
      }
    }
  }, [prompt, selections, platform]);

  const handleReset = useCallback(() => {
    setSelections({});
    setCustomInputs({});
    setNegatives([]);
    setAspectRatio("");
    setWeights({});
    setCopied(false);
  }, []);

  const handleRandomize = useCallback(() => {
    const newSelections = {};
    promptCategories.forEach((cat) => {
      if (Math.random() > 0.2) {
        const idx = Math.floor(Math.random() * cat.options.length);
        newSelections[cat.id] = cat.options[idx];
      }
    });
    setSelections(newSelections);
    setCustomInputs({});
    setWeights({});

    if (Math.random() > 0.5) {
      const idx = Math.floor(Math.random() * aspectRatios.length);
      setAspectRatio(aspectRatios[idx].value);
    } else {
      setAspectRatio("");
    }
  }, []);

  const handleApplyTemplate = useCallback((template) => {
    setSelections(template.selections);
    setCustomInputs({});
    setAspectRatio(template.aspectRatio || "");
    setNegatives(template.negatives || []);
    setWeights({});
    setCopied(false);
    document.getElementById("prompt-output")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleShare = useCallback(() => {
    const data = { s: selections, a: aspectRatio, n: negatives, w: weights, pl: platform };
    const encoded = btoa(JSON.stringify(data));
    const url = `${window.location.origin}${window.location.pathname}?p=${encoded}`;

    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [selections, aspectRatio, negatives, weights, platform]);

  const handleLoadFromHistory = useCallback((promptText) => {
    navigator.clipboard.writeText(promptText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const selectionCount = Object.keys(selections).length + Object.values(customInputs).filter((v) => v?.trim()).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Header />

      <AdBanner position="top" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <HeroSection onRandomize={handleRandomize} />

        <PromptOutput
          prompt={prompt}
          copied={copied}
          onCopy={handleCopy}
          onReset={handleReset}
          onRandomize={handleRandomize}
          onShare={handleShare}
          selectionCount={selectionCount}
        >
          <PlatformSelector selected={platform} onSelect={setPlatform} />
        </PromptOutput>

        {/* Quick Templates */}
        <div className="mt-6">
          <TemplateSelector onApply={handleApplyTemplate} />
        </div>

        <div className="space-y-4 mt-6">
          {promptCategories.map((category, index) => (
            <div key={category.id} className={`animate-fade-in-up stagger-${index + 1}`}>
              <CategorySection
                category={category}
                selected={selections[category.id]}
                customValue={customInputs[category.id] || ""}
                weight={weights[category.id] || 1.0}
                onSelect={handleSelect}
                onCustomInput={handleCustomInput}
                onWeightChange={handleWeightChange}
                defaultExpanded={index < 3}
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <AspectRatioSelector
            ratios={aspectRatios}
            selected={aspectRatio}
            onSelect={setAspectRatio}
          />
        </div>

        <div className="mt-4">
          <NegativePrompts
            options={negativePromptOptions}
            selected={negatives}
            onToggle={toggleNegative}
          />
        </div>

        {/* Prompt Tips / SEO Content */}
        <div className="mt-8">
          <PromptTips />
        </div>

        {history.length > 0 && (
          <div className="mt-8">
            <PromptHistory
              history={history}
              onLoad={handleLoadFromHistory}
              onClear={handleClearHistory}
            />
          </div>
        )}
      </main>

      <AdBanner position="bottom" />

      <Footer />
    </div>
  );
}

export default App;
