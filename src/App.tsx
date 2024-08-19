import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  ThemeProvider,
  createTheme, ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';
import Pomodoro from './components/Pomodoro';
import Matrix from './components/Matrix';
import Stats from './components/Stats';
import Welcome from './components/Welcome';
import clsx from 'clsx';

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const theme = createTheme({
    palette: {
      mode: 'light',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <AppBar
            position="static"
            sx={{
              width: sidebarVisible ? `calc(100% - 240px)` : `calc(100% - 60px)`,
              marginLeft: sidebarVisible ? `240px` : `60px`,
              transition: 'width 0.3s ease, margin-left 0.3s ease',
              bgcolor: '#fff2f2',
              color: 'black'
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Productivity Hub
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx('App-sidebar', { 'App-sidebar-open': sidebarVisible })}
            classes={{
              paper: clsx('App-sidebar-paper', { 'App-sidebar-paper-open': sidebarVisible }),
            }}
          >
            <IconButton onClick={toggleSidebar} className="toggle-button" color="primary">
              {sidebarVisible ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
            <List>
              <ListItemButton component={Link} to="/">
                <HomeIcon />
              </ListItemButton>
              <ListItemButton component={Link} to="/pomodoro">
                <ListItemText primary={sidebarVisible ? "Pomodoro" : "P"} />
              </ListItemButton>
              <ListItemButton component={Link} to="/matrix">
                <ListItemText primary={sidebarVisible ? "Matrix" : "M"} />
              </ListItemButton>
              <ListItemButton component={Link} to="/stats">
                <ListItemText primary={sidebarVisible ? "Stats" : "S"} />
              </ListItemButton>
            </List>
          </Drawer>
          <main className="App-content">
            <Routes>
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/matrix" element={<Matrix />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/" element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;