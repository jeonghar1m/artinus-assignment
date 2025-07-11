import { Grid } from "@radix-ui/themes";
import useGetProductList from "../api/useGetProductList";
import { ProductCard } from "../shared/card";

const Home = () => {
  const { products } = useGetProductList({});
  console.log(products);
  return (
    <Grid columns="3" gap="100px" width="auto">
      {products?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Home;
