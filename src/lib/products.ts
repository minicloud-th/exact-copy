import gemini from '@/assets/gemini.asset.json';
import chatgpt from '@/assets/chatgpt.asset.json';
import canva from '@/assets/canva.asset.json';
import bilibili from '@/assets/bilibili.asset.json';
import prime from '@/assets/prime.asset.json';
import iqiyi from '@/assets/iqiyi.asset.json';
import youtube from '@/assets/youtube.asset.json';
import netflix from '@/assets/netflix.asset.json';
import nitro from '@/assets/nitro.asset.json';
import netflixLogo from '@/assets/netflix-logo.asset.json';
import wetv from '@/assets/wetv.asset.json';

export type Product = { id: string; name: string; category: string; price: number; stock: number; image: string; delivery?: boolean };
export const products: Product[] = [
  { id: 'youtube', name: 'Youtube Premium 30 วัน', category: 'Social', price: 59, stock: 0, image: youtube.url },
  { id: 'netflix', name: 'Netflix 4K 30 วัน ส่วนตัว', category: 'Social', price: 129, stock: 0, image: netflix.url },
  { id: 'nitro', name: 'Nitro Promo 3 เดือน', category: 'Social', price: 89, stock: 6, image: nitro.url },
  { id: 'bilibili', name: 'Bilibili Premium 30 วัน', category: 'Social', price: 35, stock: 1, image: bilibili.url },
  { id: 'iqiyi', name: 'iQIYI VIP 30 วัน', category: 'Social', price: 39, stock: 10, image: iqiyi.url },
  { id: 'prime', name: 'Amazon Prime Video 30 วัน', category: 'Social', price: 39, stock: 3, image: prime.url },
  { id: 'netflix-tv', name: 'Netflix 4K 30 วัน จอทีวี', category: 'Social', price: 99, stock: 2, image: netflixLogo.url },
  { id: 'wetv', name: 'WeTV VIP 30 วัน', category: 'Social', price: 39, stock: 5, image: wetv.url },
  { id: 'chatgpt', name: 'CHATGPT PLUS+ 30 วัน ส่วนตัว', category: 'AI Account', price: 299, stock: 0, image: chatgpt.url },
  { id: 'gemini', name: 'Gemini AI PRO 18 เดือน', category: 'AI Account', price: 269, stock: 0, image: gemini.url, delivery: true },
  { id: 'canva', name: 'CANVA PRO 2 ปี แอดเข้าเมล', category: 'Social Account', price: 299, stock: 5, image: canva.url },
];
export const popularProducts = ['gemini', 'chatgpt', 'canva', 'bilibili', 'prime', 'iqiyi'].flatMap(id => products.filter(p => p.id === id));
export function filterProducts(query: string, category = 'ทั้งหมด') {
  return products.filter(p => (category === 'ทั้งหมด' || p.category === category) && p.name.toLowerCase().includes(query.trim().toLowerCase()));
}