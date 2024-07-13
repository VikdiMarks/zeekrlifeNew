import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState } from "react";
import PopupModels from "../../components/PopupModels";

function AutoEditor() {
  const [sidebarView, setSidebarView] = useState(true);
  const [bgImg, setBgImg] = useState(null);
  const [showPopupModels, setShowPopupModels] = useState(false);

  const openPopupModels = () => {
    setShowPopupModels(true);
  };
  const closePopupModels = () => {
    setShowPopupModels(false);
  };

  return (
    <div className="auto">
      <div className={"auto-view" + (sidebarView ? "" : " full")}>
        <PopupModels close={closePopupModels} show={showPopupModels} />
        <Header openPopupModels={openPopupModels} />
        <Main img={bgImg} />
      </div>
      <Sidebar
        sidebarSwitch={() => setSidebarView(!sidebarView)}
        sidebarView={sidebarView}
        switchBgImg={setBgImg}
      />
    </div>
  );
}

export default AutoEditor;
