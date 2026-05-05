import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "LLM 大模型",
      description: "连接 GPT, Claude, Gemini 等顶尖模型，体验最强对话与编程能力。",
      icon: "🧠",
      href: "/llm",
      count: "8+",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "图像生成",
      description: "整合 ComfyUI, Midjourney, Stable Diffusion，释放无限视觉创造力。",
      icon: "🎨",
      href: "/images",
      count: "8+",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "音乐制作",
      description: "Suno, Udio 等 AI 音乐工具一站式获取，让创作旋律简单触手可及。",
      icon: "🎵",
      href: "/music",
      count: "6+",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "云端算力",
      description: "RunningHub, AutoDL 等云端 GPU 租赁平台，低门槛体验高阶 AI 跑图。",
      icon: "☁️",
      href: "/cloud",
      count: "8+",
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  const features = [
    {
      icon: "🚀",
      title: "一站直达",
      description: "无需记住多个网址，所有 AI 工具一站式聚合，快速访问。",
    },
    {
      icon: "👥",
      title: "共享协作",
      description: "与家人朋友共享收藏，一起发现好用的 AI 工具。",
    },
    {
      icon: "⭐",
      title: "收藏推荐",
      description: "收藏喜欢的工具，获取个性化推荐，不错过任何好物。",
    },
    {
      icon: "📱",
      title: "多端适配",
      description: "完美适配手机、平板和桌面端，随时随地发现新工具。",
    },
  ];

  const testimonials = [
    {
      name: "小李",
      role: "设计师",
      content: "终于不用在十几个网站之间来回切换了，AI-NetHub 帮我把所有工具整理得井井有条。",
      avatar: "👨‍🎨",
    },
    {
      name: "王哥",
      role: "开发者",
      content: "云端算力导航特别实用，再也不用到处找便宜的 GPU 平台了。",
      avatar: "👨‍💻",
    },
    {
      name: "张姐",
      role: "内容创作者",
      content: "分享给团队使用后，大家都说找工具方便多了，效率提升明显。",
      avatar: "👩‍💼",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            已收录 30+ AI 工具，持续更新中
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
            探索 AI 的无限可能
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            汇聚全球顶尖大模型、图像生成、音乐制作与云端算力平台。<br />
            为你和家人朋友打造一个共享的 AI 工具导航站。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/llm"
              className="px-8 py-3.5 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors"
            >
              开始探索
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3.5 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              免费注册
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">分类导航</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            按需求分类，快速找到你需要的 AI 工具
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300 hover:border-zinc-600 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-2xl group-hover:opacity-100 opacity-0 transition-opacity`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">
                    {cat.count} 工具
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-zinc-100 group-hover:text-white">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{cat.description}</p>
                <div className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  查看详情
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-800 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 AI-NetHub</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              不只是导航，更是你和团队的 AI 工具箱
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">三步开始使用</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            简单几步，开启你的 AI 工具探索之旅
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "浏览工具", desc: "浏览我们精心整理的 AI 工具集合，找到适合你的工具。" },
            { step: "02", title: "收藏使用", desc: "注册账号，收藏喜欢的工具，随时快速访问。" },
            { step: "03", title: "分享协作", desc: "邀请家人朋友一起使用，共同发现更多好物。" },
          ].map((item) => (
            <div key={item.step} className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <div className="text-5xl font-bold text-zinc-800 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-zinc-800 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">用户评价</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              听听他们怎么说
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-zinc-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 blur-[80px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始了吗？</h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-8">
              免费注册，立即开始探索全球顶尖 AI 工具，与家人朋友共享智能创作的乐趣。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3.5 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors"
              >
                免费注册
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3.5 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                查看定价
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
