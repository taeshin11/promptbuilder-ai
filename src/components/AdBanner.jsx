import { useEffect, useRef } from "react";

function AdBanner({ position }) {
  const adRef = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !adRef.current) return;
    loaded.current = true;

    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '0925cfdc1c7366772d97b8734d376aa8',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    adRef.current.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.highperformanceformat.com/0925cfdc1c7366772d97b8734d376aa8/invoke.js";
    script2.async = true;
    adRef.current.appendChild(script2);
  }, []);

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${position === "top" ? "mt-4" : "mb-4"}`}
      aria-label="Advertisement"
    >
      <div
        ref={adRef}
        className="rounded-xl overflow-hidden flex items-center justify-center min-h-[90px]"
      />
    </div>
  );
}

export default AdBanner;
