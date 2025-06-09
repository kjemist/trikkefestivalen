import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import heroImage from "../../images/TrikkWiki.png";
export default class EventDetails extends React.Component {

  renderHero = () => {
    return (
      <EuiImage
        size="fullWidth"
        alt="trikktrikktrikk"
        src={heroImage}
      />
    );
  };

  

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
