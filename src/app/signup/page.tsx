"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("注册功能演示：\n姓名：" + name + "\n邮箱：" + email + "\n密码：" + password);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            AI-NetHub
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-2">创建账户</h1>
          <p className="text-zinc-400 text-sm">免费注册，开始探索全球顶尖 AI 工具</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                姓名
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all"
                placeholder="你的姓名"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                邮箱
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                密码
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all"
                placeholder="至少 8 位字符"
                required
              />
            </div>

            <div className="text-sm text-zinc-500">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 mt-0.5" required />
                <span>
                  我同意{" "}
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">服务条款</a>
                  {" "}和{" "}
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">隐私政策</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
            >
              创建账户
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <p className="text-center text-sm text-zinc-500 mb-4">或使用以下方式注册</p>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="py-2.5 rounded-xl border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                Google
              </button>
              <button type="button" className="py-2.5 rounded-xl border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-zinc-500">
            已有账户？{" "}
            <Link href="/login" className="text-zinc-300 hover:text-white transition-colors">
              立即登录
            </Link>
          </p>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
