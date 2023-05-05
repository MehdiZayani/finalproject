import styles from '../styles/Footer.module.css';
import Link from 'next/link';
function footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footerinfo}>
                <div className={styles.divinfo}>
                    <p className={styles.info}>A PROPOS DE NOUS</p>
                    <Link className={styles.a} href='./a-propos'alt="À propos">Qui sommes-nous</Link>
                    <Link className={styles.a} href='./contact'alt="Contact">Contact</Link>
                    <Link className={styles.a} href='./realisation'alt="Nos réalisations ">Nos réalisations</Link>
                </div>
                <div className={styles.divservice}>
                    <p className={styles.info}>PRODUITS</p>
                    <Link className={styles.a} href='./cuisine'alt="Cuisines">Cuisines</Link>
                    <Link className={styles.a} href='./sallesdebain'alt="Meubles de salles de bains">Meubles de salles de bains</Link>
                    <Link className={styles.a} href='./dressing'alt="Dressings/ Rangements">Dressings/ Rangements</Link>
                    <Link className={styles.a} href='./portes'alt="Portes">Portes</Link>
                    <Link className={styles.a} href='./echant'alt="échantillon">Échantillon</Link>
                </div>
                <div className={styles.divinfocontact}>
                    <p className={styles.info}>NOUS TROUVER</p>
                    <div>
                        <p className={styles.a}>Rond point zini film 2035 Sousse</p>
                        <p className={styles.a}>(+216) 98 400 083</p>
                        <p className={styles.a}>medmehdizayani1@gmail.com - devis@lucci.tn</p>
                        <p className={styles.a}>7 jours sur 7,</p>
                        <p className={styles.a}>Du Lundi Au Samedi: 08h00 à 19h00</p>
                        <p className={styles.a}>Dimanche: 09h00 à 15h00</p>
                    </div>
                </div>
            </div> 
            <p className={styles.copyright}>Copyright &copy;{' '}{new Date().getFullYear()} Badi Corp. All rights reserved.</p>
        </div>
    )
}
export default footer