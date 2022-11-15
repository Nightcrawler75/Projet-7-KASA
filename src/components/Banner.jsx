import "../styles/Banner.css";

const Banner = ({ children }) => {
  return (
    <div className={children ? "banner" : "emptyBanner"}>
      <div className="bannerFilter" />
      <div className="bannerImg img"></div>
      <div className="bannerTxt">{children}</div>
    </div>
  );
};

export default Banner;
