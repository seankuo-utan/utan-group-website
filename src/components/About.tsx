import { Warehouse, Truck, PackageCheck, Building2 } from 'lucide-react';

const STATS = [
  { value: '2010', label: '成立年份', sub: '深耕物流產業' },
  { value: '2大港口', label: '基隆港 / 台北港', sub: '雙港策略佈局' },
  { value: '100%', label: '全方位一站式服務', sub: '從裝卸到配送' },
];

const FEATURES = [
  {
    icon: Warehouse,
    title: '自有及代理倉庫',
    desc: '配置專業裝卸機械，提供安全高效的倉儲服務',
  },
  {
    icon: Truck,
    title: '運輸車隊',
    desc: '自有運輸車隊，精準掌握配送時效',
  },
  {
    icon: PackageCheck,
    title: '物流加值服務',
    desc: '包裝、分揀、貼標等一站式加值處理',
  },
  {
    icon: Building2,
    title: '兩大港口深耕',
    desc: '基隆港與台北港雙港聯運策略佈局',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#081526] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1D549F]/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBB810]/10 border border-[#EBB810]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EBB810] animate-pulse" />
            <span className="text-sm text-[#EBB810] font-medium tracking-wide">關於我們</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            立足台灣雙港，佈局
            <span className="bg-gradient-to-r from-[#EBB810] to-[#1D549F] bg-clip-text text-transparent">
              全球物流網絡
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            裕騰聯合有限公司自 2010 年成立以來，以基隆港與台北港為雙核心營運基地，憑藉豐富的港埠裝卸經驗與專業物流團隊，為客戶提供從倉儲、運輸到通關的完整供應鏈服務。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8 hover:border-[#EBB810]/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#EBB810]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white to-[#EBB810] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.sub}</div>
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-[#EBB810] to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-3 p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#EBB810]/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#EBB810]/10 group-hover:bg-[#EBB810]/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#EBB810]" />
              </div>
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
