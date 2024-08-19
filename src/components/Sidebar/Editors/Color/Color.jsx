import { useEffect, useState } from "react";
import Tab from "./Tab";
import { getColors, getVersions } from "../../../../api/api";
// import { colors } from "../../../../data/colors";

import color1 from "../../../../assets/img/color1.png";
import imgYou from "../../../../assets/img/you.png";
import imgYou2 from "../../../../assets/img/color2.png";
import color2 from "../../../../assets/img/color-2.png";
import color3 from "../../../../assets/img/color-3.png";
import color4 from "../../../../assets/img/color-4.png";
import color5 from "../../../../assets/img/color-5.png";
import color6 from "../../../../assets/img/color-6.png";
import color7 from "../../../../assets/img/color-7.png";

function Color({ activeTab, switchBgImg }) {
  const tab = "tab2";
  const [activeColor, setActiveColor] = useState("color1");
  const switchColor = (id) => setActiveColor(id);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    getColors().then((res) => {
      setColors(
        res.map((item) => {
          switch (item.img) {
            case "color1":
              item.img = color1;
              break;
            case "color2":
              item.img = color2;
              break;
            case "color3":
              item.img = color3;
              break;
            case "color4":
              item.img = color4;
              break;
            case "color5":
              item.img = color5;
              break;
            case "color6":
              item.img = color6;
              break;
            case "color7":
              item.img = color7;
              break;
          }
          if (item.bg === "imgYou") item.bg = imgYou;
          else item.bg = imgYou2;

          return item;
        }),
      );
    });
  }, []);

  useEffect(() => {
    switchBgImg(colors.find((item) => item.id === activeColor)?.bg);
  }, [activeColor, activeTab, colors]);

  return (
    <div className={"auto-style" + (activeTab === tab ? "" : " hidden")}>
      <h1 className="auto-style--title">Экстерьер</h1>
      <div className="auto-style__block">
        <span className="auto-style__block--title">Экстерьер</span>
        <div className="auto-style__block--subtitle">
          <span>{colors.find((item) => item.id === activeColor)?.name}</span>
          <span>{colors.find((item) => item.id === activeColor)?.price}</span>
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
