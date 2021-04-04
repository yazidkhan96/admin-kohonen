import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
}));
const AddMateri = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
          <b>TAMBAH MATERI PELAJARAN</b>
          <br />
          <br />
        </Box>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <Box mb={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nama Guru"
                variant="standard"
                type="text"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nama Mata Pelajaran"
                variant="standard"
                type="email"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Deskripsi Materi"
                variant="standard"
                type="text"
              />
            </Box>
            <Box mb={2}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="age-native-simple">Kelas</InputLabel>
                <Select
                  native
                  value={state.kelas}
                  onChange={handleChange}
                  inputProps={{
                    name: "Kelas",
                    id: "kelas-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Matematika</option>
                  <option value={20}>Bahasa Inggris</option>
                  <option value={30}>Bahasa Indonesia</option>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="secondary"
              component="span"
              fullWidth
            >
              Upload Video Materi
            </Button>
          </label>
        </form>
        <Box mt={4}>
        <Button variant="contained" color="primary" fullWidth>Tambah Materi</Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddMateri;
