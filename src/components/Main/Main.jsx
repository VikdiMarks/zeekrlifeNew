import { useEffect } from "react";

function Main({ img }) {
  return (
    <div className="main" style={{ backgroundImage: "url(" + img + ")" }}></div>
  );
}

export default Main;
