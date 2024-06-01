import { useEffect, useState } from "react";
import Tab from "./Tab";
import { wheels } from "../../../../data/wheels";

function Wheel({ activeTab, switchBgImg }) {
  const tab = "tab3";
  const [activeWheel, setActiveWheel] = useState("wheel1");
  const selectedWheel = wheels.find((item) => item.id === activeWheel);
  const switchWheel = (id) => setActiveWheel(id);

  useEffect(() => {
    switchBgImg(wheels.find((item) => item.id === activeWheel).bg);
  }, [activeWheel, activeTab]);

  return (
    <div className={"auto-style" + (activeTab === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Колесо</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Ступица колеса</span>
        <div className="auto-style__block--subtitle">
          <span>{selectedWheel.name}</span>
          <span>{selectedWheel.price}</span>
        </div>
        <div className="auto-style__wheels">
          {wheels.map((item) => (
            <Tab
              wheel={item.wheel}
              id={item.id}
              name={item.name}
              desc={item.desc}
              img={item.img}
              activeWheel={activeWheel}
              switchWheel={switchWheel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wheel;
