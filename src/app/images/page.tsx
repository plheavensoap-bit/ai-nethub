import Link from "next/link";

interface Tool {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

const tools: Tool[] = [
  {
    name: "Midjourney",
    description: "领先的 AI 绘画平台，通过文本描述生成高质量的艺术风格图像。",
    href: "https://www.midjourney.com",
    tags: ["付费", "高质量"],
  },
  {
    name: "Stable Diffusion",
    description: "开源 AI 绘画模型，可本地部署，社区生态丰富，插件众多。",
    href: "https://stability.ai",
    tags: ["开源", "本地部署"],
  },
  {
    name: "ComfyUI",
    description: "基于节点的 Stable Diffusion GUI，灵活的工作流可视化编排工具。",
    href: "https://github.com/comfyanonymous/ComfyUI",
    tags: ["开源", "工作流"],
  },
  {
    name: "DALL-E 3",
    description: "OpenAI 的图像生成模型，精准理解复杂文本描述，支持 ChatGPT 集成。",
    href: "https://openai.com/dall-e",
    tags: ["文本精准", "ChatGPT"],
  },
  {
    name: "Flux",
    description: "Black-Forest Labs 推出的开源图像生成模型，质量和速度兼备。",
    href: "https://blackforestlabs.ai",
    tags: ["开源", "高性能"],
  },
  {
    name: "Ideogram",
    description: "擅长生成含文字内容的 AI 绘画工具，排版美观，适合设计场景。",
    href: "https://ideogram.ai",
    tags: ["文字生成", "设计"],
  },
  {
    name: "Leonardo AI",
    description: "面向游戏和概念设计的 AI 图像平台，提供多种预训练模型。",
    href: "https://leonardo.ai",
    tags: ["游戏设计", "多模型"],
  },
  {
    name: "Canva AI",
    description: "Canva 内置的 AI 图像生成和设计工具，适合日常设计和排版需求。",
    href: "https://www.canva.com/ai-image-generator",
    tags: ["易用", "集成"],
  },
];

export default function ImagesPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Header */}
      <header className="py-16 px-4 text-center">
        <div className="text-5xl mb-4">🎨</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          图像生成
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          整合 ComfyUI、Midjourney、Stable Diffusion 等主流 AI 绘画工具，释放无限视觉创造力。
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
