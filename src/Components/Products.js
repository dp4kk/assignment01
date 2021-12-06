import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../Context/DataContext";
const Products = () => {
  const { showItems } = useContext(AppContext);
  console.log(showItems)

  return (
    <Paper sx={{ paddingTop: "30px", marginLeft: "240px" }}>
      <Grid container spacing={3}>
        {
          showItems.map((product) => {
            return (
              <Grid item id={product.id}>
                <Card sx={{ maxWidth: 340 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.brand}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {product.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      Rs.{product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        
    }
      </Grid>
    </Paper>
  );
};

export default Products;
