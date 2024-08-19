import software1 from "../../../../assets/img/software-1.jpg";
import software2 from "../../../../assets/img/software-2.jpg";
import software3 from "../../../../assets/img/software-3.jpg";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getSoftware } from "../../../../api/api";
import imgYou from "../../../../assets/img/you.png";
// import { software } from "../../../../data/software";

function Software({ currentMenu, switchBgImg }) {
  const idTab = "tab6";
  const [activeCard, setActiveCard] = useState(1);
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    getSoftware().then((res) => {
      setSoftware(
        res.map((item) => {
          switch (item.img) {
            case "software1":
              item.img = software1;
              break;
            case "software2":
              item.img = software2;
              break;
            case "software3":
              item.img = software3;
              break;
          }
          item.bg = imgYou;

          return item;
        }),
      );
    });
  }, []);

  useEffect(() => {
    switchBgImg(software.find((item) => item.id === activeCard)?.img);
  }, [activeCard, currentMenu, software]);

  return (
    <div className={"list-cards" + (currentMenu === idTab ? "" : " hidden")}>
      <h1 className="list-cards--title">Опционально</h1>
      {software.map((item) => (
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

export default Software;
