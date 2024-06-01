import { useEffect, useState } from "react";
import Tab from "./Tab";
import { interiors } from "../../../../data/interiors";

function Interior({ currentMenu, switchBgImg }) {
  const tab = "tab4";
  const [activeTab, setActiveTab] = useState("interior1");
  const selectedTab = interiors.find((item) => item.id === activeTab);
  const switchTab = (id) => setActiveTab(id);

  useEffect(() => {
    switchBgImg(interiors.find((item) => item.id === activeTab).bg);
  }, [activeTab, currentMenu]);

  // console.log(tab, currentMenu);
  return (
    <div className={"auto-style" + (currentMenu === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Интерьер</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Цвет</span>
        <div className="auto-style__block--subtitle">
          <span>{selectedTab.name}</span>
          <span>{selectedTab.price}</span>
        </div>
        <div className="auto-style__wheels">
          {interiors.map((item) => (
            <Tab
              id={item.id}
              name={item.name}
              desc={item.desc}
              img={item.img}
              activeTab={activeTab}
              switchTab={switchTab}
              key={item.id}
            />
          ))}
        </div>
        <p>{selectedTab.desc}</p>
      </div>
    </div>
  );
}

export default Interior;
