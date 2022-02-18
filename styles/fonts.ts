import { css } from "styled-components";

const RobotoBlack = "/fonts/roboto/Roboto-Black.ttf";
const RobotoBlackItalic = "/fonts/roboto/Roboto-BlackItalic.ttf";
const RobotoBold = "/fonts/roboto/Roboto-Bold.ttf";
const RobotoBoldItalic = "/fonts/roboto/Roboto-BoldItalic.ttf";
const RobotoItalic = "/fonts/roboto/Roboto-Italic.ttf";
const RobotoLight = "/fonts/roboto/Roboto-Light.ttf";
const RobotoLightItalic = "/fonts/roboto/Roboto-LightItalic.ttf";
const RobotoMedium = "/fonts/roboto/Roboto-Medium.ttf";
const RobotoMediumItalic = "/fonts/roboto/Roboto-MediumItalic.ttf";
const RobotoRegular = "/fonts/roboto/Roboto-Regular.ttf";
const RobotoThin = "/fonts/roboto/Roboto-Thin.ttf";
const RobotoThinItalic = "/fonts/roboto/Roboto-ThinItalic.ttf";

const fontFaces = css`
  @font-face {
    font-family: "RobotoBlack";
    src: url(${RobotoBlack}) format("truetype");
  }

  @font-face {
    font-family: "RobotoBlackItalic";
    src: url(${RobotoBlackItalic}) format("truetype");
  }

  @font-face {
    font-family: "RobotoBold";
    src: url(${RobotoBold}) format("truetype");
  }

  @font-face {
    font-family: "RobotoBoldItalic";
    src: url(${RobotoBoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "RobotoItalic";
    src: url(${RobotoItalic}) format("truetype");
  }

  @font-face {
    font-family: "RobotoLight";
    src: url(${RobotoLight}) format("truetype");
  }

  @font-face {
    font-family: "RobotoLightItalic";
    src: url(${RobotoLightItalic}) format("truetype");
  }

  @font-face {
    font-family: "RobotoMedium";
    src: url(${RobotoMedium}) format("truetype");
  }

  @font-face {
    font-family: "RobotoMediumItalic";
    src: url(${RobotoMediumItalic}) format("truetype");
  }

  @font-face {
    font-family: "RobotoRegular";
    src: url(${RobotoRegular}) format("truetype");
  }

  @font-face {
    font-family: "RobotoThin";
    src: url(${RobotoThin}) format("truetype");
  }

  @font-face {
    font-family: "RobotoThinItalic";
    src: url(${RobotoThinItalic}) format("truetype");
  }
`;

export default fontFaces;
