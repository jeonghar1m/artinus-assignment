import { Grid } from "@radix-ui/themes";
import useGetProductList from "../api/useGetProductList";
import { ProductCard } from "../shared/card";
import { useMemo } from "react";
import { IntersectionObserver } from "../shared/ui";

const Home = () => {
  const { data, fetchNextPage } = useGetProductList({});

  const products = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) ?? [];
  }, [data]);

  return (
    <>
      <Grid columns="3" gap="100px" width="auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <IntersectionObserver onIntersect={fetchNextPage} />
    </>
  );
};

export default Home;
