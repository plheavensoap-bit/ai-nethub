import Link from "next/link";

interface Tool {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

const tools: Tool[] = [
  {
    name: "RunningHub",
    description: "云端 AI 算力平台，支持 Stable Diffusion、ComfyUI 等工具在线运行，免本地配置。",
    href: "https://www.runninghub.com",
    tags: ["在线跑图", "低门槛"],
  },
  {
    name: "AutoDL",
    description: "国内领先的 GPU 算力租赁平台，性价比高，支持按需计费和按小时租用。",
    href: "https://www.autodl.com",
    tags: ["高性价比", "按需计费"],
  },
  {
    name: "Google Colab",
    description: "Google 提供的免费云端 Jupyter Notebook 环境，附带免费 GPU，适合学习和实验。",
    href: "https://colab.research.google.com",
    tags: ["免费", "教育"],
  },
  {
    name: "Vast.ai",
    description: "去中心化的 GPU 算力市场，价格透明，可按需选择不同配置的实例。",
    href: "https://vast.ai",
    tags: ["去中心化", "灵活"],
  },
  {
    name: "Lambda Labs",
    description: "专注 AI 训练的云端 GPU 服务商，提供 A100、H100 等高端显卡实例。",
    href: "https://lambdalabs.com",
    tags: ["高端GPU", "训练"],
  },
  {
    name: "腾讯云 GPU",
    description: "腾讯云提供的 GPU 计算实例，国内网络稳定，适合企业级 AI 项目部署。",
    href: "https://cloud.tencent.com/product/gpu",
    tags: ["国产", "企业级"],
  },
  {
    name: "阿里云 PAI",
    description: "阿里巴巴一站式机器学习平台，内置多种 AI 框架和算力资源。",
    href: "https://www.aliyun.com/product/pai",
    tags: ["国产", "一站式"],
  },
  {
    name: "RunPod",
    description: "面向 AI 开发者的云端 GPU 平台，支持自定义部署和 serverless 推理。",
    href: "https://runpod.io",
    tags: ["推理", "开发友好"],
  },
];

export default function CloudPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Header */}
      <header className="py-16 px-4 text-center">
        <div className="text-5xl mb-4">☁️</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          云端算力
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          RunningHub、AutoDL 等云端 GPU 租赁平台，低门槛体验高阶 AI 跑图。
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
