import { useParams } from 'react-router-dom'
import Caroussel from '../components/Caroussel';
import lodgings from "../data/logements.json";
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Error from './Error';
import "../styles/Lodging.css"

const Lodging = () => {
    const {lodgingId} = useParams()
    const [lodging] = lodgings.filter((lodging) => lodging.id === lodgingId) 
    if (!lodging){
        return <Error/>
    }
    return ( 
        <>
        <Caroussel pictures={lodging.pictures}/>
        <div className="lodgingContainer">
            <div className="lodging-title-and-tag">
                <div className="lodgingTitle">{lodging.title}</div>
                <div className="lodgingLocation">{lodging.location}</div>
                <div className="tags">
                {lodging.tags.map((tag)=><span className="tag">{tag}</span>)}
                </div>
            </div>
            <div className="lodging-host-and-rate">
                <Host  src={lodging.host.picture}>{lodging.host.name}</Host>
                <Rating rating={lodging.rating} />
            </div>
        </div>
        <div className="lodgingCollapseContainer">
            <div className="lodgingCollapse">
                <Collapse title="Description">{lodging.description}</Collapse>
            </div>
            <div className="lodgingCollapse">
                <Collapse title="Équipements"><ul>{lodging.equipments.map((equipement)=><li>{equipement}</li>)}</ul></Collapse>
            </div>
        </div>
        </>
    );
}
 
export default Lodging;
