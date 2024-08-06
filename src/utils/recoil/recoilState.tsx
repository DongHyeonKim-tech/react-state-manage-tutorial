import { atom, selector } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    menu_cd: 101,
    parent_cd_id: 100,
    path: "library1",
    parentName: "라이브러리 관리",
    name: "라이브러리 관리1",
  },
});
