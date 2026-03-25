import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İndirim Rehberi & Alışveriş İpuçları | Alertix Blog",
  description:
    "Ürün indirimleri, gerçek indirimler ve alışveriş rehberi hakkında en güncel bilgiler. Alertix Blog ile akıllı alışveriş yapın.",
  keywords: [
    "ürün indirimleri", "gerçek indirimler", "alışveriş rehberi",
    "indirim takip", "fiyat karşılaştırma", "flaş indirim",
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
