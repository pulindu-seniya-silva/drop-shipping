import Header from "@/components/layout/Header";
import styles from './ProductPage.module.css'; 
import HomeMenu from "@/components/layout/HomeMenu";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/footer";

export default function ProductPage() {
  return (
    <div className={styles.productPage} >
      <Header />
      <Hero />
      <HomeMenu/>
      <Footer/>
    </div>
  );
}
