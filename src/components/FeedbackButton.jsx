import { useState } from "react";

function FeedbackButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="mailto:taeshinkim11@gmail.com?subject=PromptBuilder AI Feedback&body=Hi! I'd like to suggest the following improvement for PromptBuilder AI:%0A%0A"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2.5 rounded-full bg-indigo-600/90 text-white text-sm font-medium shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all backdrop-blur-sm border border-indigo-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Send feedback via email"
      title="Send us feedback"
    >
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span
        className={`overflow-hidden transition-all duration-200 whitespace-nowrap ${
          isHovered ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Send Feedback
      </span>
    </a>
  );
}

export default FeedbackButton;
