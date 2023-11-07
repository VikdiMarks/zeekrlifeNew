function Card({ props, switchVersion, activeVersion }) {
  return (
    <div
      className={
        "sidebar__editor--version__card" +
        (activeVersion === props.id ? " active" : "")
      }
      onClick={() => switchVersion(props.id)}
    >
      <div className="top">
        <span>{props.name}</span>
        <span>{props.desc}</span>
      </div>
      <div className="bottom">
        <span>{props.currentPrice}</span>
        <span>{props.oldPrice}</span>
      </div>
    </div>
  );
}

export default Card;
