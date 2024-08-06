import { Stack } from "@mui/material";
import styles from "@/styles/top-navbar.module.css";
import { useRecoilState } from "recoil";
import { menuState } from "@/utils/recoil/recoilState";

export const TopNav = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  return (
    <Stack
      className={styles.topMenuContainer}
      direction="row"
      justifyContent="space-between"
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <Stack direction="row" alignItems="center">
        <div className={styles.logoContainer}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <div className={styles.logoText}>{`${
              menu.parentName ?? "라이브러리 관리"
            } > ${menu.name ?? "라이브러리 관리1"}`}</div>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
};
