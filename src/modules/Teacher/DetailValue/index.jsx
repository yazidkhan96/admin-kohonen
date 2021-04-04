import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function createData(no, pelajaran, guru, status, nilai) {
    return { no, pelajaran, guru, status, nilai };
  }
  const rows = [
    createData("1", "Dasar Kalkulus", "Matematika", "Lihat Nilai"),
    createData("2", "Statistika", "Matematika", "Lihat Nilai"),
    createData("3", "Penggunaan bahasa baku", "Bahasa Indonesia", "Lihat Nilai"),
    createData("4", "Kuis Bahasa Indonesia", "Bahasa Indonesia", "Lihat Nilai"),
  ];
const DetailValue = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button variant="text" color="inherit">
             Dashboard
         </Button>
         <Button variant="text" color="inherit">
             MATERI
         </Button>
         <Button variant="text" color="inherit">
            NILAI SISWA
         </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={7}>
          <b>DETAIL NILAI</b>
        </Box>
       <Box mt={3} boxShadow={3}>
       <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nama Materi</TableCell>
                <TableCell>Mata Pelajaran</TableCell>
                <TableCell>Keterangan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.no}>
                  <TableCell component="th" scope="row">
                    {row.no}
                  </TableCell>
                  <TableCell>{row.pelajaran}</TableCell>
                  <TableCell>{row.guru}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.nilai}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       </Box>
      </Container>
    </div>
  );
}

export default DetailValue;