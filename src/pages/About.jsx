import Collapse from "../components/Collapse";
import imgBanner from "../assets/a-propos.png";
import Banner from "../components/Banner";
import "../styles/About.css";
import "../styles/Banner.css";
const About = () => {
    return (
        <> 
            <div className="bannerContainer">
                <Banner src={imgBanner}/>
            </div>
            <div className="collapseContainer">
                <Collapse title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Collapse>
                <Collapse title="Respect">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Collapse>
                <Collapse title="Service">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Collapse>
                <Collapse title="Responsabilité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Collapse>
            </div>
        </>
     );
}
 
export default About;