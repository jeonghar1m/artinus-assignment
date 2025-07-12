import { Grid, type GridProps } from "@radix-ui/themes";

type ProductListGridProps = Pick<GridProps, "children">;

const ProductListGrid = ({ children }: ProductListGridProps) => {
  return (
    <Grid columns="3" gap="calc(100px / 3)" width="auto">
      {children}
    </Grid>
  );
};

export default ProductListGrid;
