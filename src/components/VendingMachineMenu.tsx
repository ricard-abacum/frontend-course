import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Products } from "./Product";
import { Box, Button } from "@mui/material";
import { IUser } from "./User";

export const VendingMachineMenu = ({
  user_id,
  name,
  surname,
  money,
}: IUser) => {
  return (
    <Box
      gap={2}
      m={1}
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="space-between"
      sx={{
        boxSizing: "content-box",
      }}
    >
      <Box
        width="100%"
        m={1}
        sx={{
          border: "2px solid gray",
          borderRadius: "16px",
          fontSize: 21,
          fontWeight: 800,
          textAlign: "right",
        }}
      >
        {name} {surname}
      </Box>
      <Box width="100%">
        <MoneyMenu />
      </Box>
      <Box width="100%">
        <BalanceBox balance={money} />
      </Box>
      <Box width="100%">
        <Button
          sx={{
            border: "2px solid gray",
            borderRadius: "16px",
            fontSize: 21,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Refund Money
        </Button>
      </Box>
    </Box>
  );
};

export const MoneyMenu = () => {
  return (
    <Box
      sx={{
        border: "2px solid gray",
        borderRadius: "16px",
        fontSize: 21,
        fontWeight: 800,
      }}
    >
      <Box>Add Money</Box>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              0.10$
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              0.20$
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              0.50$
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              1$
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              2$
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ border: "2px solid black", borderRadius: "16px" }}>
              5$
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const BalanceBox = ({ balance }: { balance: number }) => {
  return (
    <Box
      sx={{
        border: "2px solid gray",
        borderRadius: "16px",
        fontSize: 21,
        fontWeight: 800,
        textAlign: "center",
      }}
    >
      Balance: {balance}$
    </Box>
  );
};
