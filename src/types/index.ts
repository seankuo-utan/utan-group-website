export interface ContactSubmission {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message?: string;
}

export const SERVICE_OPTIONS = [
  '倉儲裝卸與物流',
  '跨境電商一站式運營服務',
  '兩岸正貿業務',
  '海空運貨物承攬',
  '進/出/轉口收發貨管理',
  '報關代理服務',
  '其他諮詢',
] as const;
