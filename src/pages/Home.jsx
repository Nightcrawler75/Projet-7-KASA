import Banner from "../components/Banner";
import Card from "../components/Card";
import imgBanner from "../assets/accueil.png";
import "../styles/Home.css";
import lodgings from "../data/logements.json";

const Home = () => {
    return (
        <>
            <div className="bannerContainer">
                <Banner src ={imgBanner}>Chez vous, partout et ailleurs</Banner>
            </div>
            <div className="cardContainer">
                {lodgings.map((lodging) => <Card lodgingId={lodging.id} src={lodging.cover}>{lodging.title}</Card> )}
            </div>
        </>
        
      );
}
 
export default Home;
