export const promptCategories = [
  {
    id: "subject",
    label: "Subject",
    icon: "🎯",
    description: "What is the main focus of your image?",
    options: [
      "A beautiful woman", "A handsome man", "A mysterious warrior",
      "A cute cat", "A majestic dragon", "A futuristic robot",
      "A fantasy castle", "A cyberpunk city", "A serene landscape",
      "An ancient temple", "A space station", "A enchanted forest",
      "A vintage car", "A mythical creature", "A haunted mansion",
      "A underwater kingdom", "A floating island", "A post-apocalyptic wasteland"
    ],
  },
  {
    id: "medium",
    label: "Art Medium",
    icon: "🎨",
    description: "What art style or medium?",
    options: [
      "Digital painting", "Oil painting", "Watercolor",
      "Pencil sketch", "3D render", "Anime style",
      "Photorealistic", "Comic book art", "Pixel art",
      "Concept art", "Vector illustration", "Charcoal drawing",
      "Acrylic painting", "Ink wash", "Gouache painting",
      "Pastel drawing", "Stained glass art", "Low poly 3D"
    ],
  },
  {
    id: "style",
    label: "Style",
    icon: "✨",
    description: "What artistic style do you want?",
    options: [
      "Hyper-realistic", "Surrealism", "Art Nouveau",
      "Cyberpunk", "Steampunk", "Minimalist",
      "Baroque", "Pop Art", "Gothic",
      "Vaporwave", "Art Deco", "Impressionist",
      "Abstract", "Retro futurism", "Dark fantasy",
      "Studio Ghibli", "Ukiyo-e", "Psychedelic"
    ],
  },
  {
    id: "lighting",
    label: "Lighting",
    icon: "💡",
    description: "How should the scene be lit?",
    options: [
      "Golden hour", "Dramatic side lighting", "Soft diffused light",
      "Neon glow", "Moonlight", "Cinematic lighting",
      "Rim lighting", "Volumetric fog", "Studio lighting",
      "Backlit silhouette", "Bioluminescent", "Candlelight",
      "Harsh sunlight", "Northern lights", "Underwater caustics",
      "Lightning storm", "Firelight", "Ethereal glow"
    ],
  },
  {
    id: "camera",
    label: "Camera & Lens",
    icon: "📷",
    description: "What camera perspective and lens?",
    options: [
      "Close-up portrait", "Wide-angle panorama", "Bird's eye view",
      "85mm f/1.4 bokeh", "Macro lens extreme detail", "Fisheye lens",
      "Tilt-shift miniature", "Drone aerial shot", "Low angle hero shot",
      "Dutch angle", "Long exposure", "Telephoto compression",
      "35mm film grain", "Medium shot", "Over the shoulder",
      "Symmetrical composition", "Rule of thirds", "Cinematic widescreen 21:9"
    ],
  },
  {
    id: "color",
    label: "Color Palette",
    icon: "🎭",
    description: "What color mood do you want?",
    options: [
      "Vibrant and saturated", "Muted earth tones", "Monochrome",
      "Pastel colors", "Dark and moody", "Warm tones",
      "Cool blue tones", "High contrast", "Sepia vintage",
      "Neon colors", "Black and gold", "Ice and silver",
      "Autumn palette", "Tropical colors", "Desaturated",
      "Complementary colors", "Analogous harmony", "Split toning"
    ],
  },
  {
    id: "mood",
    label: "Mood & Atmosphere",
    icon: "🌌",
    description: "What feeling should it evoke?",
    options: [
      "Epic and grandiose", "Peaceful and serene", "Dark and mysterious",
      "Whimsical and playful", "Melancholic", "Energetic and dynamic",
      "Romantic", "Horror and dread", "Nostalgic",
      "Futuristic", "Dreamlike", "Powerful and heroic",
      "Lonely and isolated", "Chaotic", "Sacred and divine",
      "Cozy and warm", "Alien and otherworldly", "Elegant and refined"
    ],
  },
  {
    id: "detail",
    label: "Detail & Quality",
    icon: "🔍",
    description: "Quality and detail level boosters",
    options: [
      "Highly detailed", "8K ultra HD", "Intricate details",
      "Sharp focus", "Masterpiece quality", "Award-winning",
      "Trending on ArtStation", "Unreal Engine 5", "Octane render",
      "Ray tracing", "Photogrammetry", "Hypermaximalist",
      "Extreme texture detail", "Professional photography", "Magazine quality",
      "Museum exhibition piece", "Gallery artwork", "Cinematic quality"
    ],
  },
];

export const negativePromptOptions = [
  "blurry", "low quality", "distorted faces", "extra fingers",
  "bad anatomy", "watermark", "text", "signature",
  "out of frame", "cropped", "low resolution", "ugly",
  "duplicate", "deformed", "disfigured", "mutation",
  "poorly drawn", "bad proportions"
];

export const aspectRatios = [
  { label: "1:1 Square", value: "--ar 1:1" },
  { label: "16:9 Landscape", value: "--ar 16:9" },
  { label: "9:16 Portrait", value: "--ar 9:16" },
  { label: "4:3 Standard", value: "--ar 4:3" },
  { label: "3:2 Photo", value: "--ar 3:2" },
  { label: "21:9 Cinematic", value: "--ar 21:9" },
];
