import Box from "@mui/material/Box";
import { menuList, nonIconMenuList } from "../../api/menulist";
import Sidebar from "../../components/Sidebar";

function HomePage() {
  return (
    <Box display="flex" flexDirection="row">
      <Sidebar
        list={menuList}
        nonList={nonIconMenuList}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        ml={2}
        flex="90%"
      ></Box>
    </Box>
  );
}

export default HomePage;
