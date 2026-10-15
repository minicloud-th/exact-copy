import { createFileRoute } from '@tanstack/react-router';
import { Wallet } from 'lucide-react';
export const Route = createFileRoute('/topup')({
 head: () => ({ meta: [{ title:'เติมเงิน | dekdev' }, { name:'description', content:'เติมเงินสำหรับการสั่งซื้อสินค้าที่ dekdev' }, { property:'og:title', content:'เติมเงิน | dekdev' }, { property:'og:description', content:'เติมเงินสำหรับการสั่งซื้อสินค้าที่ dekdev' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
 component: Page,
});
function Page() { return <main className="site-width account-main"><h1>เติมเงิน</h1><div className="account-empty"><Wallet size={36}/><p>ระบบเติมเงินยังไม่เปิดใช้งาน</p></div></main>; }
