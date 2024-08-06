"use client"; // this is a client component
import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import { Box, IconButton } from "@mui/material";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useRecoilState } from "recoil";
import { menuState } from "@/utils/recoil/recoilState";
import { useRouter } from "next/navigation";

import { getMenuList } from "@/utils/api/apiUtils";

const { SubMenu } = Menu;

export const Sidebar = (props: any) => {
  const router = useRouter();

  const [open, setOpen] = React.useState(true);
  const [menu, setMenu] = useRecoilState(menuState);
  const [selectedKeys, setSelectedKeys] = useState(["100", "101"]);

  useEffect(() => console.log("menu: ", menu), [menu]);

  useEffect(() => {
    setTimeout(() => {
      setOpen(props.openList);
    }, 200);
  }, [props.openList]);
  const [arrMenu, setArrMenu] = useState([]);

  useEffect(() => {
    if (arrMenu.length === 0) {
      getMenuList().then((res) => {
        const data = res.data;
        let tmpArr: any = [];
        for (const ojt of data) {
          if (ojt.parent_cd_id) {
            tmpArr
              .find((item: any) => item.menu_cd === ojt.parent_cd_id)
              .children.push({ ...ojt, key: ojt.menu_cd });
          } else {
            tmpArr.push({ ...ojt, key: ojt.menu_cd, children: [] });
          }
        }
        console.log("tmpArr: ", tmpArr);
        setArrMenu(tmpArr);
      });
    }
  }, [arrMenu]);

  useEffect(() => {
    if (menu.menu_cd && menu.parent_cd_id) {
      setSelectedKeys([String(menu.menu_cd), String(menu.parent_cd_id)]);
    }
  }, [menu]);

  useEffect(() => console.log("selectedKeys: ", selectedKeys), [selectedKeys]);

  return (
    <Box
      className={styles.sidebarContainer}
      sx={{
        height: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className={styles.listButton}>
        {props.openList && (
          <div className={styles.logoText}>HAEAHN BIM Admin Portals</div>
        )}

        <IconButton
          sx={{
            color: "#62686a",
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "6px",
            fontSize: "1rem",
          }}
          onClick={() => props.setOpenList(!props.openList)}
        >
          {props.openList ? <LeftOutlined /> : <RightOutlined />}
        </IconButton>
      </div>
      {open && arrMenu.length > 0 && (
        <Menu
          mode="inline"
          onClick={(info) => console.log("info: ", info)}
          selectedKeys={selectedKeys}
          defaultSelectedKeys={selectedKeys}
          defaultOpenKeys={[
            menu.parent_cd_id ? String(menu.parent_cd_id) : "100",
          ]}
        >
          {arrMenu.map((item: any) => {
            return (
              <SubMenu
                title={item.name}
                className={styles.mainMenuText}
                key={item.key}
              >
                {item.children.map((childItem: any) => {
                  return (
                    <Menu.Item
                      key={childItem.key}
                      className={styles.subMenuText}
                      onClick={() => {
                        setMenu({ ...childItem, parentName: item.name });
                        console.log("clicked item: ", item);
                        if (selectedKeys[0] !== item.menu_cd) {
                          router.push(item.path);
                        }
                      }}
                    >
                      {childItem.name}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      )}
    </Box>
  );
};
