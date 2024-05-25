import "./style.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="heroImg"
          src={props.heroImg}/>
        <div className="hero-text">
            <h1 className="title">{props.title}</h1>
            <p className="text">{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
