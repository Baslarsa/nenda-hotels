import React from "react";
import "./App.css";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const customerData = require("./data.json");

function App() {
  return (
    <div>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h5" noWrap>
              Nenda Customer Portal
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Box className="App-content">
        {customerData.customers.map((c: any) => {
          return (
            <>
              <Typography variant="h6">{c.name}</Typography>
              {c.screens.map((s: any) => (
                <Typography variant="h5">{s.id}</Typography>
              ))}
            </>
          );
        })}
      </Box>
    </div>
  );
}

export default App;
