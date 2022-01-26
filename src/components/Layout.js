import { makeStyles } from "@mui/styles";
import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
  ListItemButton,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import SubjectOutlined from "@mui/icons-material/SubjectOutlined";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex !important",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      minHeight: "94.5vh",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#cffff5",
    },
    title: {
      padding: theme.spacing(2),
    },
    toolbar: {
      backgroundColor: "#fff",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px) !important`,
    },
    pushdown: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: 15,
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleRoundedIcon color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.date} variant="body1" color="initial">
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography variant="body1" color="initial">
            Milan
          </Typography>
          <Avatar
            className={classes.avatar}
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawer }}
      >
        <div>
          <Typography
            className={classes.title}
            align="center"
            variant="h4"
            component="h1"
          >
            muiNotes
          </Typography>
        </div>
        <List>
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.text}
              className={
                location.pathname == menuItem.path ? classes.active : null
              }
            >
              <ListItemButton onClick={() => navigate(menuItem.path)}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.pushdown}></div>
        {children}
      </div>
      ;
    </div>
  );
}
