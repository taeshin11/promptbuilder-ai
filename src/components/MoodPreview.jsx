const moodGradients = {
  "Epic and grandiose": "from-amber-600 via-red-700 to-orange-800",
  "Peaceful and serene": "from-sky-300 via-emerald-200 to-teal-300",
  "Dark and mysterious": "from-slate-900 via-purple-950 to-gray-900",
  "Whimsical and playful": "from-pink-400 via-yellow-300 to-cyan-300",
  "Melancholic": "from-slate-600 via-blue-800 to-gray-700",
  "Energetic and dynamic": "from-red-500 via-orange-400 to-yellow-500",
  "Romantic": "from-rose-400 via-pink-300 to-red-300",
  "Horror and dread": "from-gray-900 via-red-950 to-black",
  "Nostalgic": "from-amber-300 via-orange-200 to-yellow-200",
  "Futuristic": "from-cyan-500 via-blue-600 to-purple-700",
  "Dreamlike": "from-violet-400 via-fuchsia-300 to-pink-200",
  "Powerful and heroic": "from-amber-500 via-red-600 to-yellow-600",
  "Lonely and isolated": "from-slate-700 via-gray-600 to-blue-900",
  "Chaotic": "from-red-600 via-purple-600 to-orange-500",
  "Sacred and divine": "from-amber-200 via-yellow-100 to-white",
  "Cozy and warm": "from-orange-300 via-amber-200 to-yellow-200",
  "Alien and otherworldly": "from-emerald-600 via-teal-800 to-cyan-900",
  "Elegant and refined": "from-slate-300 via-gray-200 to-amber-100",
};

const colorGradients = {
  "Vibrant and saturated": "from-red-500 via-green-500 to-blue-500",
  "Muted earth tones": "from-amber-700 via-stone-500 to-green-800",
  "Monochrome": "from-gray-900 via-gray-500 to-gray-100",
  "Pastel colors": "from-pink-200 via-blue-200 to-green-200",
  "Dark and moody": "from-gray-900 via-slate-800 to-gray-900",
  "Warm tones": "from-red-400 via-orange-300 to-yellow-300",
  "Cool blue tones": "from-blue-800 via-cyan-600 to-blue-400",
  "High contrast": "from-black via-white to-black",
  "Sepia vintage": "from-amber-600 via-yellow-700 to-amber-800",
  "Neon colors": "from-pink-500 via-cyan-400 to-green-400",
  "Black and gold": "from-gray-900 via-amber-500 to-gray-900",
  "Ice and silver": "from-blue-200 via-gray-100 to-cyan-200",
  "Autumn palette": "from-red-600 via-orange-500 to-yellow-500",
  "Tropical colors": "from-green-400 via-cyan-400 to-pink-400",
  "Desaturated": "from-gray-400 via-stone-300 to-slate-400",
  "Complementary colors": "from-blue-600 via-purple-500 to-orange-500",
  "Analogous harmony": "from-blue-500 via-cyan-500 to-green-500",
  "Split toning": "from-cyan-600 via-gray-400 to-orange-500",
};

function MoodPreview({ mood, color }) {
  const gradient = moodGradients[mood] || colorGradients[color];

  if (!gradient) return null;

  return (
    <div className="mt-4 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Visual Mood</span>
        {mood && <span className="text-xs text-slate-400">{mood}</span>}
        {color && mood && <span className="text-xs text-slate-600">&middot;</span>}
        {color && <span className="text-xs text-slate-400">{color}</span>}
      </div>
      <div className={`h-3 rounded-full bg-gradient-to-r ${gradient} shadow-lg opacity-80`} />
    </div>
  );
}

export default MoodPreview;
