import greyStar from '../assets/greyStar.svg'
import redStar from '../assets/redStar.svg'
import '../styles/Rating.css'

const Rating = ({rating}) => {
    return ( 
        <div className="ratingContainer"> 
            <img alt='ratingStar' className='star' src={rating>0 ? redStar : greyStar}/>
            <img alt='ratingStar' className='star' src={rating>1 ? redStar : greyStar}/>
            <img alt='ratingStar' className='star' src={rating>2 ? redStar : greyStar}/>
            <img alt='ratingStar' className='star' src={rating>3 ? redStar : greyStar}/>
            <img alt='ratingStar' className='star' src={rating>4 ? redStar : greyStar}/>
        </div>
    );
}
 
export default Rating;