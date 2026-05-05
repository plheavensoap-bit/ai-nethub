import Link from "next/link";

export default function AboutPage() {
  const team = [
    { name: "AI-NetHub 团队", role: "创始人 & 开发者", avatar: "👨‍💻", bio: "热爱 AI 技术的开发者，致力于为更多人提供便捷的 AI 工具导航服务。" },
  ];

  const milestones = [
    { year: "2026.01", event: "AI-NetHub 项目启动" },
    { year: "2026.03", event: "上线首批 30+ AI 工具" },
    { year: "2026.05", event: "推出用户系统和收藏夹功能" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Hero */}
      <header className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          关于 AI-NetHub
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          让每个人都能轻松发现和用好 AI 工具
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-24">
        {/* Story */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">我们的故事</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 leading-relaxed mb-4">
              AI-NetHub 的诞生源于一个简单的想法：AI 工具越来越多，但找到一个好用、合适的工具却越来越难。
              我们每天在各种网站之间跳转，比较、试用、收藏，效率低下。
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              于是我们决定做一个 AI 工具导航站，把全球最好的 AI 工具整理在一起，按分类展示，
              让大家能快速找到需要的工具。更进一步，我们希望这不仅是个人工具，更是一个可以和家人朋友共享的平台。
            </p>
            <p className="text-zinc-400 leading-relaxed">
              我们相信，AI 不应该只是技术精英的专利，每个人都应该能轻松享受 AI 带来的便利和创造力。
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <h2 className="text-2xl font-bold mb-6">我们的使命</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">连接全球</h3>
              <p className="text-sm text-zinc-400">汇聚世界各地的优秀 AI 工具，打破信息壁垒。</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">共享协作</h3>
              <p className="text-sm text-zinc-400">让家人朋友一起分享和发现好用的 AI 工具。</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">降低门槛</h3>
              <p className="text-sm text-zinc-400">让每个人都能轻松上手 AI，无需技术背景。</p>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">发展历程</h2>
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <div className="px-3 py-1 rounded-full bg-zinc-800 text-sm font-mono text-zinc-300">
                  {m.year}
                </div>
                <p className="text-zinc-400">{m.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-zinc-500">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">联系我们</h2>
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4">联系方式</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li>
                    <span className="text-zinc-600 block text-xs">邮箱</span>
                    contact@ai-nethub.com
                  </li>
                  <li>
                    <span className="text-zinc-600 block text-xs">微信</span>
                    AI_NetHub
                  </li>
                  <li>
                    <span className="text-zinc-600 block text-xs">商务合作</span>
                    business@ai-nethub.com
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">社交媒体</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="#" className="hover:text-zinc-200 transition-colors">Twitter / X</a></li>
                  <li><a href="#" className="hover:text-zinc-200 transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-zinc-200 transition-colors">Discord 社区</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
