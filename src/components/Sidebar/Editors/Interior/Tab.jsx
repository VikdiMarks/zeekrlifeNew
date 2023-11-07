function Tab({ name, id, activeTab, desc, img, switchTab }) {
  return (
    <div
      className={
        "auto-style__colors--item" + (activeTab === id ? " active" : "")
      }
      onClick={() => switchTab(id)}
    >
      <img src={img} alt=""></img>
    </div>
  );
}

export default Tab;
