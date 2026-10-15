import { createFileRoute } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';
export const Route = createFileRoute('/contact')({
 head: () => ({ meta: [{ title:'ติดต่อเรา | dekdev' }, { name:'description', content:'ช่องทางติดต่อและความช่วยเหลือจาก dekdev' }, { property:'og:title', content:'ติดต่อเรา | dekdev' }, { property:'og:description', content:'ช่องทางติดต่อและความช่วยเหลือจาก dekdev' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
 component: Page,
});
function Page() { return <main className="site-width account-main"><h1>ติดต่อเรา</h1><div className="account-empty"><MessageCircle size={36}/><p>ยังไม่ได้เชื่อมต่อช่องทางติดต่อของร้าน</p></div></main>; }
