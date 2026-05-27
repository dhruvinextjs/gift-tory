import Footer from "@/components/Common/Footer";
import BestSeller from "@/components/Landing/BestSeller";
import DealBanner from "@/components/Landing/DealBanner";
import FeaturedProduct from "@/components/Landing/FeaturedProduct";
import GiftFor from "@/components/Landing/GiftFor";
import Hero from "@/components/Landing/Hero";
import RateSection from "@/components/Landing/RateSection";
import ShopbyCategory from "@/components/Landing/ShopbyCategory";
import ShopbyOccasion from "@/components/Landing/ShopbyOccasion";
import Testimonials from "@/components/Landing/Testimonials";
import VideoSection from "@/components/Landing/VideoSection";
import WhyChooseUS from "@/components/Landing/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Hero/>
    <ShopbyCategory/>
    <BestSeller/>
    <ShopbyOccasion/>
    <GiftFor/>
    <DealBanner/>
    <WhyChooseUS/>
    <FeaturedProduct/>
    <RateSection/>
    <VideoSection/>
    <Testimonials/>
    </div>
  );
}
