"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LinkButton from "@/app/ui/Buttons/Link Button/linkButton";
import NewsIcon from "./news_icon";

export default function Page() {
  const mountain = (
    <Image
      src="/images/wallpapers/wallpaper11.jpg"
      height={512}
      width={512}
      alt={"A luminous night sky filled with stars"}
      style={{ borderRadius: "1rem" }}
    />
  );

  const news = (
    <NewsIcon
      style={{
        backgroundColor: "var(--background)",
        padding: "0rem",
        fill: "var(--foreground)",
      }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "1rem",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      <LinkButton href="/home" text="Accept" variant="primary" />
      <LinkButton
        href="https://www.google.com"
        text="This is a good button!"
        variant="secondary"
      />
      <LinkButton href="/options" text="Options" variant="tertiary" />
      <LinkButton
        href="/news"
        text="News"
        icon={news}
        variant="secondary"
        buttonStyle={{
          color: "var(--foreground)",
          fontWeight: "500",
          borderColor: "var(--foreground)",
        }}
      />
      <LinkButton
        href="/app"
        text="Starry Stars"
        icon={mountain}
        variant="primary"
        buttonStyle={{
    
        }}
      />
    </div>
  );
}
