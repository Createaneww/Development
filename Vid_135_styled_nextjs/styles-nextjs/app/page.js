import Image from "next/image";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
   <div className={styles.red}>Hey this is main page
   <Link href={'/about'}>
   <button className="bg-white text-amber-500">About page</button>
   </Link>
   </div>
  );
}
