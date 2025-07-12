import { Box, Card } from "@radix-ui/themes";
import type { Product } from "../../model";
import { Container } from "./productCard.style";
import { LazyImage } from "../image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, thumbnail, title, price, images } = product;

  const placeholderSrc = images[0];

  return (
    <Container href={`/product/${id}`}>
      <Box maxWidth="240px">
        <Card>
          <LazyImage
            src={thumbnail}
            placeholderSrc={placeholderSrc}
            alt={`${title} 썸네일`}
            width="100%"
          />
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
