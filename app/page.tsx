import styles from "./page.module.css";
import One from "@/components/compOne/compOne";
import Clock from "@/components/clock/clock";
import Counter from "@/components/counter/counter";


export default function Page() {
return(<div className={styles["page"]}>
  <One />
  <Clock />
  <Counter />
</div>);
}
