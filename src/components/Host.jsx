import '../styles/Host.css'

const Host  = ({src,children}) => {
    return ( 
        <div className="host">
        <label htmlFor="hostPicture" className="hostLabel"> {children}</label>
        <img className="hostPicture" src={src} alt="hostPicture" />
        </div>
     );
}
 
export default Host ;