function AdBanner({ position }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${position === "top" ? "mt-4" : "mb-4"}`}
      aria-label="Advertisement"
    >
      <div className="rounded-xl bg-white/[0.03] border border-dashed border-white/[0.06] p-4 text-center min-h-[90px] flex items-center justify-center">
        {/* ADSTERRA_AD_PLACEHOLDER: Replace this div with your Adsterra ad script */}
        {/* Example: <script async="async" data-cfasync="false" src="//YOUR_ADSTERRA_URL"></script> */}
        <p className="text-slate-600 text-xs">Ad Space — {position === "top" ? "Top Banner" : "Bottom Banner"}</p>
      </div>
    </div>
  );
}

export default AdBanner;
