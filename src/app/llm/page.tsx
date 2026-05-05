import Link from "next/link";

interface Tool {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

const tools: Tool[] = [
  {
    name: "ChatGPT",
    description: "OpenAI 开发的全球领先 AI 助手，支持对话、编程、写作等多种任务。",
    href: "https://chat.openai.com",
    tags: ["免费", "多模态"],
  },
  {
    name: "Claude",
    description: "Anthropic 推出的高智能 AI 模型，在长文本处理和代码能力上表现优异。",
    href: "https://claude.ai",
    tags: ["长上下文", "代码"],
  },
  {
    name: "Gemini",
    description: "Google 的多模态 AI，深度集成 Google 生态，支持搜索增强对话。",
    href: "https://gemini.google.com",
    tags: ["免费", "多模态"],
  },
  {
    name: "DeepSeek",
    description: "国产开源大模型，数学和代码能力出众，提供免费的 API 服务。",
    href: "https://deepseek.com",
    tags: ["国产", "开源"],
  },
  {
    name: "Qwen 通义千问",
    description: "阿里巴巴推出的大语言模型，中文理解能力强，支持超长上下文。",
    href: "https://tongyi.aliyun.com",
    tags: ["国产", "长文本"],
  },
  {
    name: "Perplexity",
    description: "AI 搜索引擎，提供实时联网搜索结果和引用来源的精准回答。",
    href: "https://www.perplexity.ai",
    tags: ["搜索", "实时联网"],
  },
  {
    name: "Kimi",
    description: "月之暗面开发的 AI 助手，支持 200 万字超长上下文输入。",
    href: "https://kimi.moonshot.cn",
    tags: ["国产", "长上下文"],
  },
  {
    name: "Cursor",
    description: "基于 AI 的代码编辑器，支持代码补全、对话和代码库理解。",
    href: "https://cursor.sh",
    tags: ["编程", "IDE"],
  },
];

export default function LLMPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Header */}
      <header className="py-16 px-4 text-center">
        <div className="text-5xl mb-4">🧠</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          LLM 大模型
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          连接全球顶尖大语言模型，从对话到编程，一站式体验 AI 的智能边界。
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
