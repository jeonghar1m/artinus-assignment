import { Badge, Flex } from "@radix-ui/themes";
import type { ProductDetailResponse } from "../../../model";

type ProductTagsProps = Pick<ProductDetailResponse, "tags">;

const ProductTags = ({ tags }: ProductTagsProps) => {
  return (
    <Flex gap="4px">
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </Flex>
  );
};

export default ProductTags;
