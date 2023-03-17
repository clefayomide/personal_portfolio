import "@/styles/globals.css";
import { Roboto, Comic_Neue } from "next/font/google";

const roboto_thin = Roboto({ subsets: ["latin"], weight: "100" });
const roboto_light = Roboto({ subsets: ["latin"], weight: "300" });
const comic_neue_bold = Comic_Neue({ subsets: ["latin"], weight: "700" });
const comic_neue_normal = Comic_Neue({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --roboto_thin: ${roboto_thin.style.fontFamily};
          --roboto_light: ${roboto_light.style.fontFamily};
          --comic_neue_bold: ${comic_neue_bold.style.fontFamily};
          --comic_neue_normal: ${comic_neue_normal.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
