import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: '關於我們', href: '#about' },
  { label: '核心服務', href: '#services' },
  { label: '港口與硬體優勢', href: '#strengths' },
  { label: '企業優勢', href: '#strengths' },
  { label: '聯繫我們', href: '#contact' },
];

const SERVICES_LINKS = [
  '倉儲裝卸與物流',
  '跨境電商一站式運營服務',
  '兩岸正貿業務',
  '海空運貨物承攬',
  '進/出/轉口收發貨管理',
  '報關代理服務',
];

export default function Footer() {
  return (
    <footer className="relative bg-[#06111e] border-t border-[#EBB810]/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EBB810]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="UTAN GROUP 裕騰聯合"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              深耕港埠裝卸與跨境物流，連結全球供應鏈。自 2010 年立足基隆港與台北港，提供一站式物流解決方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              快速導覽
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#EBB810] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              服務項目
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#EBB810] transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              聯絡資訊
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EBB810] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  臺北市中山區長安東路二段230號11樓之7
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EBB810] shrink-0" />
                <a href="tel:+886225178893" className="text-sm text-gray-400 hover:text-[#EBB810] transition-colors">
                  (02) 2517-8893
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EBB810] shrink-0" />
                <a href="mailto:contact@utangroup.com.tw" className="text-sm text-gray-400 hover:text-[#EBB810] transition-colors">
                  contact@utangroup.com.tw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 Utan Group 裕騰聯合有限公司. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-[#EBB810] animate-pulse" />
            <span>統一編號：53129259</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
