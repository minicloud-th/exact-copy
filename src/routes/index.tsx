import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard, SectionLink, useShop } from '@/components/storefront';
import { products, popularProducts, filterProducts } from '@/lib/products';
import faq from '@/assets/faq.asset.json';
import side from '@/assets/side-banner.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title:'dekdev | ร้านแอพพรีเมียมและบัญชีออนไลน์' }, { name:'description', content:'เลือกซื้อแอพพรีเมียมและบัญชีออนไลน์จาก dekdev' }, { property:'og:title', content:'dekdev | ร้านแอพพรีเมียม' }, { property:'og:description', content:'แอพพรีเมียม บัญชีออนไลน์ และสินค้ายอดนิยม' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
  component: Index,
});
function Index() {
  const { query, openProduct } = useShop();
  const [slide, setSlide] = useState(0);
  const [offset, setOffset] = useState(0);
  const shown = query ? filterProducts(query) : [...popularProducts.slice(offset), ...popularProducts.slice(0, offset)];
  return <main className="site-width home-main">
    <div className="banner-carousel"><img className="banner-peek" src={side.url} alt=""/><img className="banner-main" src={slide === 0 ? faq.url : side.url} alt={slide === 0 ? 'คำถามที่พบบ่อย FAQ ติดต่อแอดมินผ่านเมนูช่วยเหลือ และรับวิธีใช้งานหลังซื้อสินค้า' : 'dekdev สินค้าพรีเมียม'}/><img className="banner-peek right" src={side.url} alt=""/><Button variant="ghost" size="icon" className="banner-arrow prev" aria-label="แบนเนอร์ก่อนหน้า" onClick={() => setSlide(slide === 0 ? 1 : 0)}><ChevronLeft/></Button><Button variant="ghost" size="icon" className="banner-arrow next" aria-label="แบนเนอร์ถัดไป" onClick={() => setSlide(slide === 0 ? 1 : 0)}><ChevronRight/></Button></div>
    <div className="carousel-dots">{[0,1].map(i => <Button key={i} variant="ghost" className={`dot ${slide === i ? 'selected' : ''}`} aria-label={`แบนเนอร์ ${i+1}`} onClick={() => setSlide(i)}/>)}</div>
    <section className="statistics"><div className="stats-label"><div><strong>สถิติการใช้งาน</strong><span>ข้อมูลอ้างอิงจากระบบ</span></div><span className="live-label">อัปเดตเรียลไทม์</span></div><div className="stats-grid"><div className="stat-item"><Users className="stat-icon" size={29}/><div className="stat-label"><strong>สมาชิกทั้งหมด</strong>ผู้ใช้งาน</div><div className="stat-number"><strong>12,932</strong><small>คน</small></div></div><div className="stat-item"><ShoppingBag className="stat-icon" size={29}/><div className="stat-label"><strong>คำสั่งซื้อสะสม</strong>ทั้งหมด</div><div className="stat-number"><strong>12,365</strong><small>รายการ</small></div></div></div></section>
    <section className="popular-section"><div className="section-heading"><h2>{query ? 'ผลการค้นหา' : 'สินค้ายอดนิยม'}</h2>{!query && <><Button variant="outline" size="icon" className="arrow-control" aria-label="สินค้าก่อนหน้า" onClick={() => setOffset((offset + 5) % 6)}><ChevronLeft/></Button><Button variant="outline" size="icon" className="arrow-control" aria-label="สินค้าถัดไป" onClick={() => setOffset((offset + 1) % 6)}><ChevronRight/></Button></>}<SectionLink/></div><div className="product-grid">{shown.map(p => <ProductCard key={p.id} product={p}/>)}{!shown.length && <p className="empty-state">ไม่พบสินค้าที่ค้นหา</p>}</div></section>
    <div className="home-lists">{['รายการสินค้ายอดนิยม','รายการสินค้ามาใหม่'].map((title,i) => <section className="compact-list" key={title}><div className="compact-heading"><h2>{title}</h2><SectionLink/></div><div className="compact-products">{(i ? [...products].reverse().slice(0,6) : products.slice(0,6)).map(p => <Button variant="ghost" className="compact-product" key={p.id} onClick={() => openProduct(p)}><img src={p.image} alt={p.name}/><span><strong>{p.name}</strong><small>Thailand</small></span></Button>)}</div></section>)}</div>
  </main>;
}
