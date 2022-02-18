import fontFaces from "./fonts";
import { FlattenSimpleInterpolation } from "styled-components";

export interface Theme {
  colorYin: string;
  colorYang: string;
  colorTertiary: string;
  fontFaces: FlattenSimpleInterpolation[];
  fontFamilyRegular: string;
  fontFamilyLight: string;
  fontFamilyBold: string;
}

const theme: Theme = {
  colorYin: "#FFFFFF",
  colorYang: "#000000",
  colorTertiary: "#6e87ff",
  fontFaces: [fontFaces],
  fontFamilyRegular: "RobotoRegular",
  fontFamilyLight: "RobotoLight",
  fontFamilyBold: "RobotoBold",
};

export default theme;
