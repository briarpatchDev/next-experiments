"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ConfirmationBox from "@/app/ui/Confirmation Box/confirmationBox";

export default function Page() {
  return (
    <div className={styles.page}>
      <ConfirmationBox
        message={"Are you sure you want to do this?"}
        onConfirm={() => {
          console.log("You hit confirm");
        }}
        onCancel={() => {
          console.log("Canceled!");
        }}
      />
    </div>
  );
}
