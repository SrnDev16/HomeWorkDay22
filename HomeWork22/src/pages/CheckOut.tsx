import TitleCheckOut from "../components/TitleCheckOut";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import React from "react";
import MyForm from "../components/MyForm";

const CheckOut = () => {
  return (
    // <div className="checkout">
    //   <TitleCheckOut />
    // </div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{height:"100vh"}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <TitleCheckOut />
        <MyForm />
      </Container>
    </React.Fragment>
  );
};

export default CheckOut;
