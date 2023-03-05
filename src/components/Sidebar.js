import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Sidebar = () => {
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
      <List>
        <ListItem disablePadding sx={{ marginTop: 3 }}>
          <ListItemButton component="a" href="#Explore">
            <ListItemIcon>
              <DirectionsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" color="#D6D6D" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Topics">
            <ListItemIcon>
              <GridViewOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Topics" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Digest">
            <ListItemIcon>
              <WbSunnyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Digest" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Bookmark">
            <ListItemIcon>
              <BookmarkBorderOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmark" />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ bottom: "10px" }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Bookmark">
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Bookmark">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Bookmark">
            <ListItemText primary="Join the beta group" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
