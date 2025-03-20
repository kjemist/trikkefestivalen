import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiTextAlign
} from "@elastic/eui";
import React from "react";
import AddCalButtons from "../../utilities/addCalButtons";
import { sessionOne, sessionTwo } from "../../data/consts";
import heroImage from "../../images/TrikkWiki.png";
import { max } from "moment";
export default class EventDetails extends React.Component {
  renderTopText = (props) => {
    const t = (this.props.t)
    return(
      <EuiEmptyPrompt title={
        <span>
          {t("Opplev musikk på Bergens historiske trikk")}
        </span>
      }>

      </EuiEmptyPrompt>
    )
  }

  renderHero = (props) => {
    return (
      <EuiImage
        size="fullWidth"
        alt="trikktrikktrikk"
        src={heroImage}
      />
    );
  };

  renderMoreDetails = (props) => {
   const t = (this.props.t)
   const myStyle = {
      backgroundColor: "lightgrey",
      maxWidth: "1200px",
      borderRadius: "100px",
      EuiTextAlign: "center"
   }

    return (
      <EuiEmptyPrompt style= {myStyle}
        title={
          <span style={myStyle}>
            {t("Hva er Trikkefestivalen?")}
          </span>
        }
        body={
        <EuiText style={{myStyle}}>
          <p>
            Opplev musikk mens du reiser med den historiske trikken gjennom Bergens gater!
          </p>
          <p>
            Trikkefestivalen er et frivillig initativ hvor vi ønsker å gjennomføre en musikkfestival på den historiske trikken som går fra Café Opera til Teknisk Museum på Møhlenpris.
            Festivalen blir mulig gjennom frivillig arbeid og partnerskap med lokale bedrifter
          </p>
        </EuiText>
        }
        
        actions={[
          <AddCalButtons 
          date={sessionOne.dateAndTime}
          calendarLink = {sessionOne.calendarLink}
          t={t}
          />
        ]}
      />
    );
  };

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderTopText()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderMoreDetails()}</EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
