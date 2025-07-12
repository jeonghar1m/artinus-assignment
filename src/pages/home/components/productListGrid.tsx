import { Grid, type GridProps } from "@radix-ui/themes";
import { useDeviceSelector } from "../../../hooks/useDeviceSelector";
import { useMemo } from "react";

type ProductListGridProps = Pick<GridProps, "children">;

const ProductListGrid = ({ children }: ProductListGridProps) => {
  const { isMobile, isLaptop } = useDeviceSelector();

  const columns = useMemo(() => {
    if (isMobile) return "2";
    if (isLaptop) return "3";
    return "4";
  }, [isMobile, isLaptop]);

  return (
    <Grid columns={columns} gap={`calc(100px / ${columns})`} width="auto">
      {children}
    </Grid>
  );
};

export default ProductListGrid;
