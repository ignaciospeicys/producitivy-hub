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
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import Pomodoro from './components/Pomodoro';
import Matrix from './components/Matrix';
import Stats from './components/Stats';
import Welcome from './components/Welcome';

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
          <AppBar position="static">
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
          <Drawer variant="persistent" open={sidebarVisible}>
            <div className="App-sidebar">
              <Button onClick={toggleSidebar} className="toggle-button" variant="contained" color="primary">
                {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
              </Button>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/pomodoro">
                  <ListItemText primary="Pomodoro" />
                </ListItem>
                <ListItem button component={Link} to="/matrix">
                  <ListItemText primary="Matrix" />
                </ListItem>
                <ListItem button component={Link} to="/stats">
                  <ListItemText primary="Stats" />
                </ListItem>
              </List>
            </div>
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