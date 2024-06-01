import Card from "./Card";
import { useEffect, useState } from "react";
import { options } from "../../../../data/options";
import { wheels } from "../../../../data/wheels";

function Optional({ currentMenu, switchBgImg }) {
  const idTab = "tab5";
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    switchBgImg(options.find((item) => item.id === activeCard).img);
  }, [activeCard, currentMenu]);

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
