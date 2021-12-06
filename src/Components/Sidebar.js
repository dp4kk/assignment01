import {
  Button,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext,} from "react";
import { AppContext } from "../Context/DataContext";
const Sidebar = () => {
  const { updatefilter, removefilter, filter } = useContext(AppContext);
  const price = ["low-to-high", "high-to-low"];
  const ideal = ["MEN", "WOMEN"];
  const size = ["S", "M", "L", "XL"];
  const brand = [
    "VAN HEUSEN SPORT",
    "PETER ENGLAND",
    "JUNEBERRY",
    "Aayu",
    "Damensch",
  ];

  return (
    <Box sx={{ display: "flex", border: 0 }}>
      <Drawer
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 260,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Typography variant="h5" align="center">
            Price
          </Typography>
          {price.map((price,index) => {
            return (
              <Button
                key={index}
                name="price"
                type="submit"
                onClick={updatefilter}
                variant={
                  price === filter.price.toLowerCase() ? "contained" : "text"
                }
              >
                {price}
              </Button>
            );
          })}
          <Divider />
          <Typography variant="h5" align="center">
            Ideal For
          </Typography>
          {ideal.map((ideal,index) => {
            return (
              <Button key={index} name="ideal" type="submit" onClick={updatefilter} variant={ideal === filter.ideal ? 'contained' :'text'}>
                {ideal}
              </Button>
            );
          })}
          <Divider />
          <Typography variant="h5" align="center">
            Size
          </Typography>
          {size.map((size,index) => {
            return (
              <Button key={index} name="size" onClick={updatefilter} variant={size === filter.size ? 'contained' : 'text'}>
                {size}
              </Button>
            );
          })}
          <Divider />
          <Typography variant="h5" align="center">
            Brand
          </Typography>
          {brand.map((brand,index) => {
            return (
              <li key={index} style={{listStyle:'none'}}>
              <Button  name="brand" onClick={updatefilter} variant={brand.split(' ').join('').toUpperCase() === filter.brand.split(' ').join('').toUpperCase() ? 'contained' :'text'}>
                {brand}
              </Button>
              </li>
            );
          })}
          <Divider />
        </form>
        <Button onClick={removefilter}>Clear Filter</Button>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
