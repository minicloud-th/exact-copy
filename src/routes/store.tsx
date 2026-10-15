import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronRight, LayoutGrid, Globe, Tag, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard, useShop } from '@/components/storefront';
import { filterProducts, products } from '@/lib/products';
export const Route = createFileRoute('/store')({
 head: () => ({ meta: [{ title:'ร้านค้า | QUIXYSHOP' }, { name:'description', content:'เลือกซื้อ Youtube Premium, Netflix, Nitro, Canva และบัญชี AI ที่ QUIXYSHOP' }, { property:'og:title', content:'ร้านค้า | QUIXYSHOP' }, { property:'og:description', content:'แอพพรีเมียมและบัญชีออนไลน์ทุกหมวดหมู่' }, { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }] }),
 component: Store,
});
function Store() {
 const [category,setCategory] = useState('ทั้งหมด');
 const { query } = useShop();
 const filtered = filterProducts(query,category);
 const categories = [{ name:'ทั้งหมด',icon:LayoutGrid },{ name:'Social',icon:Globe },{ name:'Social Account',icon:Tag },{ name:'AI Account',icon:Bot }];
 return <main className="site-width store-main"><div className="breadcrumbs"><Link to="/">หน้าหลัก</Link><ChevronRight size={12}/><span>ร้านค้า</span></div><div className="store-layout"><aside className="category-panel"><h1 className="category-title"><LayoutGrid size={17}/>หมวดหมู่สินค้า</h1><div className="category-options">{categories.map(({name,icon:Icon}) => <Button key={name} variant="ghost" className={`category-option ${name === category ? 'selected' : ''}`} onClick={() => setCategory(name)}><Icon size={17}/>{name}<span className="category-count">{name === 'ทั้งหมด' ? products.length : products.filter(p => p.category === name).length}</span></Button>)}</div></aside><section className="store-grid" aria-label="สินค้า">{filtered.map(p => <ProductCard key={p.id} product={p}/>)}{!filtered.length && <p className="empty-state">ไม่พบสินค้าในหมวดหมู่นี้</p>}</section></div></main>;
}
