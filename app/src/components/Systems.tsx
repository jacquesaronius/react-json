import React, { useEffect, useRef } from 'react';
import { Container, Typography, CircularProgress, Table, TableBody, TableRow, TableCell } from "@mui/material";
import data from '../../../data.json';

function Systems() {
    const progress = useRef<HTMLElement>(null);
    const systems = useRef<HTMLDivElement>(null);
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
