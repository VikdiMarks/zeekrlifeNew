import software1 from "../../../../assets/img/software-1.jpg";
import software2 from "../../../../assets/img/software-2.jpg";
import software3 from "../../../../assets/img/software-3.jpg";
import Card from "./Card";
import { useEffect, useState } from "react";
import { software } from "../../../../data/software";
import { interiors } from "../../../../data/interiors";

function Software({ currentMenu, switchBgImg }) {
  const idTab = "tab6";
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    switchBgImg(software.find((item) => item.id === activeCard).img);
  }, [activeCard, currentMenu]);

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
