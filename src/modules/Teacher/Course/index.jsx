import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Box, Container, Grid } from "@material-ui/core";

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
  rootCard: {
    minWidth: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleCard: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Course = () => {
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
          <b>MATERI PELAJARAN</b><br/><br/>
          <Button variant="contained" color="primary">Tambah Materi</Button>
        </Box>
        <Grid container spacing={6}>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
            <Card className={classes.rootCard} variant="outlined">
            <CardContent>
              <Typography
                className={classes.titleCard}
                color="textSecondary"
                gutterBottom
              >
                Materi
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               MATEMATIKA
              </Typography>
              <Typography variant="body2" component="p">
              Dasar Statistika
              </Typography><br/>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">Lihat Materi</Button>
            </CardActions>
          </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
            <Card className={classes.rootCard} variant="outlined">
            <CardContent>
              <Typography
                className={classes.titleCard}
                color="textSecondary"
                gutterBottom
              >
                Materi
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               MATEMATIKA
              </Typography>
              <Typography variant="body2" component="p">
               Penerapan Statistika di kehidupan sehari hari
              </Typography><br/>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">Lihat Materi</Button>
            </CardActions>
          </Card>
            </Grid>
          </Box>{" "}
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
            <Card className={classes.rootCard} variant="outlined">
            <CardContent>
              <Typography
                className={classes.titleCard}
                color="textSecondary"
                gutterBottom
              >
               Materi
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                MATEMATIKA
              </Typography>
              <Typography variant="body2" component="p">
                Belajar Phytagoras.
              </Typography><br/>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">Lihat Materi</Button>
            </CardActions>
          </Card>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Course;
