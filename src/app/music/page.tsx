import Link from "next/link";

interface Tool {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

const tools: Tool[] = [
  {
    name: "Suno",
    description: "领先的 AI 音乐生成平台，输入文字描述即可生成带歌词、旋律和人声的完整歌曲。",
    href: "https://suno.com",
    tags: ["流行", "人声"],
  },
  {
    name: "Udio",
    description: "高质量 AI 音乐生成器，音乐结构完整，风格多样，支持自定义歌词。",
    href: "https://www.udio.com",
    tags: ["高质量", "多风格"],
  },
  {
    name: "Stable Audio",
    description: "Stability AI 推出的音频生成工具，适合创作背景音乐和音效素材。",
    href: "https://stableaudio.com",
    tags: ["背景音乐", "音效"],
  },
  {
    name: "Suno Copilot",
    description: "Suno 的 AI 辅助创作工具，帮助用户优化提示词，提升音乐生成效果。",
    href: "https://suno.com",
    tags: ["辅助创作", "提示词"],
  },
  {
    name: "MusicGen",
    description: "Meta 开源的音乐生成模型，可在本地运行，支持多种风格和长度控制。",
    href: "https://github.com/facebookresearch/audiocraft",
    tags: ["开源", "本地部署"],
  },
  {
    name: "AIVA",
    description: "专注于古典和影视配乐的 AI 作曲平台，适合视频背景音乐创作。",
    href: "https://www.aiva.ai",
    tags: ["古典", "配乐"],
  },
];

export default function MusicPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Header */}
      <header className="py-16 px-4 text-center">
        <div className="text-5xl mb-4">🎵</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          音乐制作
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Suno、Udio 等 AI 音乐工具一站式获取，让创作旋律简单触手可及。
        </p>
      </header>

      {/* Tools Grid */}
      <main className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300 hover:border-zinc-600"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white">
                  {tool.name}
                </h3>
                <span className="text-zinc-600 group-hover:text-zinc-300 transition-colors text-sm">↗</span>
              </div>
              <p className="text-sm text-zinc-400 mb-3 leading-relaxed">{tool.description}</p>
              <div className="flex gap-2 flex-wrap">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
            ← 返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
