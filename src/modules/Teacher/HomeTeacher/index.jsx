import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';

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

const HomeTeacher = () => {
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
          <Button color="inherit">Hi,Lamhot Simbolon</Button>
        </Toolbar>
      </AppBar>
     <Box mt={4} ml={4}>
        <Typography>
            SELAMAT DATANG, LAMHOT SIMBOLON
        </Typography>
        <Typography>
           Selamat datang di halaman guru E-SMK, anda dapat menambah materi, Dalam materi anda dapat memasukkan video dan deskripsi.
        </Typography>
        <Typography>
            Semoga anda dapat menikmati E-SMK, Kontak administrator jika terjadi masalah apapun yg terkait upload materi.
        </Typography>
        <Box mt={4}>
            <Button variant="contained" color="primary">
                Tambah Materi
            </Button>
        </Box>
     </Box>
    </div>
  );
}

export default HomeTeacher;