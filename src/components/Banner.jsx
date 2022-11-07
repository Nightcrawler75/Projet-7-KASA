import "../styles/Banner.css"

const Banner = ({children, src}) => {
    return ( 
        
        <div className={children ? "banner" : "banner emptyBanner"  }>
            <div className="bannerFilter"/>
            <img alt ="banner" className="bannerImg" src={src}></img>
            <p className="bannerTxt">{children}</p>
        </div>
        
     );
}
 
export default Banner;