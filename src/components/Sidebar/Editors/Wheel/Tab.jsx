function Tab({ wheel, id, activeWheel, desc, img, switchWheel }) {
  return (
    <div
      className={
        "auto-style__colors--item" + (activeWheel === id ? " active" : "")
      }
      onClick={() => switchWheel(id)}
    >
      <img src={img} alt=""></img>
    </div>
  );
}

export default Tab;
