import { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import PromptOutput from "./components/PromptOutput";
import NegativePrompts from "./components/NegativePrompts";
import AspectRatioSelector from "./components/AspectRatioSelector";
import PromptHistory from "./components/PromptHistory";
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

function App() {
  const [selections, setSelections] = useState({});
  const [customInputs, setCustomInputs] = useState({});
  const [negatives, setNegatives] = useState([]);
  const [aspectRatio, setAspectRatio] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState(loadHistory);

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

  const toggleNegative = useCallback((option) => {
    setNegatives((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  }, []);

  const buildPrompt = useCallback(() => {
    const parts = promptCategories
      .map((cat) => {
        const custom = customInputs[cat.id]?.trim();
        if (custom) return custom;
        return selections[cat.id] || null;
      })
      .filter(Boolean);

    let prompt = parts.join(", ");

    if (aspectRatio) {
      prompt += ` ${aspectRatio}`;
    }

    if (negatives.length > 0) {
      prompt += ` --no ${negatives.join(", ")}`;
    }

    return prompt;
  }, [selections, customInputs, negatives, aspectRatio]);

  const handleCopy = useCallback(async () => {
    const prompt = buildPrompt();
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
      { prompt, timestamp: new Date().toISOString() },
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
          }),
          mode: "no-cors",
        });
      } catch {
        // silent fail for webhook
      }
    }
  }, [buildPrompt, selections]);

  const handleReset = useCallback(() => {
    setSelections({});
    setCustomInputs({});
    setNegatives([]);
    setAspectRatio("");
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

    if (Math.random() > 0.5) {
      const idx = Math.floor(Math.random() * aspectRatios.length);
      setAspectRatio(aspectRatios[idx].value);
    } else {
      setAspectRatio("");
    }
  }, []);

  const handleLoadFromHistory = useCallback((promptText) => {
    navigator.clipboard.writeText(promptText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const prompt = buildPrompt();
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
          selectionCount={selectionCount}
        />

        <div className="space-y-4 mt-8">
          {promptCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              selected={selections[category.id]}
              customValue={customInputs[category.id] || ""}
              onSelect={handleSelect}
              onCustomInput={handleCustomInput}
            />
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
