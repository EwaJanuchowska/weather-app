import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Container
} from "@material-ui/core";

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Weather app</Typography>
      </Toolbar>
    </AppBar>

    <main className="main-content center">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Paper square className="paper">
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>

    <footer className="main-footer">
      &copy; 2020 Weather App
    </footer>
  </>
);

export default App;
