import { Box, Card } from "@radix-ui/themes";
import type { Product } from "../../model";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Box maxWidth="240px">
      <Card>
        <img
          src={product.thumbnail}
          alt={`${product.title} 썸네일`}
          width="100%"
        />
        <div>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      </Card>
    </Box>
  );
};

export default ProductCard;
