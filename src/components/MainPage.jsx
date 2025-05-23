import React, { useCallback } from "react";
import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer
} from "@elastic/eui";

import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import { useTranslation } from "react-i18next";

import RecordingsPanel from "./panels/RecordingsPanel";
import FAQsPanel from "./panels/FAQsPanel";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import spinner from "../utilities/spinner.gif";
import Testpage from "../utilities/Testpage";
import Select from "../utilities/Select";

const Spinner = () => {
  const { t } = useTranslation(["common"])
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "400px",
          margin: "auto",
          display: "block",
          transition: "ease-in-out",
        }}
        alt="Test..."
      />
      <h1 style={{ fontSize: "25px", textAlign: "center" }}>
        {t("Loading...Hold On")}😪
      </h1>
    </div>
  );
};

function MainPage(props) {
   const { t } = useTranslation(["common"])

  let navigate = useNavigate();
  const tabs = [
    {
      id: "event",
      label: t("Event Details"),
      onClick: () => {
        navigate("events")
      },
    },
    {
      id: "speakers",
      label: t("Speakers"),
      onClick: () => {
        navigate("speakers")
      },
    },
    {
      id: "talks",
      label: t("Talks"),
      onClick: () => {
        navigate("talks")
      },
    },
    {
      id: "recordings",
      label: t("Recordings"),
      onClick: () => {
          navigate("recordings")
        },
    },
    {
      id: "faq",
      label: t("FAQs"),
      onClick: () => {
        navigate("faq")
      },
      
    },
    {
      id: "Changelanguage",
      label: <Select />,
    },

    
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
       
        <EuiPageBody panelled>
          <Navbar
            tabs={tabs}
            theme={props.theme}
            toggleTheme={props.toggleTheme}
            t={props.t}
          />
          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>
        
              <Routes>
                <Route path="/" element={<EventDetails 
              t={props.t}
                />} />
                <Route path="/events" element={<EventDetails 
                  t={props.t}
                />} />
                <Route
                  path="/speakers"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <SpeakersPanel   t={props.t}/>
                    </Suspense>
                  }
                />
                <Route
                  path="/talks"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <TalksPanel  t={props.t}/>
                    </Suspense>
                  }
                />
                <Route path="/recordings" element={<RecordingsPanel 
                 t={props.t}
                />} />
                <Route path="/faq" element={<FAQsPanel
                  t={props.t} />} />
                  <Route 
                  path="/test"
                  element={<Testpage />}
                  />
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar theme={props.theme}
          t ={props.t}
          />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
