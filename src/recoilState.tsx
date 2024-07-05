import { atom, selector } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    menu_cd: null,
    parent_cd_id: null,
    path: null,
    parentName: null,
    name: null,
  },
});
