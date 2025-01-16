import Header from "@/components/layout/Header";
import styles from './ProductPage.module.css'; 

import Hero from "@/components/layout/Hero";

export default function ProductPage() {
  return (
    <div className={styles.productPage} >
      <Header />
      <Hero />
    </div>
  );
}
