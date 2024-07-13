import xmark from "../assets/img/x-mark.png";

export default function PopupModels({ show, close }) {
  const data = [
    {
      header: "ZEEKR 001",
    },
    {
      header: "ZEEKR 001 FR",
    },
    {
      header: "ZEEKR 007",
    },
    {
      header: "ZEEKR 009",
    },
    {
      header: "ZEEKR 009 光辉",
    },
    {
      header: "ZEEKR X",
    },
  ];

  return (
    <div className={"popup-models" + (show ? " active" : "")}>
      <div className="popup-models--bg"></div>
      <div className="popup-models__content">
        <div className="popup-models__header">
          <h3>Выберите модель</h3>
          <img onClick={close} src={xmark} alt="" />
        </div>
        <div className="popup-models__body">
          {data.map((item, i) => (
            <span onClick={close} key={i}>
              {item.header}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
