import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
	default: "SOCMA | رافعة شوكية بقدرة 30 طن مصممة لأصعب التحديات",
	template: "SOCMA رافعة شوكية 30 طن"
	},
	description:
	"عزز عملياتك باستخدام رافعة شوكية بقدرة 30 طن مصممة للصناعات الثقيلة. من مناولة الإطارات في مناجم الفحم إلى صهر الفولاذ باستخدام المغناطيسات الكهربائية، مرورًا باستخراج الأحجار والخدمات اللوجستية للحاويات، توفر HNF-300 من SOCMA موثوقية لا مثيل لها. هل تبحث عن رافعة شوكية بوزن 30 طن للبيع أو للإيجار؟ نحن نوفر لك ذلك – سواء في سيدني أو مونتغمري أو في أي مكان آخر.",
	openGraph: {
	title: "SOCMA رافعة شوكية 30 طن",
	description:
	"عزز عملياتك باستخدام رافعة شوكية بقدرة 30 طن مصممة للصناعات الثقيلة. من مناولة الإطارات في مناجم الفحم إلى صهر الفولاذ باستخدام المغناطيسات الكهربائية، مرورًا باستخراج الأحجار والخدمات اللوجستية للحاويات، توفر HNF-300 من SOCMA موثوقية لا مثيل لها. هل تبحث عن رافعة شوكية بوزن 30 طن للبيع أو للإيجار؟ نحن نوفر لك ذلك – سواء في سيدني أو مونتغمري أو في أي مكان آخر.",
	images: [
	{
	url: "/opengraph-image.png",
	width: 1200,
	height: 630,
	alt: "SOCMA رافعة شوكية 30 طن"
	}
	],
	locale: "ar_AE",
	type: "website"
	},
	twitter: {
	card: "summary_large_image",
	title: {
	default: "SOCMA رافعة شوكية 30 طن",
	template: "SOCMA رافعة شوكية 30 طن"
	},
	description:
	"عزز عملياتك باستخدام رافعة شوكية بقدرة 30 طن مصممة للصناعات الثقيلة. من مناولة الإطارات في مناجم الفحم إلى صهر الفولاذ باستخدام المغناطيسات الكهربائية، مرورًا باستخراج الأحجار والخدمات اللوجستية للحاويات، توفر HNF-300 من SOCMA موثوقية لا مثيل لها. هل تبحث عن رافعة شوكية بوزن 30 طن للبيع أو للإيجار؟ نحن نوفر لك ذلك – سواء في سيدني أو مونتغمري أو في أي مكان آخر.",
	images: [
	{
	url: "/opengraph-image.png",
	alt: "SOCMA رافعة شوكية 30 طن"
	}
	]
	}
	};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
