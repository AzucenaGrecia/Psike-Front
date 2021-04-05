/** @jsxImportSource @emotion/react */

import {
  RiFacebookCircleFill,
  RiSlackFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGoogleFill,
  RiStarFill,
  RiMailLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiCloseFill,
  RiEqualizerLine,
  RiArrowDropDownLine,
  RiWechatLine,
  RiUserSmileLine,
  RiSurveyLine,
  RiHomeWifiLine,
  RiCursorLine,
  RiMentalHealthLine,
  RiUserHeartLine,
  RiVideoAddLine,
  RiHandHeartFill,
  RiCameraFill,
  RiMenuFoldLine,
  RiCloseLine,
  RiHome2Line,
  RiDashboardLine,
  RiCalendarCheckLine,
  RiCheckboxBlankCircleFill,
  RiPriceTag3Line,
  RiCalendarLine,
  RiBookmarkFill
} from "react-icons/ri";

import { IoIosAddCircle } from "react-icons/io";
import { css } from "@emotion/react";

const iconSet = {
  fb: RiFacebookCircleFill,
  slack: RiSlackFill,
  twitter: RiTwitterFill,
  linkedin: RiLinkedinBoxFill,
  google: RiGoogleFill,
  start: RiStarFill,
  email: RiMailLine,
  arrowLeft: RiArrowDropLeftLine,
  arrow: RiArrowDropRightLine,
  close: RiCloseFill,
  add: IoIosAddCircle,
  lizer: RiEqualizerLine,
  arrowDrop: RiArrowDropDownLine,
  chat: RiWechatLine,
  smile: RiUserSmileLine,
  survey: RiSurveyLine,
  home: RiHomeWifiLine,
  cursor: RiCursorLine,
  video:RiVideoAddLine,
  reason:RiHandHeartFill,
  mind: RiMentalHealthLine,
  userheart: RiUserHeartLine,
  camera: RiCameraFill,
  menu: RiMenuFoldLine,
  close: RiCloseLine,
  home: RiHome2Line,
  /*dashborad: RiDashboardLine,*/
  calend: RiCalendarCheckLine,
  circle:RiCheckboxBlankCircleFill,
  ticket:RiPriceTag3Line,
  dashboard: RiDashboardLine,
  calendar: RiCalendarLine,
  status: RiBookmarkFill
};

function Icon({ type, fill, size, styles, onClick }) {
  const IconComponent = iconSet[type];
  return (
    <IconComponent
      onClick={onClick}
      css={css`
        fill: ${fill};
        font-size: ${size}px;
        ${styles};
      `}
      onClick={onClick}
    />
  );
}

export default Icon;
