import { Grid } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface ProductListGridProps {
  children: ReactNode;
}

const ProductListGrid = ({ children }: ProductListGridProps) => {
  return (
    <Grid columns="3" gap="calc(100px / 3)" width="auto">
      {children}
    </Grid>
  );
};

export default ProductListGrid;
