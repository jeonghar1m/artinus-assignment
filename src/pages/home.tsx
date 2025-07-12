import { Grid } from "@radix-ui/themes";
import useGetProductList from "../api/useGetProductList";
import { ProductCard } from "../shared/card";
import { useMemo } from "react";
import { IntersectionObserver } from "../shared/ui";
import { DefaultTemplate } from "../shared/template";

const Home = () => {
  const { data, fetchNextPage } = useGetProductList({});

  const products = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) ?? [];
  }, [data]);

  return (
    <DefaultTemplate title="상품 리스트">
      <Grid columns="3" gap="100px" width="auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <IntersectionObserver onIntersect={fetchNextPage} />
    </DefaultTemplate>
  );
};

export default Home;
