"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/signin",
    "/signup",
    "/forget-password",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}

      {children}

      {!shouldHideLayout && <Footer />}
    </>
  );
}