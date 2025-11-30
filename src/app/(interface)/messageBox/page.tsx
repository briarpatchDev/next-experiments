"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import MessageBox from "@/app/ui/Message Box/messageBox";

export default function Page() {
  return (
    <div className={styles.page}>
      <MessageBox
        message="There's nothing here!"
        buttonMessage="Go Back"
        href="/"
        ariaLive="assertive"
        role="alert"
      />
      <MessageBox
        message="Okay! Now click this button."
        buttonMessage="Alert!"
        onClick={() => {
          alert("Alert! Alert!");
        }}
        ariaLive="polite"
        role="status"
      />
      <MessageBox
        message="This is a message without any buttons on it. Sometimes we just need that kind of message."
        ariaLive={undefined}
        role={undefined}
      />
    </div>
  );
}
