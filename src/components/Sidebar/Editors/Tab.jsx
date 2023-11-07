function Tab({ img, desc, id, activeTab, switchTab }) {
  return (
    <button
      className={"sidebar__menu--item" + (activeTab === id ? " active" : "")}
      onClick={() => switchTab(id)}
    >
      <img src={img} alt="" />
      <span className="sidebar__menu--item__tooltip">{desc}</span>
    </button>
  );
}

export default Tab;
