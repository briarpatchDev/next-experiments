import styles from "./page.module.css";
import TabsContainer from "@/app/ui/Tabs/Tabs Container/tabsContainer";
import { TabItem } from "@/app/ui/Tabs/Tabs Container/tabsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs",
  description: `We have some tabs here`,
};

export function Item({ text }: { text: string }) {
  return <div className={styles.item}>{text}</div>;
}

export default function Page() {
  const tabs: TabItem[] = [
    {
      label: "Home",
      content: <Item text={"This is a homepage"} />,
      style: { flex: "1" },
    },
    {
      label: "Market",
      content: (
        <Item
          text={
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  " +
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  " +
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  " +
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  " +
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  " +
            "Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall! Buy and sell stuff. Oh so many stuff. Buy buy buy, sell sell sell! It's an extravanganza for everyall!  "
          }
        />
      ),
      style: { flex: "2" },
    },
    {
      label: "Email",
      content: <Item text={"Read a email!"} />,
      style: { flex: "1" },
    },
    {
      label: "Info",
      content: <Item text={"Here's some info!"} />,
      style: { flex: "1" },
    },
    {
      label: "Account",
      content: <Item text={"Check your account!"} />,
      style: { flex: "1" },
    },
  ];

  return (
    <div className={styles.page}>
      <TabsContainer tabs={tabs} />
    </div>
  );
}
