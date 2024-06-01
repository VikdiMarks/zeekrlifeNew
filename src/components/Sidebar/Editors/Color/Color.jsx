import { useEffect, useState } from "react";
import Tab from "./Tab";
import { colors } from "../../../../data/colors";

function Color({ activeTab, switchBgImg }) {
  const tab = "tab2";
  const [activeColor, setActiveColor] = useState("color1");
  const selectedColor = colors.find((item) => item.id === activeColor);
  const switchColor = (id) => setActiveColor(id);

  useEffect(() => {
    switchBgImg(colors.find((item) => item.id === activeColor).bg);
  }, [activeColor, activeTab]);

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
