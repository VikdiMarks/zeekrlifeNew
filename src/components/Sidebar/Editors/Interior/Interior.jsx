import { useEffect, useState } from "react";
import Tab from "./Tab";
// import { interiors } from "../../../../data/interiors";
import interior1 from "../../../../assets/img/interior-1.png";
import interior2 from "../../../../assets/img/interior-2.png";
import interior3 from "../../../../assets/img/interior-3.png";
import interior4 from "../../../../assets/img/interior-4.png";
import imgYou from "../../../../assets/img/you.png";
import { getInteriors } from "../../../../api/api";
import { useCars } from "../../../../stores/global";

function Interior({ currentMenu, switchBgImg }) {
  const tab = "tab4";
  const [activeTab, setActiveTab] = useState("interior1");
  // const selectedTab = interiors.find((item) => item.id === activeTab);
  const switchTab = (id) => setActiveTab(id);
  const [interiors, setInteriors] = useState([]);
  const { addCartOther } = useCars();

  useEffect(() => {
    getInteriors().then((res) => {
      setInteriors(
        res.map((item) => {
          switch (item.img) {
            case "interior1":
              item.img = interior1;
              break;
            case "interior2":
              item.img = interior2;
              break;
            case "interior3":
              item.img = interior3;
              break;
            case "interior4":
              item.img = interior4;
          }
          item.bg = imgYou;

          return item;
        }),
      );
    });
  }, []);

  useEffect(() => {
    switchBgImg(interiors.find((item) => item.id === activeTab)?.bg);

    addCartOther(interiors.find((item) => item.id === activeTab));
  }, [activeTab, currentMenu, interiors]);

  // console.log(tab, currentMenu);
  return (
    <div className={"auto-style" + (currentMenu === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Интерьер</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Цвет</span>
        <div className="auto-style__block--subtitle">
          <span>{interiors.find((item) => item.id === activeTab)?.name}</span>
          <span>{interiors.find((item) => item.id === activeTab)?.price}</span>
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
        <p>{interiors.find((item) => item.id === activeTab)?.desc}</p>
      </div>
    </div>
  );
}

export default Interior;
