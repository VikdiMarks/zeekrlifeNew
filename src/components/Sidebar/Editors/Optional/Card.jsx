import { useState } from "react";

function Card({ item, activeCard, switchCard }) {
  const arrowTop =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgB7ZdLCoMwEEAnpgfoEbIpiKtewSP0CD2ZR/EaLnMQ45RBhpZ+iCYzdTMPAmZh8p4gJACGYRiGoURo20ADFGlAiUvXXb3zIw3NCAcKkDxCMwLimeYIEBOmPk5TBGHEA97lGa0I0YDPL49x3cSFdS4fIRbwTT7h0tOzd82oFSES8EueJekn1oqoDsjJM1oRVQFb5RmNiOKAvfKMdERRQKk8IxmxO6BWnpGK2BUgJc9IRGwOkJZnaiM2BWjJMzUR2QBteaY0InucRnCDtjxBa9Laz/MThJPzQ+69bMC8pBstqinPvEbQmDHdQYJ/3KyO3M8wDMMwDuMBDuRrP/2LM58AAAAASUVORK5CYII=";
  const check =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAtCAYAAAD1NNZZAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgB7drhcYJAEIbhrwRLsARLSAl2ACWkAyghHYQOUoolUEJK2JyBTW4m3h5RDvfYfWf84w9veZxBhAM8jyOiM7xviHea6mC1cPCHCILMgswQF7oRLCVBhAZYKQPxBitlIHpYKRzs0SHwAzE6hENMOcScQ8w5xJxDzGUgXmGlDEQLK4WDPYXXZxEImi5bP67aUN4WEHzZOmoG2RKCNIMIENf3Tni08CHnhPKoCSTM8lIUIlqo1QwSZmgS860LES2oEmRziGjh9ikLp+dphC+o/DxaQDIQR2wVTSfV8ier9PqdCohooLI/Y+l1O1UQ0WASSIOVUwvBkXzFtxqIegiuNEg1EBzJf5fvBqkOgqOVb6RUC8FlQBY/zRYgLlVAcI+CZCAOqK17Qejv3oi6Ibj/guwWglsKsnsILgciQAzYYxkQOxAcyRtD7EBwC0AGWEoAsbN/Ku4GSA/L0e9Tuh7K+wLr/1FQO9yTWAAAAABJRU5ErkJggg==";
  const [showDesc, setShowDesc] = useState(false);
  const [useOption, setUseOption] = useState(false);

  return (
    <div
      className={"list-cards__card" + (activeCard === item.id ? " active" : "")}
      onClick={() => switchCard(item.id)}
    >
      <img src={item.img} className="list-cards__card--img" alt="" />
      <div className="list-cards__content">
        <div className="list-cards__head">
          <div
            className="list-cards__card--title"
            onClick={() => setShowDesc(!showDesc)}
          >
            <span>{item.title}</span>
            {item.desc ? (
              <img
                src={arrowTop}
                alt=""
                className={showDesc ? "bottom" : "top"}
              />
            ) : (
              ""
            )}
          </div>
          <div
            className={
              "list-cards--check" + (item.inc || useOption ? " active" : "")
            }
            onClick={() => setUseOption(!useOption)}
          >
            <img src={check} alt="" />
          </div>
        </div>
        <span className="list-cards__card--price">{item.price}</span>
        {showDesc && activeCard === item.id ? (
          <p className="list-cards__card--desc">{item.desc}</p>
        ) : (
          <p className="hidden"></p>
        )}
      </div>
    </div>
  );
}

export default Card;
