import {
  Warehouse,
  ShoppingBag,
  FileText,
  Ship,
  PackageSearch,
  FileCheck2,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Warehouse,
    number: '01',
    title: '倉儲裝卸與物流',
    desc: '自有及代理營運倉庫，配置專業裝卸機械與運輸車車隊，提供優質安全高效服務。',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    icon: ShoppingBag,
    number: '02',
    title: '跨境電商一站式運營服務',
    desc: '整合倉儲、包裝、物流加值與配送，協助品牌無縫佈局全球市場。',
    accent: 'from-orange-400 to-orange-600',
  },
  {
    icon: FileText,
    number: '03',
    title: '兩岸正貿業務',
    desc: '提供境外公司在臺貿易、收發貨、貨物管理與正貿合規解決方案。',
    accent: 'from-teal-400 to-cyan-600',
  },
  {
    icon: Ship,
    number: '04',
    title: '海空運貨物承攬',
    desc: '提供靈活、高效的國際海運與空運貨物承攬，精準掌握運送時效。',
    accent: 'from-blue-400 to-indigo-600',
  },
  {
    icon: PackageSearch,
    number: '05',
    title: '進/出/轉口收發貨管理',
    desc: '專業處理進口、出口與轉口貨物之收發、暫存與物流加值。',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    icon: FileCheck2,
    number: '06',
    title: '報關代理服務',
    desc: '資深報關團隊代辦通關手續，確保貨物快速、合規通過海關。',
    accent: 'from-cyan-400 to-teal-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0F2942] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium tracking-wide">核心服務</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            六大核心服務，
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              一站式物流解決方案
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            從倉儲裝卸到跨境電商，從兩岸正貿到報關代理，裕騰聯合以專業團隊與完善設施，為您打造端到端的供應鏈服務。
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-white/[0.04] group-hover:text-white/[0.06] transition-colors">
                {service.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                >
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <span>了解更多</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
