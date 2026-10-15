import { createFileRoute } from '@tanstack/react-router';
import { ShoppingBag } from 'lucide-react';
export const Route = createFileRoute('/orders')({
 head: () => ({ meta: [{ title:'ประวัติการซื้อ | dekdev' }, { name:'description', content:'ประวัติรายการสั่งซื้อของคุณที่ dekdev' }, { property:'og:title', content:'ประวัติการซื้อ | dekdev' }, { property:'og:description', content:'ประวัติรายการสั่งซื้อของคุณที่ dekdev' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
 component: Page,
});
function Page() { return <main className="site-width account-main"><h1>ประวัติการซื้อ</h1><div className="account-empty"><ShoppingBag size={36}/><p>เข้าสู่ระบบเพื่อดูประวัติการซื้อ</p></div></main>; }
