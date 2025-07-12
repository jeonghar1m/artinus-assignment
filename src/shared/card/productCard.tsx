import { Box, Card } from "@radix-ui/themes";
import type { Product } from "../../model";
import { Container } from "./productCard.style";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, thumbnail, title, price } = product;

  return (
    <Container href={`/product/${id}`}>
      <Box maxWidth="240px">
        <Card>
          <img src={thumbnail} alt={`${title} 썸네일`} width="100%" />
          <div>
            <h3>{title}</h3>
            <span>${price}</span>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default ProductCard;
