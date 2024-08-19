import { useEffect, useState } from "react";
import Tab from "./Tab";
// import { wheels } from "../../../../data/wheels";
import { getWheels, getwheels } from "../../../../api/api";
import wheel1 from "../../../../assets/img/wheel-1.png";
import imgYou from "../../../../assets/img/you.png";
import wheel2 from "../../../../assets/img/wheel-2.png";
import wheel3 from "../../../../assets/img/wheel-3.png";
import wheel4 from "../../../../assets/img/wheel-4.png";
import wheel5 from "../../../../assets/img/wheel-5.png";

function Wheel({ activeTab, switchBgImg }) {
  const tab = "tab3";
  const [activeWheel, setActiveWheel] = useState("wheel1");
  // const selectedWheel = wheels.find((item) => item.id === activeWheel);
  const switchWheel = (id) => setActiveWheel(id);
  const [wheels, setWheels] = useState([]);

  useEffect(() => {
    getWheels().then((res) => {
      setWheels(
        res.map((item) => {
          switch (item.img) {
            case "wheel1":
              item.img = wheel1;
              break;
            case "wheel2":
              item.img = wheel2;
              break;
            case "wheel3":
              item.img = wheel3;
              break;
            case "wheel4":
              item.img = wheel4;
              break;
            case "wheel5":
              item.img = wheel5;
              break;
          }
          item.bg = imgYou;

          return item;
        }),
      );
    });
  }, []);

  useEffect(() => {
    switchBgImg(wheels.find((item) => item.id === activeWheel)?.bg);
  }, [activeWheel, activeTab, wheels]);

  return (
    <div className={"auto-style" + (activeTab === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Колесо</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Ступица колеса</span>
        <div className="auto-style__block--subtitle">
          <span>{wheels.find((item) => item.id === activeWheel)?.name}</span>
          <span>{wheels.find((item) => item.id === activeWheel)?.price}</span>
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
