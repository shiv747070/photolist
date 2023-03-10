import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Listitem = ({ link, title, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={link}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} color="#D6D6D" />
      </ListItemButton>
    </ListItem>
  );
};

const NonIconitem = ({ link, title }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={link}>
        <ListItemText primary={title} color="#D6D6D" />
      </ListItemButton>
    </ListItem>
  );
};

export { Listitem, NonIconitem };
