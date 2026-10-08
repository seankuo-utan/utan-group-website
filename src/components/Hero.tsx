import { ArrowRight, Phone, Anchor, Ship, Plane } from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="貨櫃船於港口裝卸"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e35] via-[#0a1e35]/85 to-[#1D549F]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e35] via-transparent to-[#0a1e35]/30" />
      </div>

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-20 w-72 h-72 bg-[#EBB810]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#1D549F]/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#EBB810]/20 mb-8 opacity-start animate-fade-in-up">
            <Anchor className="w-4 h-4 text-[#EBB810]" />
            <span className="text-sm text-[#EBB810] font-medium tracking-wide">
              自 2010 年 · 立足基隆港與台北港
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] text-balance opacity-start animate-fade-in-up animation-delay-200">
            深耕港埠裝卸與跨境物流
            <br />
            <span className="bg-gradient-to-r from-[#EBB810] via-[#f0c930] to-[#1D549F] bg-clip-text text-transparent">
              連結全球供應鏈
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl opacity-start animate-fade-in-up animation-delay-300">
            自 2010 年成立以來，裕騰聯合立足基隆港與台北港，提供倉儲裝卸、兩岸正貿、海空運承攬與跨境電商的一站式物流解決方案。
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-start animate-fade-in-up animation-delay-500">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#1D549F] to-[#154a8a] text-white shadow-xl shadow-[#1D549F]/25 hover:shadow-[#1D549F]/40 hover:scale-105 transition-all duration-300"
            >
              探索核心服務
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold bg-white/5 backdrop-blur-sm border border-[#EBB810]/30 text-white hover:bg-[#EBB810]/10 hover:border-[#EBB810]/60 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-[#EBB810]" />
              聯繫物流專家
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="mt-16 flex flex-wrap gap-8 opacity-start animate-fade-in-up animation-delay-700">
            <div className="flex items-center gap-3">
              <Ship className="w-5 h-5 text-[#EBB810]" />
              <span className="text-sm text-gray-300">海運承攬</span>
            </div>
            <div className="flex items-center gap-3">
              <Plane className="w-5 h-5 text-[#EBB810]" />
              <span className="text-sm text-gray-300">空運承攬</span>
            </div>
            <div className="flex items-center gap-3">
              <Anchor className="w-5 h-5 text-[#EBB810]" />
              <span className="text-sm text-gray-300">港口裝卸</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-start animate-fade-in animation-delay-700">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#EBB810]/60 to-transparent" />
      </div>
    </section>
  );
}
