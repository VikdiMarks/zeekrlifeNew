import logo from "../../../../assets/img/auto-1.png";
import Card from "./Card";
import { useEffect, useState } from "react";
// import { versions } from "../../../../data/versions";
import { useCars } from "../../../../stores/global";
import { getVersions } from "../../../../api/api";

import imgYou from "../../../../assets/img/you.png";
import imgMe from "../../../../assets/img/me.png";

function Version({ activeTab, switchBgImg }) {
  const tab = "tab1";
  const [activeVersion, setActiveVersion] = useState(1);
  const switchVersion = (id) => {
    addCartVersion(versions.find((item) => item.id === id));
    setActiveVersion(id);
  };
  const { addCartVersion } = useCars();
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    getVersions().then((res) => {
      setVersions(
        res.map((item) => {
          if (item.img === "imgYou") return { ...item, img: imgYou };

          return { ...item, img: imgMe };
        }),
      );
    });
  }, []);

  useEffect(() => {
    if (versions.length > 0) {
      switchBgImg(imgYou);
      addCartVersion(versions.find((item) => item.id === activeVersion));
    }
  }, [activeVersion, activeTab, versions]);
  const { model } = useCars();

  return (
    <div
      className={
        "sidebar__editor--version" + (activeTab === tab ? "" : " hidden")
      }
    >
      <h1>{model.header}</h1>
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
