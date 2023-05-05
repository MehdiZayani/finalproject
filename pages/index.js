import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Slideshow from '../components/slideshow'
const HomePage = () => {
  return (
    <>
      <Slideshow/>
      <a className={styles.codname}>Nos Catégories</a>
      <main className={styles.container}>
        <div className={styles.small}>
          <CategoryCard image="https://i.ibb.co/SNpBTv6/sofa-armchairs-covers-10664.webp" name="Canapés"/>
          <CategoryCard image="https://i.ibb.co/x5mzzsv/tv-media-storage-14885.webp" name="Meubles TV"/>
          <CategoryCard image="https://i.ibb.co/cQR8pN7/beds-bm003.webp" name="Lits"/>
        </div>
        <div className={styles.large}>
          <CategoryCard image="https://i.ibb.co/KXRg5BZ/tables-desks-fu004.webp" name="Tables et Bureaux"/>
          <CategoryCard
            image="https://i.ibb.co/DM5ZDQM/bookcases-shelving-units-st002.webp"
            name="Bibliothèques et étagères"
          />
        </div>
        <Head>
          <title>Lucci</title>
          <meta name="description" content="Lucci Design" />
          <link rel="icon" href="https://i.ibb.co/LYPkw62/lucci.jpg" />
        </Head>
      </main>
    </>
  );
};

export default HomePage;
