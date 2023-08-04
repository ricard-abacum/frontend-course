import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Products } from "../components/Product";
import { Box } from "@mui/material";
import { VendingMachineMenu } from "../components/VendingMachineMenu";
import { IUser } from "../components/User";

interface IVendingMachineProps {
  user: IUser;
}

export const VendingMachine = () => {
  return (
    <Box
      gap={2}
      m={1}
      display="flex"
      width="100%"
      justifyContent="space-between"
      sx={{
        boxSizing: "content-box",
      }}
    >
      <Box width="100%">
        <Products />
      </Box>
      <Box width="100%">
        <VendingMachineMenu
          user_id="user_id"
          name="Name"
          surname="Surname"
          money={100.0}
        />
      </Box>
    </Box>
  );
};
