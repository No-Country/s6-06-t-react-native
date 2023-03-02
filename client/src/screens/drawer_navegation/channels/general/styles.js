import { StyleSheet } from "react-native";
import { ScreenWidth } from "../../../../utils/ScreenDimesions";

export const styles = StyleSheet.create({
  homeContain: {
    flex: 1,
    backgroundColor: "white",
  },
  HeaderContain: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  ScrollContain: {
    flex: ScreenWidth <= 360 ? 5 : 7,
    paddingVertical: 10,
  },
});
