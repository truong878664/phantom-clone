import appStore from "../../../assets/image/iconOS/appstore.png";
import chPlay from "../../../assets/image/iconOS/chplay.svg";
import windowIcon from "../../../assets/image/iconOS/window.png";
import linux from "../../../assets/image/iconOS/linux.png";
interface IconDownload {
  [key: string]: string;
}
const iconDownload: IconDownload = {
  Linux: linux,
  Android: chPlay,
  BlackBerry: chPlay,
  Bluebird: appStore,
  ChromeOS: appStore,
  Datalogic: appStore,
  Honeywell: appStore,
  iPad: appStore,
  iPhone: appStore,
  iPod: appStore,
  macOS: appStore,
  Windows: windowIcon,
  Zebra: appStore,
};

export default iconDownload;
