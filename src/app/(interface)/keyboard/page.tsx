"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Keyboard from "@/app/ui/Buttons/Keyboard/keyboard";

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

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "1rem",
        margin: "0 auto",
      }}
    >
      <Keyboard
        keyFunctions={{
          [`0`]: () => {
            console.log("You pressed 0");
          },
          [`1`]: () => {
            console.log("You pressed 1");
          },
          [`2`]: () => {
            console.log("You pressed 2");
          },
          [`3`]: () => {
            console.log("You pressed 3");
          },
          [`4`]: () => {
            console.log("You pressed 4");
          },
          [`5`]: () => {
            console.log("You pressed 5");
          },
          [`6`]: () => {
            console.log("You pressed 6");
          },
          [`7`]: () => {
            console.log("You pressed 7");
          },
          [`8`]: () => {
            console.log("You pressed 8");
          },
          [`9`]: () => {
            console.log("You pressed 9");
          },
        }}
      />
    </div>
  );
}
