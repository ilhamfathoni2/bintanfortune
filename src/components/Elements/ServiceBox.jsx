import React from "react";
import styled from "styled-components";
// Assets
import TourIcon from "../../assets/svg/Services/TourIcon";
import GolfIcon from "../../assets/svg/Services/GolfIcon";
import TaxiIcon from "../../assets/svg/Services/TaxiIcon";
import RentIcon from "../../assets/svg/Services/RentIcon";
import PickupIcon from "../../assets/svg/Services/PickupIcon";

import Popup from "reactjs-popup";

export default function ServiceBox({
  icon,
  title,
  subtitle,
  iconHeight,
  readmore,
}) {
  let getIcon;

  switch (icon) {
    case "tour":
      getIcon = <TourIcon height={iconHeight} />;
      break;
    case "golf":
      getIcon = <GolfIcon height={iconHeight} />;
      break;
    case "taxi":
      getIcon = <TaxiIcon height={iconHeight} />;
      break;
    case "rent":
      getIcon = <RentIcon height={iconHeight} />;
      break;
    case "plane-ship":
      getIcon = <PickupIcon height={iconHeight} />;
      break;
    default:
      getIcon = <TourIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      {readmore === true && (
        <Popup
          trigger={<BtnReadMore>Read More</BtnReadMore>}
          position="center"
        >
          <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
        </Popup>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 2px 3px 16px 0px rgba(0,0,0,0.26);
  -webkit-box-shadow: 2px 3px 16px 0px rgba(0,0,0,0.26);
  -moz-box-shadow: 2px 3px 16px 0px rgba(0,0,0,0.26);
`;
const BtnReadMore = styled.button`
  font-family: Poppins, sans-serif;
  color: white;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  background-color: #7620ff;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 5px;
`;
