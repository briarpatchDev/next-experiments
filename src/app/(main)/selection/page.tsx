import styles from "./page.module.css";
import type { Metadata } from "next";
import SelectionManager from "@/app/ui/Selection Manager/selectionManager";

export const metadata: Metadata = {
  title: "Selection",
  description: `This is a description about the page`,
};

export default function Page() {
  return (
    <div className={styles.selection_wrapper}>
      <SelectionManager
        itemsArr={[
          {
            name: "First Item",
            label: "This is the first item",
          },
          {
            name: "Second Item",
            label: "Second item right here!",
          },
          {
            name: "Third Item",
            label: "3rd item is 3rd",
          },
          {
            name: "Fourth Item",
            label: "Four? Four?",
          },
          {
            name: "Fifth Item",
            label: "Only one left",
          },
          {
            name: "Sixth Item",
            label: "This is the last item",
          },
        ]}
      />
    </div>
  );
}
