import xmark from "../assets/img/x-mark.png";
import { useEffect, useState } from "react";
import { useCars } from "../stores/global";

export default function PriceList({ close, isShow }) {
  const [price, setPrice] = useState(0);
  const { cart } = useCars();
  const [data, setData] = useState([
    [
      {
        header: "ZEEKR 001 FR",
        price: {
          text: 769000,
          number: true,
        },
      },
    ],
    [
      {
        header: "Lorem",
        price: {
          text: "Цена включена",
          number: false,
        },
      },
      {
        header: "Lorem",
        price: {
          text: "Цена включена",
          number: false,
        },
      },
    ],
    [
      {
        header: "Lorem",
        price: {
          text: "Цена включена",
          number: false,
        },
      },
      {
        header: "Lorem",
        price: {
          text: 600,
          number: true,
          free: true,
        },
      },
    ],
  ]);

  useEffect(() => {
    data.forEach((item) => {
      item.forEach((subitem) => {
        if (subitem.price.number && !subitem.price.free) {
          setPrice((prevState) => prevState + parseFloat(subitem.price.text));
        }
      });
    });
  }, [data]);

  useEffect(() => {
    setData((prevState) => {
      if (!prevState) return;
      prevState[0][0].header = cart.model.header;
      prevState[0][0].price.text = cart.model.price;

      return prevState;
    });
  }, [cart]);

  return (
    <div className={"price-list" + (isShow ? " active" : "")}>
      <div className="price-list__header">
        <h3>Прайс-лист</h3>
        <img onClick={close} src={xmark} alt="" />
      </div>
      <div className="price-list__body">
        {data &&
          data.map((item, i) => (
            <>
              <div key={i}>
                <div className="price-list__list">
                  {item.map((subitem, subIndex) => (
                    <>
                      <div key={subIndex} className="price-list__list-item">
                        <p>{subitem.header}</p>
                        <p className={subitem.price.free ? "free" : ""}>
                          <span>
                            {subitem.price.text +
                              (subitem.price.number ? " Р" : "")}
                          </span>
                          {subitem.price.free && <span>Бесплатно</span>}
                        </p>
                      </div>
                      {i === 0 && (
                        <div className="price-list__list-item version">
                          <p>{cart.version.name}</p>
                          <p>
                            <span>{cart.version.currentPrice}</span>
                          </p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
                <div className="price-list__separator"></div>
              </div>
            </>
          ))}
        <div className="price-list__list-item price-list__list-item--total">
          <p>Общая стоимость услуг</p>
          <p>{cart.price}р</p>
        </div>
      </div>
    </div>
  );
}
