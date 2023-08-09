import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { api } from "../utils/api";
import { updateBalance } from "../app/vendingMachineSlice";

export const VendingMachineMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.vendingMachine.name);
  const surname = useSelector(
    (state: RootState) => state.vendingMachine.surname
  );
  const resetBalance = async () => {
    try {
      const response = await api.refund();
      dispatch(updateBalance(response.data.balance));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Box
      gap={2}
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="space-between"
    >
      <Box width="100%">
        <Box
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
      </Box>
      <Box width="100%">
        <MoneyMenu />
      </Box>
      <Box width="100%">
        <BalanceBox />
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
          onClick={resetBalance}
        >
          Refund Money
        </Button>
      </Box>
    </Box>
  );
};

export const AddMoneyButton: FC<{ amount: number }> = ({ amount }) => {
  const dispatch = useDispatch();
  const addMoney = async () => {
    try {
      const response = await api.addCredit(amount);
      dispatch(updateBalance(response.data.balance));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Button
      sx={{ border: "2px solid black", borderRadius: "16px" }}
      onClick={addMoney}
    >
      {amount}$
    </Button>
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
        textAlign: "center",
      }}
    >
      <Box>Add Money</Box>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <AddMoneyButton amount={0.1} />
          </Grid>
          <Grid item xs={4}>
            <AddMoneyButton amount={0.2} />
          </Grid>
          <Grid item xs={4}>
            <AddMoneyButton amount={0.5} />
          </Grid>
          <Grid item xs={4}>
            <AddMoneyButton amount={1} />
          </Grid>
          <Grid item xs={4}>
            <AddMoneyButton amount={2} />
          </Grid>
          <Grid item xs={4}>
            <AddMoneyButton amount={5} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const BalanceBox = () => {
  const balance = useSelector(
    (state: RootState) => state.vendingMachine.balance
  );
  console.log(balance);
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
