import { useState } from "react";
import interior1 from "../../../../assets/img/interior-1.png";
import interior2 from "../../../../assets/img/interior-2.png";
import interior3 from "../../../../assets/img/interior-3.png";
import interior4 from "../../../../assets/img/interior-4.png";
import Tab from "./Tab";

function Interior({ currentMenu }) {
  const tab = "tab4";
  const interiors = [
    {
      interior: "",
      id: "interior1",
      name: "interior1",
      price: "Включено в цену",
      desc: "Сиденья из натуральной кожи первого слоя Monaco NAPPA и кожа первого слоя NAPPA + салон, обтянутый алькантарой; \nбархатный потолок из микрофибры из суперволокна.",
      img: interior1,
    },
    {
      interior: "",
      id: "interior2",
      name: "interior2",
      price: "Включено в цену",
      desc: "Сиденья из натуральной кожи первого слоя Monaco NAPPA и кожа первого слоя NAPPA + салон, обтянутый алькантарой; \nбархатный потолок из микрофибры из суперволокна.",
      img: interior2,
    },
    {
      interior: "",
      id: "interior3",
      name: "interior3",
      price: "2345р",
      desc: "Сиденья из натуральной кожи первого слоя Monaco NAPPA и кожа первого слоя NAPPA + салон, обтянутый алькантарой; \nбархатный потолок из микрофибры из суперволокна.",
      img: interior3,
    },
    {
      interior: "",
      id: "interior4",
      name: "interior4",
      price: "234523р",
      desc: "Сиденья из натуральной кожи первого слоя Monaco NAPPA и кожа первого слоя NAPPA + салон, обтянутый алькантарой; \nбархатный потолок из микрофибры из суперволокна.",
      img: interior4,
    },
  ];
  const [activeTab, setActiveTab] = useState("interior1");
  const selectedTab = interiors.find((item) => item.id === activeTab);
  const switchTab = (id) => setActiveTab(id);
  console.log(tab, currentMenu);
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
