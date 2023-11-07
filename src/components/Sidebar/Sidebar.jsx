import navbar2 from "../../assets/img/navbar-2.png";
import navbar3 from "../../assets/img/navbar-3.png";
import navbar4 from "../../assets/img/navbar-4.png";
import navbar5 from "../../assets/img/navbar-5.png";
import navbar6 from "../../assets/img/navbar-6.png";
import Footer from "./Footer";
import Version from "./Editors/Version/Version";
import { useState } from "react";
import Tab from "./Editors/Tab";
import Color from "./Editors/Color/Color";
import Wheel from "./Editors/Wheel/Wheel";
import Interior from "./Editors/Interior/Interior";
import Optional from "./Editors/Optional/Optional";
import Software from "./Editors/Software/Software";

function Sidebar({ sidebarSwitch, sidebarView }) {
  const sidebarMenuItems = [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB7dxtTttAEAbgGTtR+5MjpDegJ2h6AnoE0yZSMJWAE5CcoEGCEImkCSdoewLSG3ADOAK/KijE21mbSigYEn/Fa/t9JBCECMGOd3Y8uwkRAAAAAAAAAAAAAAAAAAAAZIIpJa2dXUVAo9OTSGNqEeQKAcgZApCzGmVnRkr9pjJj/iCfm5RAdgGQwR8NB10qsVbH7UoQmpRAljOgkp5Wg6tURFgDcpZ4Bjj7+xvWnzuHIJbYAWh1Ok1ie4vu7h2yrQ2CWCIF4P/VbtnWFiVc/cvBkkrPC76MWRGtFIDIVzvTpSLrkkpuNDyekS63KX5FtNoMYPti2VNk6b+xSM2Uso5Gp/4fBitIXobK1U4e/5q/rfXH/f4NQSSxAoCrPT2xAsBKHZ2V/C53XXAjljMEIGfG94Kkt6IrsCalQDFNx4OTbTJIZZpxUjhcz715j1LU6nxtEnlN/5vgRiyyCnVD+WA6HF5TqmTwmQ8pgWoEQHFvPDz+SQYyPgAPrA5q3vL2h0dew2KeLD6uU48MfpcMZXwApoPB0p6SbhLW7+4nYedi5mr+kQxWihRk395/kwqnEfKjDPL+6yp3Luhzx3WYyVl8XJecMhh9MlyhA+B0Og07pArJouTMSqEDUJc2uQx2Y/FxVry97tQTV2ED0HLdw7DB1yXn40ZJIRRyEXba7qYMdHfxcdNLzjCFC4DO+3XmH4slp96jML3kDFO4FGSTHZp6pPbrFSXvP1WoALRdd6/IJWeYwqQgnXrUC3nfpJIz6tHEwgTgseR81hOS7dFz+ScaLQnQst/xIMEyLU0VIgB+yalCWw0UtIPtlVrCllJ6M2ZKBjF+DfAPhYWknrIwegbovM9sT8x99d+ajibm5aWS0xTrO5qYk/HQ30A3ahM9bTiWkjMEIGfxAiCl3xd3d+JXKJBI7DWAlbQE2HbaO7vXc6V6sik+K2IvJm+JU5CuUvRphBrbV5gV0a0UAH5Q7+VO9Fy3fF99XjArLmRWXAWnxmCZlVLQ2Zl/NMTxXyN2+/eTXPF78v3mS88Panf/yN6MSmztRxOnwStgpvqjLbtSns370ojf4pAmWTUkP5oYew3Qs0JulJz5m/o7L2hyQQyJF2E9K74PB1OCWHAjljO8WUfKoh5NzC4AUhX4HcIyi1n5PJXlDGgmfS+dKsAakDMEIGcIAAAAAAAAAAAAAAAAAABk6B+bqTQKoNvctAAAAABJRU5ErkJggg==",
      desc: "версия",
      id: "tab1",
    },
    {
      img: navbar2,
      desc: "экстерьер",
      id: "tab2",
    },
    {
      img: navbar3,
      desc: "колесо",
      id: "tab3",
    },
    {
      img: navbar4,
      desc: "интерьер",
      id: "tab4",
    },
    {
      img: navbar5,
      desc: "необязательный",
      id: "tab5",
    },
    {
      img: navbar6,
      desc: "программное обеспечение",
      id: "tab6",
    },
  ];
  const switchImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABQCAYAAACJUyy4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB7ZtLTsJQGEZbCo5dCjEmTnUHLMGBI0bsQJfAEtyCK8CxMcalOFWMtR+/phT6vv/rJpwRtPdxDtZqICTJiRODSbsG3C2X98WwxffZ7OZxvf5IHNEqvxPP04e/ke/eAhrlK+LlaFcBtfK14uUMNwFH8q3i5SwXARX5XuLlTPOAyf+D29XqvBBf9J6ZJ/Pp13azm2dE5ZWHyPRzuykezpO+GP4Ejq75mAJq7zaxBDTe52MIaP0L6z2g838bzwGd8sBrQC954DGgtzzwFjBIHngKGCwPvASMkgceAkbLA+uAIHlgGRAsD6wCWOSBRQCbPNAOYJUHmgHs8kArQEQeaASIyQPpAFF5IBkgLg+kAlTkgUSAmjzgDlCVB5wB6vKAK8BEHnAEmMmD0ABTeRASYC4Pxga4kAdjAiaJI9KBL6Wby2ZWfMqS55FdNmPFzX9hQ8RNb5Wh4vTUAA5xOqQMlzgdVoRTnE4pwS1OpxWQEKchwkiJ0zBBJMVpqBDS4jRcAA1xmsKMljhNY0RTnKYyoS1O0xmwEKclArESp2UCsBSnpUZiLU7LjcCDOC05EC/itOwAPInT0j3xJk7L98CjOG3RgVdx2qYFz+K0VQPexWm7GmIQpy0PiEWctt0jJnFQeX8+JnFQkc9/0qekL8biINt/8vb68nxxeZUWYtetsxyIg+zwQGeAE3GQ1R1sDHAkDrKmE0cBDr9e9wsrE82QpFArhwAAAABJRU5ErkJggg==";
  const [activeTab, setActiveTab] = useState("tab1");

  const switchTab = (tab) => setActiveTab(tab);

  return (
    <div className={"sidebar" + (sidebarView ? " active" : "")}>
      <div className="sidebar__menu">
        <button className="sidebar__menu--switch" onClick={sidebarSwitch}>
          <img src={switchImg} alt="" />
        </button>

        <nav className="sidebar__menu--nav">
          {sidebarMenuItems.map((item, index) => (
            <Tab
              img={item.img}
              desc={item.desc}
              id={item.id}
              activeTab={activeTab}
              switchTab={switchTab}
            />
          ))}
        </nav>

        <div></div>
      </div>

      <div className={"sidebar__editor"}>
        <Version activeTab={activeTab} />
        <Color activeTab={activeTab} />
        <Wheel activeTab={activeTab} />
        <Interior currentMenu={activeTab} />
        <Optional currentMenu={activeTab} />
        <Software currentMenu={activeTab} />
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
