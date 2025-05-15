import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "SOCMA | رافعة شوكية بوزن 30 طن صُممت لأصعب التحديات",
	description: "عزّز عملياتك باستخدام رافعة شوكية بوزن 30 طن مصممة للصناعات الثقيلة. من مناولة إطارات التعدين إلى صهر الفولاذ باستخدام المغانط الكهربائية، واستخراج الحجارة، ولوجستيات الحاويات – توفر HNF-300 من SOCMA موثوقية لا مثيل لها. هل تبحث عن رافعة شوكية 30 طن للبيع أو للإيجار؟ نحن هنا من أجلك – سواء كنت في سيدني أو مونتغومري أو أي مكان آخر."
  };

// Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${process.env.ROOT_URL}`
		}
	]
};

export default function Home() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<FeaturedCategories />
			<CustomizableOptions />
			<CustomizableProcess />
			<ProductionCapacity />
			<FAQ />
			<Testimonials />
		</>
	);
}
