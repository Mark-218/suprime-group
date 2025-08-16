import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

// Import Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  );
}
