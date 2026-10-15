import { createFileRoute } from '@tanstack/react-router';
import { Smartphone } from 'lucide-react';
export const Route = createFileRoute('/sms')({
 head: () => ({ meta: [{ title:'ซื้อเบอร์ SMS | QUIXYSHOP' }, { name:'description', content:'บริการเบอร์ SMS ของ QUIXYSHOP' }, { property:'og:title', content:'ซื้อเบอร์ SMS | QUIXYSHOP' }, { property:'og:description', content:'บริการเบอร์ SMS ของ QUIXYSHOP' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
 component: Sms,
});
function Sms() { return <main className="site-width sms-main"><h1>ซื้อเบอร์ sms</h1><div className="sms-empty"><Smartphone size={40}/><p>ยังไม่มีเบอร์ SMS พร้อมจำหน่าย</p></div></main>; }
