import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              AI-NetHub
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              您的终极 AI 工具导航站，汇聚全球顶尖大模型、图像生成、音乐制作与云端算力平台。
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.995 1.204.888-.243 1.846-.363 2.814-.366 0 .853.004 1.708.014 2.557 2.037-.461 4.329-1.241 4.329-5.584 0-1.234-.44-2.244-1.163-3.037.117-.286.513-1.442-.114-3.004 0 0-.919-.295-3.019 1.066-.889-.263-1.842-.401-2.803-.405 0 .001 0 .001 0 0zm0 19.084c-1.983 0-3.587-1.605-3.587-3.588s1.604-3.587 3.587-3.587 3.588 1.604 3.588 3.587-1.605 3.588-3.588 3.588z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">快速导航</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/llm" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">LLM 大模型</Link></li>
              <li><Link href="/images" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">图像生成</Link></li>
              <li><Link href="/music" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">音乐制作</Link></li>
              <li><Link href="/cloud" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">云端算力</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">支持</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/pricing" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">定价方案</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">关于我们</Link></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">常见问题</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">联系我们</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-zinc-500">
                <span className="block text-zinc-600 text-xs">邮箱</span>
                contact@ai-nethub.com
              </li>
              <li className="text-sm text-zinc-500">
                <span className="block text-zinc-600 text-xs">微信</span>
                AI_NetHub
              </li>
              <li className="text-sm text-zinc-500">
                <span className="block text-zinc-600 text-xs">商务合作</span>
                business@ai-nethub.com
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">
              &copy; 2026 AI-NetHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-zinc-600">支持支付方式：</span>
              <div className="flex gap-3 items-center">
                <div className="px-3 py-1.5 rounded bg-zinc-800 text-xs text-zinc-400">微信支付</div>
                <div className="px-3 py-1.5 rounded bg-zinc-800 text-xs text-zinc-400">支付宝</div>
                <div className="px-3 py-1.5 rounded bg-zinc-800 text-xs text-zinc-400">信用卡</div>
                <div className="px-3 py-1.5 rounded bg-zinc-800 text-xs text-zinc-400">USDT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
