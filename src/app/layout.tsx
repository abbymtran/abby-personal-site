import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abby Tran — AI Safety & Trust Product Leader",
  description:
    "Product executive specializing in AI safety, trust & safety, parental controls, age verification, LLM guardrails, and compliance at scale. Head of Safety & Compliance at Snap, leading child safety, content moderation, and responsible AI product development for nearly a billion users.",
  keywords: [
    "AI safety",
    "trust and safety",
    "AI product leader",
    "LLM safety",
    "LLM guardrails",
    "responsible AI",
    "parental controls",
    "age verification",
    "age gating",
    "child safety",
    "teen safety",
    "online safety",
    "content moderation",
    "platform safety",
    "safety by design",
    "compliance",
    "regulatory compliance",
    "digital wellbeing",
    "family safety",
    "safety infrastructure",
    "AI governance",
    "AI risk",
    "product safety",
    "Snap",
    "Snapchat",
    "Abby Tran",
  ],
  openGraph: {
    title: "Abby Tran — AI Safety & Trust Product Leader",
    description:
      "Product executive specializing in AI safety, parental controls, age verification, and compliance at scale. Head of Safety & Compliance at Snap, Inc.",
    url: "https://abbytran.com",
    siteName: "Abby Tran",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abby Tran — AI Safety & Trust Product Leader",
    description:
      "Product executive specializing in AI safety, parental controls, age verification, and compliance at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://abbytran.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abby Tran",
              url: "https://abbytran.com",
              jobTitle: "Head of Safety & Compliance",
              worksFor: {
                "@type": "Organization",
                name: "Snap, Inc.",
              },
              knowsAbout: [
                "AI Safety",
                "Trust and Safety",
                "LLM Safety & Guardrails",
                "Responsible AI",
                "Parental Controls",
                "Age Verification",
                "Child Safety",
                "Teen Safety",
                "Content Moderation",
                "Platform Safety",
                "Regulatory Compliance",
                "Digital Wellbeing",
                "AI Governance",
                "Safety Infrastructure",
              ],
              description:
                "Product executive specializing in AI safety, trust & safety, parental controls, age verification, and compliance at scale.",
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
