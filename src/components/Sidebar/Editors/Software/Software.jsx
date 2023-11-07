import software1 from "../../../../assets/img/software-1.jpg";
import software2 from "../../../../assets/img/software-2.jpg";
import software3 from "../../../../assets/img/software-3.jpg";
import Card from "./Card";
import { useState } from "react";

function Software({ currentMenu }) {
  const idTab = "tab6";
  const optionals = [
    {
      title:
        "Профессиональная интеллектуальная система помощи при вождении ZEEKR AD",
      price: "Включено в цену",
      desc:
        "Транспортное средство может автоматически реализовывать такие функции, как остановка, удержание полосы движения и экстренное торможение на выбранной полосе, что значительно сокращает повторяющиеся и неприятные действия при вождении.В то же время возможность раннего предупреждения на 360° может значительно уменьшить слепые зоны. и повысить безопасность вождения.\n" +
        "\n" +
        "ключевые компетенции\n" +
        "Полноскоростной активный круиз (LCC+ACC)\n" +
        "Активное смещение тележки TAO\n" +
        "LKA помощь в удержании полосы движения\n" +
        "AEB смягчение последствий столкновений\n" +
        "Предупреждение о слепых зонах BSD\n" +
        "\n" +
        "* Некоторые функции будут постепенно активироваться посредством программного обеспечения.",
      inc: true,
      img: software1,
      id: 1,
    },
    {
      title: "Полностью интеллектуальная система помощи при вождении ZEEKR AD",
      price: "35.000p",
      inc: false,
      img: software2,
      id: 2,
    },
    {
      title: "зимний температурный пакет",
      price: "Включено в цену",
      desc:
        "• Функция обогрева задних сидений\n" + "• Рулевое колесо с подогревом",
      inc: true,
      img: software3,
      id: 3,
    },
  ];
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className={"list-cards" + (currentMenu === idTab ? "" : " hidden")}>
      <h1 className="list-cards--title">Опционально</h1>
      {optionals.map((item) => (
        <Card
          item={item}
          activeCard={activeCard}
          switchCard={(id) => {
            setActiveCard(id);
            document.querySelector(
              ".main",
            ).style.backgroundImage = `url(${item.img})`;
          }}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Software;
