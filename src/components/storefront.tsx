import { Link, useRouterState } from '@tanstack/react-router';
import { useState, createContext, useContext, type ReactNode } from 'react';
import { Search, ChevronRight, X, MessageCircle, ShoppingBag, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import logo from '@/assets/logo.asset.json';
import type { Product } from '@/lib/products';

const ShopContext = createContext({ query: '', setQuery: (_value: string) => {}, openProduct: (_product: Product) => {} });
export const useShop = () => useContext(ShopContext);

export function Storefront({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [query, setQuery] = useState('');
  const [login, setLogin] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [support, setSupport] = useState(false);
  return <ShopContext.Provider value={{ query, setQuery, openProduct: setProduct }}>
    <header className="site-header"><div className="site-width header-inner">
      <Link to="/" className="brand"><img src={logo.url} alt="QUIXYSHOP" /></Link>
      <nav aria-label="เมนูหลัก"><Link to="/" className={pathname === '/' ? 'nav-link active' : 'nav-link'}>หน้าแรก</Link><Link to="/store" className={pathname === '/store' ? 'nav-link active' : 'nav-link'}>ร้านค้า</Link><Link to="/sms" className={pathname === '/sms' ? 'nav-link active' : 'nav-link'}>ซื้อเบอร์ sms</Link></nav>
      <label className="header-search"><Search size={18}/><input aria-label="ค้นหาสินค้า" placeholder="ค้นหาเกม / บัตรเติมเงิน..." value={query} onChange={event => setQuery(event.target.value)}/>{query && <Button variant="ghost" size="icon" aria-label="ล้างการค้นหา" onClick={() => setQuery('')}><X/></Button>}</label>
      <Button className="login-button" onClick={() => setLogin(true)}>เข้าสู่ระบบ</Button>
    </div></header>
    {children}
    <footer className="site-width site-footer"><img src={logo.url} alt="QUIXYSHOP"/><span>© 2026 QUIXYSHOP</span></footer>
    <Button className="support-button" onClick={() => setSupport(true)}><span>ติดต่อสอบถาม แจ้งปัญหา</span><MessageCircle size={26}/></Button>
    <Dialog open={login} onOpenChange={setLogin}><DialogContent className="shop-dialog"><DialogHeader><DialogTitle>เข้าสู่ระบบ</DialogTitle><DialogDescription>บัญชีสมาชิก QUIXYSHOP</DialogDescription></DialogHeader><div className="dialog-notice"><LogIn/><p>ระบบสมาชิกยังไม่เปิดใช้งานบนเว็บตัวอย่างนี้</p></div><Button onClick={() => setLogin(false)}>กลับไปเลือกสินค้า</Button></DialogContent></Dialog>
    <Dialog open={!!product} onOpenChange={open => { if (!open) setProduct(null); }}><DialogContent className="shop-dialog"><DialogHeader><DialogTitle>{product?.name}</DialogTitle><DialogDescription>{product?.category}</DialogDescription></DialogHeader>{product && <><img className="detail-image" src={product.image} alt={product.name}/><div className="detail-price"><span>ราคา</span><strong>{product.price} <span className="currency">฿</span></strong></div><p className="text-muted-foreground text-sm">{product.delivery ? 'สินค้าพร้อมส่ง' : `คงเหลือ ${product.stock} ชิ้น`}</p><Button disabled={product.stock === 0 && !product.delivery} onClick={() => { setProduct(null); setLogin(true); }}><ShoppingBag/>{product.stock === 0 && !product.delivery ? 'สินค้าหมด' : 'เข้าสู่ระบบเพื่อสั่งซื้อ'}</Button></>}</DialogContent></Dialog>
    <Dialog open={support} onOpenChange={setSupport}><DialogContent className="shop-dialog"><DialogHeader><DialogTitle>ติดต่อสอบถาม แจ้งปัญหา</DialogTitle><DialogDescription>QUIXYSHOP</DialogDescription></DialogHeader><p className="text-muted-foreground text-sm">ยังไม่ได้เชื่อมต่อช่องทางติดต่อของร้าน</p><Button onClick={() => setSupport(false)}>ปิด</Button></DialogContent></Dialog>
  </ShopContext.Provider>;
}

export function ProductCard({ product }: { product: Product }) {
  const { openProduct } = useShop();
  return <Button variant="ghost" className="product-card" onClick={() => openProduct(product)} aria-label={product.name}>
    <div className="product-image"><img src={product.image} alt={product.name}/>{!['youtube','netflix','nitro'].includes(product.id) && <span className="hot-badge">HOT</span>}</div>
    <h3>{product.name}</h3><div className="product-category"><small>หมวดหมู่:</small><span>{product.category}</span></div>
    <div className="product-bottom"><span>{product.delivery ? 'สินค้าพร้อมส่ง' : `คงเหลือ ${product.stock} ชิ้น`}</span><strong>{product.price} <b>฿</b></strong></div>
  </Button>;
}

export function SectionLink() { return <Link className="section-link" to="/store">ดูทั้งหมด <ChevronRight size={15}/></Link>; }