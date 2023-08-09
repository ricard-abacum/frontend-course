import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { api } from "../utils/api";
import { useState } from "react";
import { updateUserInfo } from "../app/vendingMachineSlice";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = async () => {
    try {
      const response = await api.login(username, password);
      dispatch(updateUserInfo(response.data));
      navigate("/vending-machine");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="50%"
      margin="auto"
      gap={2}
      justifyContent="space-between"
    >
      <TextField
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={login}> Login </Button>
    </Box>
  );
};
