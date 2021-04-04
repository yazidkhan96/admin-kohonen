import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../../containers/templates/Layout";
import { Box, Button, Grid } from "@material-ui/core";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const useStyles = makeStyles((muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    marginLeft: 20,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {},
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
  addMateri : {
   marginLeft: "18%"
  }
}));

const AdminHome = () => {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <Box ml={12} mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    SISWA
                  </Typography>
                  <Typography>Siswa : 20</Typography>
                  <Divider className={classes.divider} light />
                  {faces.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    GURU
                  </Typography>
                  <Typography>GURU : 5</Typography>
                  <Divider className={classes.divider} light />
                  {faces.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    MATERI
                  </Typography>
                  <Typography>MATERI : 5</Typography>
                  <Divider className={classes.divider} light />
                  {faces.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    KELAS
                  </Typography>
                  <Typography>KELAS : 3</Typography>
                  <Divider className={classes.divider} light />
                  {faces.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    <div className={classes.addMateri}>
    <Box mt={4}>
        <Typography variant="h5" component="h5">
          Tambah Materi ?
        </Typography>
        <Typography>
          Jika anda ingin menambahkan beberapa materi,video,gambar,teks anda
          bisa melakukan nya dengan menekan tombol dibawah ini :
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary">
            Tambah Materi
          </Button>
        </Box>
      </Box>
    </div>
    </>
  );
};

export default AdminHome;
