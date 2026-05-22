import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Cost Spike Explainer — Stop Guessing Why Your API Bills Spiked",
  description: "Correlates API cost spikes with code deployments. Identifies which endpoints and features caused sudden increases across Stripe, OpenAI, AWS, and more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed5195fb-e5ec-40c8-9410-2383272b89c5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
