import { creatAppContainer, createSwitchitContainer } from "react-navigation";
import Welcome from "../screens";
import VPN from "../screens/VPN";

const Screens = createSwitchitContainer({
  Welcome,
  VPN
});

export default creatAppContainer(Screens);
