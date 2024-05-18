import "./Banner.css";

function Banner({ title, image }) {
  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `url(assets/${image}.webp)`,
      }}
    >
      <div className="title">{title}</div>
    </div>
  );
}

export default Banner;
