import { Box, List } from "@mui/material";
import React from "react";
import { Listitem, NonIconitem } from "./Listitem";

const Sidebar = ({list, nonList}) => {
  return (
    <Box
      sx={{
        bgcolor: "#F5F7F9",
        minHeight: "100vh",
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "10%",
        p: 1,
      }}
    >
      <List sx={{ pt: 3 }}>
        {list.map((props)=>{
          return (
            <Listitem {...props} />
          )
        })}
      </List>
      <List sx={{ bottom: "10px" }}>
        {nonList.map((props)=>{
          return (
            <NonIconitem {...props}/>
          )
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
