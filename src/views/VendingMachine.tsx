import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductGrid } from "../components/Product";
import { VendingMachineMenu } from "../components/VendingMachineMenu";
import { IProductSlot } from "../utils/types";
import { api, simulateRequest } from "../utils/api";

const test_products_payload: IProductSlot[] = [
  {
    id: "2f06eff7-d820-4356-a8f9-cd723b26227e",
    quantity: 3,
    coordinates: [0, 0],
    product: {
      id: "00385fad-ee43-45fe-ac8f-f91ad88f0592",
      name: "Chocolate Bar",
      price: 15.0,
    },
  },
  {
    id: "2f06eff7-d820-4356-a8f9-cd723b26227e",
    quantity: 3,
    coordinates: [1, 1],
    product: {
      id: "00385fad-ee43-45fe-ac8f-f91ad88f0592",
      name: "Chocolate Bar",
      price: 15.0,
    },
  },
  {
    id: "2f06eff7-d820-4356-a8f9-cd723b26227e",
    quantity: 3,
    coordinates: [2, 2],
    product: {
      id: "00385fad-ee43-45fe-ac8f-f91ad88f0592",
      name: "Chocolate Bar",
      price: 15.0,
    },
  },
];

export const VendingMachine = () => {
  const [products, setProducts] = useState<Array<IProductSlot>>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // const response = await simulateRequest(test_products_payload);
        const response = await api.getProducts();
        setProducts(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      display="flex"
      width="100%"
      gap={4}
      p={1}
      justifyContent="space-between"
      sx={{}}
    >
      <Box width="100%">
        <ProductGrid product_list={products} />
      </Box>
      <Box width="100%">
        <VendingMachineMenu />
      </Box>
    </Box>
  );
};
