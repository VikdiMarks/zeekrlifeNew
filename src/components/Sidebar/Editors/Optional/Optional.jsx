import optional1 from "../../../../assets/img/airsuspension.jpg";
import optional2 from "../../../../assets/img/autoDoor.jpg";
import optional3 from "../../../../assets/img/YAMAHA.jpg";
import optional4 from "../../../../assets/img/ec.jpg";
import optional5 from "../../../../assets/img/dd8bcaa5fe284bd1a456d37fed384230.jpg";
import optional6 from "../../../../assets/img/7kw50.jpg";
import Card from "./Card";
import { useState } from "react";

function Optional({ currentMenu }) {
  const idTab = "tab5";
  const optionals = [
    {
      title: "Высокоэффективный пакет пневматической подвески",
      price: "Включено в цену",
      desc: [
        "• Полностью автоматическая система пневматической подвески.\n" +
          "• Система подавления электромагнитных вибраций CCD",
      ],
      inc: true,
      img: optional1,
      id: 1,
    },
    {
      title: "Автоматический дверной комплект с интеллектуальным датчиком",
      price: "Включено в цену",
      desc: [
        "• 4-дверная бескаркасная автоматическая дверь с датчиком\n" +
          "• Датчик удара с памятью высоты и электроприводом задней двери багажника.\n\n" +
          "проиллюстрировать:\n" +
          "Комплект автоматических дверей с интеллектуальным датчиком включает в себя компоненты движения фортепиано черного цвета.",
      ],
      inc: true,
      img: optional2,
      id: 2,
    },
    {
      title: "Усовершенствованный объемный стереозвук YAMAHA",
      price: "Включено в цену",
      desc: [
        "• Полностью автоматическая система пневматической подвески.\n" +
          "• Система подавления электромагнитных вибраций CCD\n" +
          "• Алгоритм тонкой настройки звука ΦTune.\n" +
          "• Эффект концертного зала в формате S3D.\n" +
          "• Технология компенсации сжатой музыки HXT\n" +
          "• Звуковая система",
      ],
      inc: true,
      img: optional3,
      id: 3,
    },
    {
      title: "Светочувствительный купол EC",
      price: "10.000р",
      desc: [
        "• Твердый электрохромный корпус EC.\n" +
          "• Автоматическое управление интеллектуальным датчиком освещенности.\n" +
          "• Затенение, теплоизоляция, защита от солнца, высокая конфиденциальность\n",
      ],
      inc: false,
      img: optional4,
      id: 4,
    },
    {
      title: "Vair Motor (включая систему молниезащиты)",
      price: "Включено в цену",
      img: optional5,
      inc: true,
      id: 5,
    },
    {
      title:
        "Пакет зарядных устройств для умного дома мощностью 7 кВт (50 метров)",
      price: "Включено в цену",
      desc: [
        "В этот пакет входит：\n\n" +
          "• Одна зарядная установка для умного дома мощностью 7 кВт.\n" +
          "• Базовые услуги по установке\n\n" +
          "Дополнительные инструкции по загрузке штабельного пакета:\n\n" +
          "Данный пакет представляет собой пакет с кабелями длиной до 50 м. При фактическом монтаже, после обследования, кабели длиной более 50 м должны быть согласованы с поставщиком услуг по цене, указанной в дополнительном заказе.\n",
      ],
      inc: true,
      img: optional6,
      id: 6,
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

export default Optional;
