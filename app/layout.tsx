import Link from "next/link";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <header>
          <h1>
            <Link href="/">linda liu</Link>
          </h1>
          <h2>
            <Link href="/">home</Link>  .  <Link href="/Linda_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer">resume</Link>  .  <Link href="/blog">blog</Link>
          </h2>
          <hr className="custom-hr" />
        </header>
        {children}
      </body>
    </html>
  );
}
