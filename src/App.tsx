import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItemText,
    CssBaseline,
    ThemeProvider,
    createTheme, ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';
import Pomodoro from './components/Pomodoro';
import Matrix from './components/Matrix';
import Stats from './components/Stats';
import Board from './components/Board';
import Welcome from './components/Welcome';

const App: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const minTomato = require('./assets/min_tomato.png');
    const minMatrix = require('./assets/matrix_min.png');
    const minBoard = require('./assets/board_min.png');
    const minData = require('./assets/data_min.png');

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
            <CssBaseline/>
            <Router>
                <div className="App">
                    <AppBar
                        position="static"
                        sx={{
                            width: sidebarVisible ? `calc(100% - 180px)` : `calc(100% - 60px)`,
                            marginLeft: sidebarVisible ? `180px` : `60px`,
                            transition: 'width 0.3s ease, margin-left 0.3s ease',
                            bgcolor: '#fff2f2',
                            color: 'black'
                        }}
                    >
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Productivity Hub
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        open={sidebarVisible}
                        sx={{
                            width: sidebarVisible ? 180 : 60,
                            transition: 'width 0.3s ease',
                            position: 'fixed',
                            '& .MuiDrawer-paper': {
                                width: sidebarVisible ? 180 : 60,
                                transition: 'width 0.3s ease',
                                backgroundColor: '#fff2f2'
                            },
                        }}
                    >
                        <List
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <ListItemButton onClick={toggleSidebar}>
                                <IconButton
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </ListItemButton>
                            <ListItemButton component={Link} to="/">
                                {sidebarVisible ? (
                                    <>
                                        <HomeIcon style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                                        <ListItemText primary="Home" />
                                    </>
                                ) : (
                                    <HomeIcon />
                                )}
                            </ListItemButton>
                            <ListItemButton component={Link} to="/pomodoro">
                                {sidebarVisible ? (
                                    <>
                                        <img src={minTomato} alt="Pomodoro" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                                        <ListItemText primary="Pomodoro"/>
                                    </>
                                ) : (
                                    <img src={minTomato} alt="Pomodoro" style={{width: '24px', height: '24px' }} />
                                )}
                            </ListItemButton>
                            <ListItemButton component={Link} to="/matrix">
                                {sidebarVisible ? (
                                    <>
                                        <img src={minMatrix} alt="Matrix" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                                        <ListItemText primary="Matrix"/>
                                    </>
                                ) : (
                                    <img src={minMatrix} alt="Matrix" style={{width: '24px', height: '24px' }} />
                                )}
                            </ListItemButton>
                            <ListItemButton component={Link} to="/board">
                                {sidebarVisible ? (
                                    <>
                                        <img src={minBoard} alt="Board" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                                        <ListItemText primary="Board"/>
                                    </>
                                ) : (
                                    <img src={minBoard} alt="Board" style={{width: '24px', height: '24px' }} />
                                )}
                            </ListItemButton>
                            <ListItemButton component={Link} to="/stats">
                                {sidebarVisible ? (
                                    <>
                                        <img src={minData} alt="Stats" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                                        <ListItemText primary="Stats"/>
                                    </>
                                ) : (
                                    <img src={minData} alt="Stats" style={{width: '24px', height: '24px' }} />
                                )}
                            </ListItemButton>
                        </List>
                    </Drawer>
                    <main
                        className="App-content"
                        style={{
                            marginLeft: sidebarVisible ? 180 : 60,
                            transition: 'margin-left 0.3s ease',
                            padding: '16px',
                        }}
                    >
                        <Routes>
                            <Route path="/pomodoro" element={<Pomodoro/>}/>
                            <Route path="/matrix" element={<Matrix/>}/>
                            <Route path="/board" element={<Board/>}/>
                            <Route path="/stats" element={<Stats/>}/>
                            <Route path="/" element={<Welcome/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;