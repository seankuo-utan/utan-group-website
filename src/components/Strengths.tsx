import { ShieldCheck, Zap, HeartHandshake, Anchor } from 'lucide-react';

const STRENGTHS = [
  {
    icon: ShieldCheck,
    title: '優質安全',
    subtitle: 'Quality & Safety',
    desc: '嚴格的安全管理規範與品質控管流程，確保每一件貨物在裝卸、倉儲與運輸過程中獲得最完善的保障。',
    points: ['專業裝卸機械', '安全管理規範', '貨物保障制度'],
  },
  {
    icon: Zap,
    title: '高效平順',
    subtitle: 'High Efficiency',
    desc: '精簡的作業流程與即時資訊追蹤，讓貨物從入倉到配送的每一環節都能高效、流暢地銜接。',
    points: ['即時物流追蹤', '精簡作業流程', '靈活調度能力'],
  },
  {
    icon: HeartHandshake,
    title: '專業誠信',
    subtitle: 'Professional Integrity',
    desc: '資深專業團隊以誠信為本，提供透明、合規的物流服務，建立與客戶長期互信的合作關係。',
    points: ['資深專業團隊', '合規透明營運', '長期合作承諾'],
  },
];

const PORT_IMAGE =
  'https://images.pexels.com/photos/37914183/pexels-photo-37914183.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Strengths() {
  return (
    <section id="strengths" className="relative py-24 lg:py-32 bg-[#081526] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EBB810]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBB810]/10 border border-[#EBB810]/20 mb-6">
              <Anchor className="w-4 h-4 text-[#EBB810]" />
              <span className="text-sm text-[#EBB810] font-medium tracking-wide">
                港口與硬體優勢 · 企業優勢
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              以三大核心價值
              <br />
              <span className="bg-gradient-to-r from-[#EBB810] to-[#1D549F] bg-clip-text text-transparent">
                驅動物流服務品質
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed lg:pb-2">
            裕騰聯合深耕基隆港與台北港，擁有自有倉庫、專業裝卸機械與運輸車隊，以優質安全、高效平順、專業誠信三大核心價值，為客戶創造可靠的物流夥伴關係。
          </p>
        </div>

        {/* Port image banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <img
            src={PORT_IMAGE}
            alt="現代化貨櫃碼頭與起重機"
            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081526] via-[#081526]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EBB810]" />
                <span className="text-sm text-gray-200">基隆港營運基地</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EBB810]" />
                <span className="text-sm text-gray-200">台北港營運基地</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1D549F]" />
                <span className="text-sm text-gray-200">專業裝卸機械</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1D549F]" />
                <span className="text-sm text-gray-200">自有運輸車隊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRENGTHS.map((strength) => (
            <div
              key={strength.title}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8 hover:border-[#EBB810]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#EBB810]/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EBB810]/20 to-[#1D549F]/20 border border-[#EBB810]/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <strength.icon className="w-8 h-8 text-[#EBB810]" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{strength.title}</h3>
                <p className="text-sm text-[#EBB810]/70 font-medium mb-4">{strength.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{strength.desc}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {strength.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#EBB810] to-[#1D549F]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EBB810] via-[#1D549F] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
