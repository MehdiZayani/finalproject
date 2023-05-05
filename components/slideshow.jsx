import style from '../styles/slideshow.module.scss'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
const buttonStyle = {
    width: "50px",
    height:"50px",
    background: 'none',
    border: '0px'
};


const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></button>
}
const Example = () => {
    const images = [
        "https://static.onecms.io/wp-content/uploads/sites/34/2021/09/21/kitchen-remodel-kitchenaid-gray-cabinets-0921-2000.jpg",
        "https://cf.ltkcdn.net/interiordesign/images/orig/273067-1600x1066-basics-contemporary-kitchen-design.jpg",
        "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/kitchen-1657189966-XPfvA/kitchen-view-02-1-1-1663242376-mT9IS.jpg",
    ];

    return (
        <div className={style.main}>
            <Slide className={style.slide} {...properties}>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Envie D'une nouvelle cuisine ?</p>
                            <div className={style.para}>
                                <p>En 1 rendez-vous, vous aurez votre plan, vues 3D et  devis !</p>
                                <Link href="./contact" className={style.link}>Prenez rendez-vous dès maintenant en cliquant ici</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Particuliers, Décorateurs d'Intérieur, Architectes</p>
                            <div className={style.para}>
                                <p>On vous propose la solution adapté à vos besoins !</p>
                                <Link  href="./cuisine" className={style.link}>Découvrez nos modèles</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <div className={style.card}>
                            <p className={style.title}>Dressings sur-mesure</p>
                            <div className={style.para}>
                                <p>Réalisez avec nous le dressing de vos rêves</p>
                                <p className={style.link}>Voir les dressings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Example;