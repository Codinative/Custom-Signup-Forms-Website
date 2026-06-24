import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: "mE51E51lm1Lwm73kSnZ_DXll15Ab0zp2aWaCnir5q2s" },
  title: {
    default: "Custom Signup Forms - custom registration forms for BigCommerce",
    template: "%s - Custom Signup Forms",
  },
  description:
    "A BigCommerce app by Codinative that replaces the default account signup with a branded, custom form - build fields visually, review and approve requests, and automate the emails. Perfect for B2B, wholesale and members-only stores.",
  keywords: [
    "BigCommerce signup form", "custom registration form", "B2B signup", "wholesale registration",
    "customer approval", "form builder", "Codinative", "customer groups", "account approval",
  ],
  openGraph: {
    type: "website",
    title: "Custom Signup Forms - custom registration forms for BigCommerce",
    description:
      "Replace the default BigCommerce signup with a branded custom form, review and approve every request, and automate the emails - no code required.",
    siteName: "Custom Signup Forms",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
