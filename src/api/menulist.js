import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Locale from "../utils/locale";

const defaultLanguage = "en";
export const menuList = [
  {
    link: "#Explore",
    title: Locale[defaultLanguage].menuList.explore,
    icon: <DirectionsOutlinedIcon />,
  },
  {
    link: "#Topics",
    title:  Locale[defaultLanguage].menuList.topic,
    icon: <GridViewOutlinedIcon />,
  },
  {
    link: "#Digest",
    title:  Locale[defaultLanguage].menuList.digest,
    icon: <WbSunnyOutlinedIcon />,
  },
  {
    link: "#Bookmark",
    title:  Locale[defaultLanguage].menuList.bookmark,
    icon: <BookmarkBorderOutlinedIcon />,
  },
];

export const nonIconMenuList = [
  {
    link: "#Bookmark",
    title: "Blog",
  },
  {
    link: "#Bookmark",
    title: "About",
  },
  {
    link: "#Bookmark",
    title: "Join the beta group",
  },
];
