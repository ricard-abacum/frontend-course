import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Products } from "../components/Product";

export const VendingMachine = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Products />
      </Grid>
      <Grid item xs={6}>
        <Products />
      </Grid>
    </Grid>
  );
};
