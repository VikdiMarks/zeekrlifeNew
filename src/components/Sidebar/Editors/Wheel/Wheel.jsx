import { useState } from "react";
import wheel1 from "../../../../assets/img/wheel-1.png";
import wheel2 from "../../../../assets/img/wheel-2.png";
import wheel3 from "../../../../assets/img/wheel-3.png";
import wheel4 from "../../../../assets/img/wheel-4.png";
import wheel5 from "../../../../assets/img/wheel-5.png";
import Tab from "./Tab";

function Wheel({ activeTab }) {
  const tab = "tab3";
  const wheels = [
    {
      wheel: "",
      id: "wheel1",
      name: "wheel1",
      price: "Включено в цену",
      desc: "",
      img: wheel1,
    },
    {
      wheel: "",
      id: "wheel2",
      name: "wheel2",
      price: "Включено в цену",
      desc: "",
      img: wheel2,
    },
    {
      wheel: "",
      id: "wheel3",
      name: "wheel3",
      price: "2345р",
      desc: "",
      img: wheel3,
    },
    {
      wheel: "",
      id: "wheel4",
      name: "wheel4",
      price: "234523р",
      desc: "",
      img: wheel4,
    },
    {
      wheel: "",
      id: "wheel5",
      name: "wheel5",
      price: "2354р",
      desc: "",
      img: wheel5,
    },
  ];
  const [activeWheel, setActiveWheel] = useState("wheel1");
  const selectedWheel = wheels.find((item) => item.id === activeWheel);
  const switchWheel = (id) => setActiveWheel(id);

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
