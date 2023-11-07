import logo from "../../../../assets/img/auto-1.png";
import Card from "./Card";
import { useState } from "react";

function Version({ activeTab }) {
  const versions = [
    {
      name: 'версия "YOU"',
      desc: "Флагман производительности",
      currentPrice: "349,000р",
      oldPrice: "386,000р",
      id: 1,
    },
    {
      name: 'версия "ME"',
      desc: "Флагман производительности",
      currentPrice: "449,000р",
      oldPrice: "336,000р",
      id: 2,
    },
    {
      name: 'версия "WE"',
      desc: "Флагман производительности",
      currentPrice: "249,000р",
      oldPrice: "366,000р",
      id: 3,
    },
  ];
  const tab = "tab1";
  const [activeVersion, setActiveVersion] = useState(1);
  const switchVersion = (id) => setActiveVersion(id);

  return (
    <div
      className={
        "sidebar__editor--version" + (activeTab === tab ? "" : " hidden")
      }
    >
      <img src={logo} alt="" />
      <span className="sidebar__editor--varsion__desc">
        доставка 1-4 недели
      </span>
      <div className="sidebar__editor--version__advantages">
        <div>
          <h1>656 км</h1>
          <span>Диапазон (CLTC)</span>
        </div>
        <div>
          <h1>3,8 с</h1>
          <span>Разгон до 100 км/ч</span>
        </div>
        <div>
          <h1>400 кВт</h1>
          <span>Пиковая мощность двигателя</span>
        </div>
      </div>

      <div className="sidebar__editor--version__list">
        <h1>Версии</h1>

        {versions.map((item, index) => (
          <Card
            props={item}
            key={item.id}
            switchVersion={switchVersion}
            activeVersion={activeVersion}
          />
        ))}
      </div>
    </div>
  );
}

export default Version;
