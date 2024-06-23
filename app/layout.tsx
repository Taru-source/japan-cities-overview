import type { Metadata } from "next";
import styles from "./layout.module.scss";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Japan Cities Overview",
  description:
    "ノマドワーカーのために、日本の市区町村の家賃相場を中心に様々な情報をまとめます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Link href={`/`} className={styles.headerLink}>
            Japan Cities Overview
          </Link>
        </header>
        {children}
        <footer className={styles.footer}>
          © 2024 <a href="https://github.com/Taru-source">Taru-source</a>
          <br />
          <Link href="/appendix">Appendix</Link>
        </footer>
      </body>
    </html>
  );
}
