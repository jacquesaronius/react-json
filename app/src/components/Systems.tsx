import React, { useEffect, useRef } from 'react';
import { Container, Typography, CircularProgress, Table, TableBody, TableRow, TableCell } from "@mui/material";
import data from '../data.json';

function Systems() {
    const progress = useRef<HTMLElement>(null);
    const systems = useRef<HTMLDivElement>(null);
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
    
    useEffect(() => {
        async function update() {
            await sleep(5000);
    
            if (progress.current && systems.current) {
                progress.current.className = "invisible";
                systems.current.className = "visible";
            }
        }
        update();
    });
    
    return (
        <div className="systems">
            <Container>
                <Typography variant="h4">Systems</Typography>
                <CircularProgress ref={progress} />
                <div className='invisible' ref={systems}>
                    <Table>
                        <TableBody>
                        {   
                            data.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Systems;
