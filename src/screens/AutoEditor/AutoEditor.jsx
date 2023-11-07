import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState } from "react";

function AutoEditor() {
  const [sidebarView, setSidebarView] = useState(true);

  return (
    <div className="auto">
      <div className={"auto-view" + (sidebarView ? "" : " full")}>
        <Header />
        <Main />
      </div>
      <Sidebar
        sidebarSwitch={() => setSidebarView(!sidebarView)}
        sidebarView={sidebarView}
      />
    </div>
  );
}

export default AutoEditor;
