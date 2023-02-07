import {
  faBusinessTime,
  faCalendarDays,
  faHouse,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./model/navLink";

export const navLinks: NavLink[] = [
  {
    name: "ホーム",
    path: "/home-page",
    icon: faHouse,
  },
  // {
  //   name: "予約",
  //   path: "/calendar",
  //   icon: faCalendarDays,
  // },
  // {
  //   name: "会員証",
  //   path: "/qr",
  //   icon: faQrcode,
  // },
  {
    name: "取引履歴",
    path: "/history",
    icon: faBusinessTime,
  },
];
