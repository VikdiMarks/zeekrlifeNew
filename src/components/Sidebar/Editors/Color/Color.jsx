import { useState } from "react";
import color1 from "../../../../assets/img/color1.png";
import color2 from "../../../../assets/img/color-2.png";
import color3 from "../../../../assets/img/color-3.png";
import color4 from "../../../../assets/img/color-4.png";
import color5 from "../../../../assets/img/color-5.png";
import color6 from "../../../../assets/img/color-6.png";
import color7 from "../../../../assets/img/color-7.png";
import Tab from "./Tab";

function Color({ activeTab }) {
  const tab = "tab2";
  const colors = [
    {
      color: "",
      id: "color1",
      name: "color1",
      price: "Включено в цену",
      desc: "",
      img: color1,
    },
    {
      color: "",
      id: "color2",
      name: "color2",
      price: "Включено в цену",
      desc: "",
      img: color2,
    },
    {
      color: "",
      id: "color3",
      name: "color3",
      price: "2345р",
      desc: "",
      img: color3,
    },
    {
      color: "",
      id: "color4",
      name: "color4",
      price: "234523р",
      desc: "",
      img: color4,
    },
    {
      color: "",
      id: "color5",
      name: "color5",
      price: "2354р",
      desc: "",
      img: color5,
    },
    {
      color: "",
      id: "color6",
      name: "color6",
      price: "325р",
      desc: "",
      img: color6,
    },
    {
      color: "",
      id: "color7",
      name: "color6",
      price: "323425р",
      desc: "",
      img: color7,
    },
  ];
  const [activeColor, setActiveColor] = useState("color1");
  const selectedColor = colors.find((item) => item.id === activeColor);
  const switchColor = (id) => setActiveColor(id);

  return (
    <div className={"auto-style" + (activeTab === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Экстерьер</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Экстерьер</span>
        <div className="auto-style__block--subtitle">
          <span>{selectedColor.name}</span>
          <span>{selectedColor.price}</span>
        </div>
        <div className="auto-style__colors">
          {colors.map((item) => (
            <Tab
              color={item.color}
              id={item.id}
              name={item.name}
              desc={item.desc}
              img={item.img}
              activeColor={activeColor}
              switchColor={switchColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Color;
