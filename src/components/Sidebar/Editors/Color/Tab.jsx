function Tab({ color, id, activeColor, desc, img, switchColor }) {
  return (
    <div
      className={
        "auto-style__colors--item" + (activeColor === id ? " active" : "")
      }
      onClick={() => switchColor(id)}
    >
      <img src={img} alt=""></img>
    </div>
  );
}

export default Tab;
