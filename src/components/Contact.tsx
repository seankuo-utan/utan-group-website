import { useState } from 'react';
import {
  Building2,
  FileText,
  MapPin,
  Phone,
  Printer,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Briefcase,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SERVICE_OPTIONS, type ContactSubmission } from '@/types';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service_interest: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service_interest: '',
  message: '',
};

const COMPANY_INFO = [
  { icon: Building2, label: '公司名稱', value: '裕騰聯合有限公司 (UTAN UNION LIMITED COMPANY)' },
  { icon: FileText, label: '統一編號', value: '53129259' },
  { icon: MapPin, label: '地址', value: '臺北市中山區長安東路二段230號11樓之7' },
  { icon: Phone, label: '電話', value: '(02) 2517-8893' },
  { icon: Printer, label: '傳真', value: '(02) 2517-9947' },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const submission: ContactSubmission = {
      name: form.name.trim(),
      company: form.company.trim() || undefined,
      email: form.email.trim(),
      phone: form.phone.trim() || undefined,
      service_interest: form.service_interest || undefined,
      message: form.message.trim() || undefined,
    };

    const { error } = await supabase.from('contact_submissions').insert(submission);

    if (error) {
      setStatus('error');
      setErrorMessage('系統發生錯誤，請稍後再試或來電洽詢。');
      return;
    }

    setStatus('success');
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a1e35] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EBB810]/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#EBB810]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#1D549F]/8 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBB810]/10 border border-[#EBB810]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EBB810] animate-pulse" />
            <span className="text-sm text-[#EBB810] font-medium tracking-wide">聯繫我們</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            立即諮詢，
            <span className="bg-gradient-to-r from-[#EBB810] to-[#1D549F] bg-clip-text text-transparent">
              開啟您的物流方案
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            無論是倉儲裝卸、兩岸正貿、海空運承攬或跨境電商，裕騰聯合的專業團隊隨時為您提供最合適的物流解決方案。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info - 2 cols */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8 h-full">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#EBB810]/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-2">公司資訊</h3>
                <p className="text-sm text-gray-500 mb-8">UTAN UNION LIMITED COMPANY</p>

                <div className="space-y-6">
                  {COMPANY_INFO.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#EBB810]/10 border border-[#EBB810]/15 shrink-0">
                        <info.icon className="w-5 h-5 text-[#EBB810]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-sm text-gray-200 leading-relaxed break-words">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick contact buttons */}
                <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                  <a
                    href="tel:+886225178893"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1D549F] to-[#154a8a] text-white text-sm font-semibold shadow-lg shadow-[#1D549F]/20 hover:scale-[1.02] transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    立即來電
                  </a>
                  <a
                    href="mailto:contact@utangroup.com.tw"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#EBB810]" />
                    Email 諮詢
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/15 border border-green-500/20 mb-6 animate-scale-in">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">感謝您的諮詢！</h3>
                  <p className="text-gray-400 max-w-md mb-8">
                    我們已收到您的訊息，專業團隊將儘快與您聯繫。如有緊急需求，請直接來電 (02) 2517-8893。
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    返回表單
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="姓名 *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="請輸入您的姓名"
                      icon={User}
                      required
                    />
                    <Field
                      label="公司名稱"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="請輸入公司名稱"
                      icon={Briefcase}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="電子郵件 *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      icon={Mail}
                      required
                    />
                    <Field
                      label="電話"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(02) 0000-0000"
                      icon={Phone}
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      感興趣的服務
                    </label>
                    <div className="relative">
                      <select
                        name="service_interest"
                        value={form.service_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm focus:border-[#EBB810]/50 focus:ring-2 focus:ring-[#EBB810]/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0a1e35]">
                          請選擇服務項目
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a1e35]">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      訊息內容
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="請描述您的物流需求或問題..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm placeholder-gray-600 focus:border-[#EBB810]/50 focus:ring-2 focus:ring-[#EBB810]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 animate-fade-in">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span className="text-sm text-red-300">{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#EBB810] to-[#d4a508] text-[#0a1e35] text-base font-semibold shadow-xl shadow-[#EBB810]/25 hover:shadow-[#EBB810]/40 hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        送出中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        送出諮詢
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  icon: React.ComponentType<{ className?: string }>;
  required?: boolean;
}

function Field({ label, name, value, onChange, placeholder, type = 'text', icon: Icon, required }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm placeholder-gray-600 focus:border-[#EBB810]/50 focus:ring-2 focus:ring-[#EBB810]/20 outline-none transition-all"
        />
      </div>
    </div>
  );
}
