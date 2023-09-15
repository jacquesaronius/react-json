import React from 'react';
import { Container, Typography, CircularProgress } from "@mui/material";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4">Systems</Typography>
        <div id="systems">
          <CircularProgress />
        </div>
      </Container>
    </div>
  );
}

export default App;
