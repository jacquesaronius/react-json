import React, { ReactElement, useEffect, useRef } from 'react';
import { Container, Typography, CircularProgress, Table, TableBody, TableRow, TableCell } from "@mui/material";
import logo from './logo.svg';
import './App.css';
import { OverridableComponent } from '@mui/material/OverridableComponent';

function App() {
  const progress = useRef<HTMLElement>(null);
  const systems = useRef<HTMLTableSectionElement>(null);
  
  useEffect(() => {
    //read json file 
    fetch('../data.json').then(res => res.json()).then(data => {
      //set progress bar to 100%
      if (progress.current != null)
        progress.current.style.display = 'none';
      //add data to table
  
      data.forEach((system: any) => {
        if (systems.current != null) {
          const row = 
          <TableRow>
            <TableCell>{system.name}</TableCell>
          </TableRow>
          systems.current.appendChild(row as Node)
          );
        }
      });

    });
  });
  return (
    <div className="App">
      <Container>
        <Typography variant="h4">Systems</Typography>
        <CircularProgress ref={progress} />
        <div>
          <Table>
            <TableBody ref={systems}/>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default App;
