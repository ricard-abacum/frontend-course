import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { IProductSlot } from "../utils/types";
import { useDispatch } from "react-redux";
import { updateBalance } from "../app/vendingMachineSlice";
import { api } from "../utils/api";

export const Product: FC<{ product_slot: IProductSlot }> = ({
  product_slot,
}) => {
  const dispatch = useDispatch();
  const { id, quantity, product } = product_slot;
  const { name, price } = product;
  const orderProduct = async () => {
    try {
      const response = await api.order({ slot_id: id, quantity: 1 });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Grid item sx={{ textAlign: "center" }} xs={4}>
      <Box
        sx={{
          fontSize: 21,
          fontWeight: 800,
        }}
      >
        {name}
      </Box>
      <Box>Stock: {quantity}</Box>
      <Box>{price}€</Box>
      <Button
        sx={{ border: "2px solid black", borderRadius: "16px" }}
        onClick={() => {
          orderProduct();
        }}
      >
        Buy
      </Button>
    </Grid>
  );
};

export const ProductGrid = ({
  product_list,
}: {
  product_list: Array<IProductSlot>;
}) => {
  let grid_x = 3;
  let grid_y = 3;

  const product_grid = Array(grid_y);
  for (let idx = 0; idx < grid_x; idx++) {
    product_grid[idx] = Array(grid_x);
  }

  for (var idx = 0; idx < grid_x; idx++) {
    for (var idy = 0; idy < grid_y; idy++) {
      product_grid[idx][idy] = (
        <Grid item sx={{ textAlign: "center" }} xs={4}>
          No Item
        </Grid>
      );
    }
  }

  for (var product of product_list) {
    product_grid[product.coordinates[0]][product.coordinates[1]] = (
      <Product product_slot={product} />
    );
  }
  console.log(product_grid);
  return (
    <Grid
      container
      spacing={1}
      sx={{ border: "2px solid gray", borderRadius: "16px" }}
    >
      {product_grid}
    </Grid>
  );
};
