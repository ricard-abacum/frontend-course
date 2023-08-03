import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface ProductProps {
  title: string;
  price: number;
  stock: number;
}

export const Product = ({ title, price, stock }: ProductProps) => {
  return (
    <Grid item sx={{ textAlign: "center", margin: "10px" }} xs={4}>
      <Box
        sx={{
          fontSize: 21,
          fontWeight: 800,
        }}
      >
        {title}
      </Box>
      <Box>Stock: {stock}</Box>
      <Box>{price}€</Box>
      <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
        Buy
      </Button>
    </Grid>
  );
};

export const Products = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ border: "2px solid gray", borderRadius: "16px" }}
    >
      <Product title="Redbull" stock={1} price={5} />
      <Product title="Fanta" stock={1} price={3} />
    </Grid>
  );
};
