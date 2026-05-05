import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 hover:from-zinc-200 hover:to-zinc-300 transition-all">
          AI-NetHub
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-zinc-400 items-center">
          <Link href="/llm" className="hover:text-zinc-100 transition-colors">LLM</Link>
          <Link href="/images" className="hover:text-zinc-100 transition-colors">图像</Link>
          <Link href="/music" className="hover:text-zinc-100 transition-colors">音乐</Link>
          <Link href="/cloud" className="hover:text-zinc-100 transition-colors">云端</Link>
          <Link href="/pricing" className="hover:text-zinc-100 transition-colors">定价</Link>
          <Link href="/about" className="hover:text-zinc-100 transition-colors">关于</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-1.5 text-sm text-zinc-300 hover:text-white transition-colors">
            登录
          </Link>
          <Link href="/signup" className="px-4 py-1.5 text-sm bg-zinc-100 text-zinc-900 rounded-full hover:bg-white transition-colors">
            注册
          </Link>
        </div>
      </div>
    </nav>
  );
}
