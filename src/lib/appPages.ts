import DevicesIcon from "@material-ui/icons/Devices";
import InfoIcon from "@material-ui/icons/Info";

export const appPages = [
  {
    label: "What is my IP",
    href: "/what-is-my-ip",
    showInToolCupboard: true,
    Icon: DevicesIcon
  },
  {
    label: "Portchecker",
    href: "/portchecker",
    showInToolCupboard: true,
    Icon: InfoIcon
  },
  {
    label: "About",
    href: "/",
    showInToolCupboard: false,
    Icon: InfoIcon
  }
];
