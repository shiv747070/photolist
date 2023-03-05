import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box display="flex" flexDirection="row">
      <Sidebar></Sidebar>
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

export default App;
