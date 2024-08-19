import Card from "./Card";
import { useEffect, useState } from "react";
// import { options } from "../../../../data/options";
// import { optionals } from "../../../../data/optionals";
import optional1 from "../../../../assets/img/airsuspension.jpg";
import imgYou from "../../../../assets/img/you.png";
import optional2 from "../../../../assets/img/autoDoor.jpg";
import optional3 from "../../../../assets/img/YAMAHA.jpg";
import optional4 from "../../../../assets/img/ec.jpg";
import optional5 from "../../../../assets/img/dd8bcaa5fe284bd1a456d37fed384230.jpg";
import optional6 from "../../../../assets/img/7kw50.jpg";
import { getOptions } from "../../../../api/api";

function Optional({ currentMenu, switchBgImg }) {
  const idTab = "tab5";
  const [activeCard, setActiveCard] = useState(1);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions().then((res) => {
      setOptions(
        res.map((item) => {
          switch (item.img) {
            case "optional1":
              item.img = optional1;
              break;
            case "optional2":
              item.img = optional2;
              break;
            case "optional3":
              item.img = optional3;
              break;
            case "optional4":
              item.img = optional4;
              break;
            case "optional5":
              item.img = optional5;
              break;
            case "optional6":
              item.img = optional6;
              break;
          }
          item.bg = imgYou;

          return item;
        }),
      );
    });
  }, []);

  useEffect(() => {
    switchBgImg(options.find((item) => item.id === activeCard)?.img);
  }, [activeCard, currentMenu, options]);

  return (
    <div className={"list-cards" + (currentMenu === idTab ? "" : " hidden")}>
      <h1 className="list-cards--title">Опционально</h1>
      {options.map((item) => (
        <Card
          item={item}
          activeCard={activeCard}
          switchCard={(id) => {
            setActiveCard(id);
          }}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Optional;
