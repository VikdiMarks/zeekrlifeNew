import logo from "../../../../assets/img/auto-1.png";
import Card from "./Card";
import { useEffect, useState } from "react";
import { versions } from "../../../../data/versions";

function Version({ activeTab, switchBgImg }) {
  const tab = "tab1";
  const [activeVersion, setActiveVersion] = useState(1);
  const switchVersion = (id) => setActiveVersion(id);

  useEffect(() => {
    switchBgImg(versions.find((item) => item.id === activeVersion).img);
  }, [activeVersion, activeTab]);

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
