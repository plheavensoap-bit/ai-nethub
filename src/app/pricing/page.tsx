"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "免费版",
    price: "¥0",
    period: "/永久",
    description: "适合个人日常使用",
    features: [
      "浏览所有 AI 工具",
      "收藏最多 10 个工具",
      "基础分类导航",
      "移动端适配",
    ],
    cta: "开始使用",
    highlighted: false,
  },
  {
    name: "专业版",
    price: "¥29",
    period: "/月",
    description: "适合深度用户和创作者",
    features: [
      "无限制收藏工具",
      "个性化推荐",
      "工具使用统计",
      "优先客服支持",
      "自定义标签分类",
      "导出收藏夹",
    ],
    cta: "立即订阅",
    highlighted: true,
  },
  {
    name: "家庭版",
    price: "¥59",
    period: "/月",
    description: "适合家庭和团队协作",
    features: [
      "最多 5 个成员",
      "共享收藏夹",
      "团队协作空间",
      "成员权限管理",
      "专属客服支持",
      "使用数据分析",
      "自定义域名",
    ],
    cta: "立即订阅",
    highlighted: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Header */}
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          简单透明的定价
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
          选择适合你的方案，随时升级或降级
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-3 p-1 rounded-full bg-zinc-900 border border-zinc-800">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              billingCycle === "monthly"
                ? "bg-zinc-700 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            月付
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              billingCycle === "yearly"
                ? "bg-zinc-700 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            年付
            <span className="ml-1.5 text-xs text-green-400">省 20%</span>
          </button>
        </div>
      </header>

      {/* Pricing Cards */}
      <main className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.highlighted
                  ? "border-zinc-600 bg-zinc-800/50 scale-105"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-xs font-medium">
                  最受欢迎
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-zinc-500 mb-4">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">
                  {billingCycle === "yearly"
                    ? plan.name === "专业版"
                      ? "¥279"
                      : plan.name === "家庭版"
                      ? "¥566"
                      : plan.price
                    : plan.price}
                </span>
                <span className="text-zinc-500 text-sm">
                  {billingCycle === "yearly" ? "/年" : plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`block text-center py-3 rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "border border-zinc-700 hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 mb-4">支持的支付方式</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
              微信支付
            </div>
            <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
              支付宝
            </div>
            <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
              信用卡/借记卡
            </div>
            <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
              USDT (TRC20)
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "可以随时取消订阅吗？", a: "可以，随时取消，不会收取额外费用。" },
              { q: "免费版和付费版有什么区别？", a: "免费版提供基础功能，付费版解锁更多高级功能和无限收藏。" },
              { q: "家庭版可以添加多少成员？", a: "家庭版最多支持 5 个成员共享收藏夹和协作空间。" },
            ].map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
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
