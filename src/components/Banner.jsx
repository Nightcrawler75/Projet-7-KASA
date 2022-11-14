import "../styles/Banner.css";

const Banner = ({ children, src }) => {
  return (
    <div className={children ? "banner" : "banner emptyBanner"}>
      <div className="bannerFilter" />
      <img alt="banner" className="bannerImg" src={src}></img>
      <div className="bannerTxt">{children}</div>
    </div>
  );
};

export default Banner;
