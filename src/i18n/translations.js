export const supportedLanguages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export const translations = {
  en: {
    // Header
    gallery: "Gallery",
    guide: "Guide",
    about: "About",
    free: "Free",

    // Hero
    heroTitle1: "Build AI Image Prompts",
    heroTitle2: "with Just a Few Clicks",
    heroDesc: "Stop struggling with complex prompt syntax. Select options from intuitive categories to craft perfect prompts for Midjourney, Stable Diffusion, DALL-E, and more.",
    surpriseMe: "Surprise Me (Random Prompt)",
    startBuilding: "Start Building",
    browseGallery: "Browse Gallery",
    freeLabel: "100% Free",
    noLogin: "No Login Required",
    optionsCount: "144+ Options",

    // Prompt Output
    generatedPrompt: "Generated Prompt",
    selected: "selected",
    reset: "Reset",
    copied: "Copied!",
    copy: "Copy",
    promptPlaceholder: "Select options from the categories below to build your AI image prompt...",
    chars: "chars",
    ctrlEnterHint: "Ctrl+Enter to copy \u00b7 R to randomize",
    randomTitle: "Random (R)",
    shareTitle: "Share link",

    // Templates
    quickTemplates: "Quick Templates",
    quickTemplatesDesc: "One-click preset combinations to get started fast",

    // Platform
    formatFor: "Format for:",
    mjDesc: "Uses --ar, --v, --no flags",
    sdDesc: "Weighted tokens with (keyword:1.3)",
    dalleDesc: "Natural language descriptions",

    // Category
    emphasis: "Emphasis:",
    low: "Low",
    normal: "Normal",
    high: "High",
    max: "Max",
    custom: "+ Custom",
    typeYourOwn: "Type your own",

    // Batch
    batchVariations: "Batch Variations",
    batchDesc: "Generate 5 variations based on your selections",
    copyAll: "Copy All",
    copiedAll: "Copied All!",
    generate5: "Generate 5 Variations",
    regenerate: "Regenerate",

    // Mood
    visualMood: "Visual Mood",

    // History
    promptHistory: "Prompt History",
    clearAll: "Clear All",

    // Negative
    negativePrompts: "Negative Prompts",
    negativeDesc: "What to exclude from the image",
    excluded: "excluded",

    // Aspect Ratio
    aspectRatio: "Aspect Ratio",
    aspectDesc: "Choose image dimensions",

    // MJ Params
    mjParams: "Midjourney Parameters",
    mjParamsDesc: "Fine-tune your Midjourney output",
    version: "Version",
    stylize: "Stylize (--s)",
    chaos: "Chaos (--c)",
    styleRef: "Style Reference (--sref)",
    styleRefPlaceholder: "Paste image URL for style reference...",
    none: "None",
    default: "Default",
    medium: "Medium",
    veryHigh: "Very High",

    // Tips
    promptTips: "Prompt Writing Tips",
    tipsDesc: "Learn how to craft better AI image prompts",

    // FAQ
    faq: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about AI prompt building",

    // Footer
    product: "Product",
    promptBuilder: "Prompt Builder",
    promptGallery: "Prompt Gallery",
    aboutUs: "About Us",
    resources: "Resources",
    howToUseFAQ: "How to Use & FAQ",
    sendFeedback: "Send Feedback",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    platforms: "Platforms",
    footerCopy: "PromptBuilder AI. Free AI image prompt generator.",
    footerPlatforms: "Works with Midjourney, Stable Diffusion, DALL-E, and more.",
    today: "Today:",
    total: "Total:",

    // Feedback
    sendFeedbackBtn: "Send Feedback",

    // Gallery
    galleryTitle: "AI Image Prompt Gallery",
    galleryDesc: "Browse curated, copy-ready prompts for Midjourney, Stable Diffusion, and DALL-E. Use them as-is or as a starting point for your own creations.",
    copyPrompt: "Copy Prompt",
    buildCustom: "Want to Build Your Own Custom Prompts?",
    buildCustomDesc: "Use our interactive prompt builder with 144+ options across 8 categories.",
    openBuilder: "Open Prompt Builder",

    // Pages
    home: "Home",

    // SEO
    seoTitle: "PromptBuilder AI - Free AI Image Prompt Generator for Midjourney, Stable Diffusion & DALL-E",
    seoDesc: "Free AI image prompt generator. Build perfect prompts for Midjourney, Stable Diffusion, and DALL-E with an intuitive visual builder. No sign-up required.",
  },

  ko: {
    gallery: "갤러리",
    guide: "가이드",
    about: "소개",
    free: "무료",

    heroTitle1: "AI 이미지 프롬프트 만들기",
    heroTitle2: "클릭 몇 번이면 완성",
    heroDesc: "복잡한 프롬프트 문법에 고민하지 마세요. 직관적인 카테고리에서 옵션을 선택하면 Midjourney, Stable Diffusion, DALL-E용 완벽한 프롬프트가 완성됩니다.",
    surpriseMe: "랜덤 프롬프트",
    startBuilding: "시작하기",
    browseGallery: "갤러리 보기",
    freeLabel: "100% 무료",
    noLogin: "로그인 불필요",
    optionsCount: "144+ 옵션",

    generatedPrompt: "생성된 프롬프트",
    selected: "개 선택됨",
    reset: "초기화",
    copied: "복사됨!",
    copy: "복사",
    promptPlaceholder: "아래 카테고리에서 옵션을 선택하여 AI 이미지 프롬프트를 만들어 보세요...",
    chars: "자",
    ctrlEnterHint: "Ctrl+Enter 복사 \u00b7 R 랜덤",
    randomTitle: "랜덤 (R)",
    shareTitle: "링크 공유",

    quickTemplates: "빠른 템플릿",
    quickTemplatesDesc: "원클릭으로 시작하는 프리셋 조합",

    formatFor: "포맷:",
    mjDesc: "--ar, --v, --no 플래그 사용",
    sdDesc: "가중치 토큰 (keyword:1.3)",
    dalleDesc: "자연어 설명",

    emphasis: "강조:",
    low: "낮음",
    normal: "보통",
    high: "높음",
    max: "최대",
    custom: "+ 직접 입력",
    typeYourOwn: "직접 입력",

    batchVariations: "배치 변형",
    batchDesc: "선택한 항목을 기반으로 5가지 변형 생성",
    copyAll: "전체 복사",
    copiedAll: "전체 복사됨!",
    generate5: "5가지 변형 생성",
    regenerate: "재생성",

    visualMood: "비주얼 무드",

    promptHistory: "프롬프트 기록",
    clearAll: "전체 삭제",

    negativePrompts: "네거티브 프롬프트",
    negativeDesc: "이미지에서 제외할 항목",
    excluded: "개 제외됨",

    aspectRatio: "화면 비율",
    aspectDesc: "이미지 크기 선택",

    mjParams: "Midjourney 매개변수",
    mjParamsDesc: "Midjourney 출력 세부 조정",
    version: "버전",
    stylize: "스타일화 (--s)",
    chaos: "카오스 (--c)",
    styleRef: "스타일 참조 (--sref)",
    styleRefPlaceholder: "스타일 참조 이미지 URL 붙여넣기...",
    none: "없음",
    default: "기본값",
    medium: "중간",
    veryHigh: "매우 높음",

    promptTips: "프롬프트 작성 팁",
    tipsDesc: "더 나은 AI 이미지 프롬프트 작성법 배우기",

    faq: "자주 묻는 질문",
    faqDesc: "AI 프롬프트 빌딩에 대한 모든 것",

    product: "제품",
    promptBuilder: "프롬프트 빌더",
    promptGallery: "프롬프트 갤러리",
    aboutUs: "소개",
    resources: "리소스",
    howToUseFAQ: "사용법 & FAQ",
    sendFeedback: "피드백 보내기",
    legal: "법적 고지",
    privacyPolicy: "개인정보처리방침",
    termsOfService: "이용약관",
    platforms: "플랫폼",
    footerCopy: "PromptBuilder AI. 무료 AI 이미지 프롬프트 생성기.",
    footerPlatforms: "Midjourney, Stable Diffusion, DALL-E 등을 지원합니다.",
    today: "오늘:",
    total: "전체:",

    sendFeedbackBtn: "피드백 보내기",

    galleryTitle: "AI 이미지 프롬프트 갤러리",
    galleryDesc: "Midjourney, Stable Diffusion, DALL-E용 엄선된 프롬프트를 찾아보세요. 그대로 사용하거나 나만의 창작의 시작점으로 활용하세요.",
    copyPrompt: "프롬프트 복사",
    buildCustom: "나만의 프롬프트를 만들고 싶으신가요?",
    buildCustomDesc: "8개 카테고리, 144가지 이상의 옵션으로 인터랙티브 프롬프트 빌더를 사용해 보세요.",
    openBuilder: "프롬프트 빌더 열기",

    home: "홈",

    seoTitle: "PromptBuilder AI - Midjourney & Stable Diffusion 무료 AI 이미지 프롬프트 생성기",
    seoDesc: "무료 AI 이미지 프롬프트 생성기. 직관적인 비주얼 빌더로 Midjourney, Stable Diffusion, DALL-E용 완벽한 프롬프트를 만드세요. 가입 불필요.",
  },

  ja: {
    gallery: "ギャラリー",
    guide: "ガイド",
    about: "概要",
    free: "無料",

    heroTitle1: "AIイメージプロンプトを作成",
    heroTitle2: "数クリックで完成",
    heroDesc: "複雑なプロンプト構文に悩む必要はありません。直感的なカテゴリからオプションを選択して、Midjourney、Stable Diffusion、DALL-E用の完璧なプロンプトを作成しましょう。",
    surpriseMe: "ランダム生成",
    startBuilding: "作成開始",
    browseGallery: "ギャラリーを見る",
    freeLabel: "100% 無料",
    noLogin: "ログイン不要",
    optionsCount: "144+ オプション",

    generatedPrompt: "生成されたプロンプト",
    selected: "個選択中",
    reset: "リセット",
    copied: "コピー済み!",
    copy: "コピー",
    promptPlaceholder: "下のカテゴリからオプションを選択して、AIイメージプロンプトを作成しましょう...",
    chars: "文字",
    ctrlEnterHint: "Ctrl+Enter コピー \u00b7 R ランダム",
    randomTitle: "ランダム (R)",
    shareTitle: "リンク共有",

    quickTemplates: "クイックテンプレート",
    quickTemplatesDesc: "ワンクリックで始めるプリセット",

    formatFor: "フォーマット:",
    mjDesc: "--ar, --v, --no フラグを使用",
    sdDesc: "加重トークン (keyword:1.3)",
    dalleDesc: "自然言語による記述",

    emphasis: "強調:",
    low: "低",
    normal: "通常",
    high: "高",
    max: "最大",
    custom: "+ カスタム",
    typeYourOwn: "自由入力",

    batchVariations: "バッチバリエーション",
    batchDesc: "選択に基づいて5つのバリエーションを生成",
    copyAll: "全てコピー",
    copiedAll: "全てコピー済み!",
    generate5: "5つのバリエーション生成",
    regenerate: "再生成",

    visualMood: "ビジュアルムード",

    promptHistory: "プロンプト履歴",
    clearAll: "全て削除",

    negativePrompts: "ネガティブプロンプト",
    negativeDesc: "画像から除外する要素",
    excluded: "個除外",

    aspectRatio: "アスペクト比",
    aspectDesc: "画像サイズを選択",

    mjParams: "Midjourneyパラメータ",
    mjParamsDesc: "Midjourney出力の微調整",
    version: "バージョン",
    stylize: "スタイライズ (--s)",
    chaos: "カオス (--c)",
    styleRef: "スタイル参照 (--sref)",
    styleRefPlaceholder: "スタイル参照用の画像URLを貼り付け...",
    none: "なし",
    default: "デフォルト",
    medium: "中",
    veryHigh: "非常に高い",

    promptTips: "プロンプト作成のコツ",
    tipsDesc: "より良いAIイメージプロンプトの書き方を学ぶ",

    faq: "よくある質問",
    faqDesc: "AIプロンプト作成について知っておくべきこと",

    product: "製品",
    promptBuilder: "プロンプトビルダー",
    promptGallery: "プロンプトギャラリー",
    aboutUs: "私たちについて",
    resources: "リソース",
    howToUseFAQ: "使い方 & FAQ",
    sendFeedback: "フィードバックを送る",
    legal: "法的情報",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    platforms: "プラットフォーム",
    footerCopy: "PromptBuilder AI. 無料AIイメージプロンプト生成ツール。",
    footerPlatforms: "Midjourney、Stable Diffusion、DALL-Eなどに対応。",
    today: "今日:",
    total: "合計:",

    sendFeedbackBtn: "フィードバック",

    galleryTitle: "AIイメージプロンプトギャラリー",
    galleryDesc: "Midjourney、Stable Diffusion、DALL-E用の厳選されたプロンプトをご覧ください。そのまま使用するか、創作の出発点としてご活用ください。",
    copyPrompt: "プロンプトをコピー",
    buildCustom: "オリジナルのプロンプトを作りたいですか？",
    buildCustomDesc: "8カテゴリ、144以上のオプションでインタラクティブなプロンプトビルダーをお試しください。",
    openBuilder: "ビルダーを開く",

    home: "ホーム",

    seoTitle: "PromptBuilder AI - Midjourney & Stable Diffusion用無料AIイメージプロンプト生成ツール",
    seoDesc: "無料AIイメージプロンプト生成ツール。直感的なビジュアルビルダーでMidjourney、Stable Diffusion、DALL-E用の完璧なプロンプトを作成。登録不要。",
  },

  zh: {
    gallery: "画廊",
    guide: "指南",
    about: "关于",
    free: "免费",

    heroTitle1: "构建AI图像提示词",
    heroTitle2: "只需几次点击",
    heroDesc: "不再为复杂的提示词语法而烦恼。从直观的分类中选择选项，为Midjourney、Stable Diffusion、DALL-E等工具生成完美的提示词。",
    surpriseMe: "随机生成",
    startBuilding: "开始创建",
    browseGallery: "浏览画廊",
    freeLabel: "100% 免费",
    noLogin: "无需登录",
    optionsCount: "144+ 选项",

    generatedPrompt: "生成的提示词",
    selected: "已选择",
    reset: "重置",
    copied: "已复制!",
    copy: "复制",
    promptPlaceholder: "从下方分类中选择选项来构建您的AI图像提示词...",
    chars: "字符",
    ctrlEnterHint: "Ctrl+Enter 复制 \u00b7 R 随机",
    randomTitle: "随机 (R)",
    shareTitle: "分享链接",

    quickTemplates: "快捷模板",
    quickTemplatesDesc: "一键预设组合，快速开始",

    formatFor: "格式:",
    mjDesc: "使用 --ar, --v, --no 标记",
    sdDesc: "加权标记 (keyword:1.3)",
    dalleDesc: "自然语言描述",

    emphasis: "权重:",
    low: "低",
    normal: "正常",
    high: "高",
    max: "最大",
    custom: "+ 自定义",
    typeYourOwn: "自由输入",

    batchVariations: "批量变体",
    batchDesc: "基于您的选择生成5个变体",
    copyAll: "全部复制",
    copiedAll: "已全部复制!",
    generate5: "生成5个变体",
    regenerate: "重新生成",

    visualMood: "视觉氛围",

    promptHistory: "提示词历史",
    clearAll: "清除全部",

    negativePrompts: "反向提示词",
    negativeDesc: "从图像中排除的元素",
    excluded: "已排除",

    aspectRatio: "宽高比",
    aspectDesc: "选择图像尺寸",

    mjParams: "Midjourney 参数",
    mjParamsDesc: "微调Midjourney输出",
    version: "版本",
    stylize: "风格化 (--s)",
    chaos: "混乱度 (--c)",
    styleRef: "风格参考 (--sref)",
    styleRefPlaceholder: "粘贴风格参考图片URL...",
    none: "无",
    default: "默认",
    medium: "中等",
    veryHigh: "非常高",

    promptTips: "提示词写作技巧",
    tipsDesc: "学习如何编写更好的AI图像提示词",

    faq: "常见问题",
    faqDesc: "关于AI提示词构建的一切",

    product: "产品",
    promptBuilder: "提示词构建器",
    promptGallery: "提示词画廊",
    aboutUs: "关于我们",
    resources: "资源",
    howToUseFAQ: "使用方法 & FAQ",
    sendFeedback: "发送反馈",
    legal: "法律信息",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    platforms: "平台",
    footerCopy: "PromptBuilder AI. 免费AI图像提示词生成器。",
    footerPlatforms: "支持Midjourney、Stable Diffusion、DALL-E等。",
    today: "今日:",
    total: "总计:",

    sendFeedbackBtn: "发送反馈",

    galleryTitle: "AI图像提示词画廊",
    galleryDesc: "浏览为Midjourney、Stable Diffusion和DALL-E精选的即用提示词。直接使用或作为创作起点。",
    copyPrompt: "复制提示词",
    buildCustom: "想要创建自己的自定义提示词？",
    buildCustomDesc: "使用我们的交互式提示词构建器，涵盖8个类别、144+个选项。",
    openBuilder: "打开构建器",

    home: "首页",

    seoTitle: "PromptBuilder AI - Midjourney & Stable Diffusion免费AI图像提示词生成器",
    seoDesc: "免费AI图像提示词生成器。使用直观的可视化构建器为Midjourney、Stable Diffusion和DALL-E创建完美的提示词。无需注册。",
  },

  es: {
    gallery: "Galería",
    guide: "Guía",
    about: "Acerca de",
    free: "Gratis",

    heroTitle1: "Crea Prompts de Imágenes IA",
    heroTitle2: "con Solo Unos Clics",
    heroDesc: "Deja de luchar con sintaxis complejas. Selecciona opciones de categorías intuitivas para crear prompts perfectos para Midjourney, Stable Diffusion, DALL-E y más.",
    surpriseMe: "Prompt Aleatorio",
    startBuilding: "Comenzar",
    browseGallery: "Ver Galería",
    freeLabel: "100% Gratis",
    noLogin: "Sin Registro",
    optionsCount: "144+ Opciones",

    generatedPrompt: "Prompt Generado",
    selected: "seleccionados",
    reset: "Reiniciar",
    copied: "¡Copiado!",
    copy: "Copiar",
    promptPlaceholder: "Selecciona opciones de las categorías de abajo para construir tu prompt de imagen IA...",
    chars: "caracteres",
    ctrlEnterHint: "Ctrl+Enter copiar \u00b7 R aleatorio",
    randomTitle: "Aleatorio (R)",
    shareTitle: "Compartir enlace",

    quickTemplates: "Plantillas Rápidas",
    quickTemplatesDesc: "Combinaciones preestablecidas para comenzar rápidamente",

    formatFor: "Formato para:",
    mjDesc: "Usa flags --ar, --v, --no",
    sdDesc: "Tokens ponderados (keyword:1.3)",
    dalleDesc: "Descripciones en lenguaje natural",

    emphasis: "Énfasis:",
    low: "Bajo",
    normal: "Normal",
    high: "Alto",
    max: "Máximo",
    custom: "+ Personalizado",
    typeYourOwn: "Escribe tu propio",

    batchVariations: "Variaciones por Lotes",
    batchDesc: "Genera 5 variaciones basadas en tus selecciones",
    copyAll: "Copiar Todo",
    copiedAll: "¡Todo Copiado!",
    generate5: "Generar 5 Variaciones",
    regenerate: "Regenerar",

    visualMood: "Ambiente Visual",

    promptHistory: "Historial de Prompts",
    clearAll: "Borrar Todo",

    negativePrompts: "Prompts Negativos",
    negativeDesc: "Qué excluir de la imagen",
    excluded: "excluidos",

    aspectRatio: "Relación de Aspecto",
    aspectDesc: "Elige las dimensiones de la imagen",

    mjParams: "Parámetros de Midjourney",
    mjParamsDesc: "Ajusta fino la salida de Midjourney",
    version: "Versión",
    stylize: "Estilizar (--s)",
    chaos: "Caos (--c)",
    styleRef: "Referencia de Estilo (--sref)",
    styleRefPlaceholder: "Pega la URL de imagen para referencia de estilo...",
    none: "Ninguno",
    default: "Predeterminado",
    medium: "Medio",
    veryHigh: "Muy Alto",

    promptTips: "Consejos para Escribir Prompts",
    tipsDesc: "Aprende a crear mejores prompts de imágenes IA",

    faq: "Preguntas Frecuentes",
    faqDesc: "Todo lo que necesitas saber sobre la creación de prompts IA",

    product: "Producto",
    promptBuilder: "Constructor de Prompts",
    promptGallery: "Galería de Prompts",
    aboutUs: "Sobre Nosotros",
    resources: "Recursos",
    howToUseFAQ: "Cómo Usar & FAQ",
    sendFeedback: "Enviar Comentarios",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    platforms: "Plataformas",
    footerCopy: "PromptBuilder AI. Generador gratuito de prompts de imágenes IA.",
    footerPlatforms: "Compatible con Midjourney, Stable Diffusion, DALL-E y más.",
    today: "Hoy:",
    total: "Total:",

    sendFeedbackBtn: "Comentarios",

    galleryTitle: "Galería de Prompts de Imágenes IA",
    galleryDesc: "Explora prompts curados y listos para copiar para Midjourney, Stable Diffusion y DALL-E. Úsalos tal cual o como punto de partida.",
    copyPrompt: "Copiar Prompt",
    buildCustom: "¿Quieres crear tus propios prompts personalizados?",
    buildCustomDesc: "Usa nuestro constructor interactivo con más de 144 opciones en 8 categorías.",
    openBuilder: "Abrir Constructor",

    home: "Inicio",

    seoTitle: "PromptBuilder AI - Generador Gratuito de Prompts de Imágenes IA para Midjourney y Stable Diffusion",
    seoDesc: "Generador gratuito de prompts de imágenes IA. Crea prompts perfectos para Midjourney, Stable Diffusion y DALL-E con un constructor visual intuitivo. Sin registro.",
  },
};
