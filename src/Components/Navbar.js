import React from "react";
import AppBar from '@mui/material/AppBar'
import { Box } from "@mui/system";
import { Button, Toolbar, Typography } from "@mui/material";

 const Navbar=()=>{
    
     return(
         
    <Box sx={{flexGrow: 1,marginLeft:'240px'}} > 
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1 }}>Flipkart</Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
     )}

export default Navbar