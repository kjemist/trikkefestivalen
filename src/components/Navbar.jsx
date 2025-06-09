import React from "react";
import { EuiIcon, EuiPageHeader } from "@elastic/eui";
import { darkThemeLogo, lightThemeLogo } from "../data/consts";
import history from "../utilities/history";
import { useState } from "react";
import { useEffect } from "react";
import i18next from "i18next";

export default function Navbar(props) {
  const [preload, setPreload] = useState("preload");
  useEffect(()=>{
   if(localStorage.getItem("i18nextLng")?.length >2){
    i18next.changeLanguage("en")
   }
  })
  setTimeout(function () {
    setPreload("");
  }, 500);
  
  return (
    <>

      <EuiPageHeader
        iconType={props.theme === "dark"?darkThemeLogo:lightThemeLogo}
        iconProps={{
          onClick: props.onLogoClick,
        }}
        pageTitleProps={{
          css: {
            cursor: "pointer",
            userSelect: "none",
            maxWidth: "310px",
          },
          onClick: () => {
            history.push("#/");
            window.location.reload();
          },
        }}
      
        rightSideItems={[

         
          <div className="themeButton" onClick={() => props.toggleTheme()}>
            <EuiIcon type="moon" className="moon" />
            <EuiIcon type="sun" className="sun" />
            <div className={`ball ${props.theme} ${preload}`}></div>
          </div>,
            ]}
        tabs={props.tabs}
      />
    </>
  );
}
