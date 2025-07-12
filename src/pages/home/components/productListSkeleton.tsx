import { Skeleton } from "@radix-ui/themes";
import ProductListGrid from "./productListGrid";

const ProductListSkeleton = () => {
  return (
    <ProductListGrid>
      {Array.from({ length: 9 }).map((_, index) => (
        <Skeleton key={index} width="240px" height="336px" />
      ))}
    </ProductListGrid>
  );
};

export default ProductListSkeleton;
