import xmark from "../assets/img/x-mark.png";
import { useCars } from "../stores/global";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { models } from "../data/models";

export default function PopupModels({ show, close }) {
  const { model, setModel } = useCars();

  useEffect(() => {
    setModel(models[0]);
  }, []);

  return (
    <div className={"popup-models" + (show ? " active" : "")}>
      <div className="popup-models--bg"></div>
      <div className="popup-models__content">
        <div className="popup-models__header">
          <h3>Выберите модель</h3>
          <img onClick={close} src={xmark} alt="" />
        </div>
        <div className="popup-models__body">
          {models.map((item, i) => (
            <span
              onClick={() => {
                console.log("model", model, item);
                setModel(item);
                close();
              }}
              className={item.id === model?.id ? "active" : ""}
              key={i}
            >
              {item.header}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
