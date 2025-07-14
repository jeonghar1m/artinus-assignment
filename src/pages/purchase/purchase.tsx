import { Button, Flex } from "@radix-ui/themes";
import { DefaultTemplate } from "../../shared/template";
import { useCartStore } from "../../store/cart";
import { CartItem } from "./components/cartItem";
import PurchasePrice from "./components/purchasePrice";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const { cart } = useCartStore();

  const navigate = useNavigate();

  const handlePurchase = () => {
    const confirm = window.confirm("구매하시겠습니까?");
    if (confirm) {
      navigate("/purchase/pending", { state: { isFromPurchase: true } });
    }
  };

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <DefaultTemplate title="구매하기" onClickPrev={onClickPrev}>
      {!cart.length ? (
        <>장바구니에 담긴 상품이 없습니다.</>
      ) : (
        <Flex direction="column" gap="100px">
          {cart.map((product) => (
            <Flex key={product.id} direction="column" gap="20px">
              <CartItem product={product} />
            </Flex>
          ))}
          <PurchasePrice />
          <Button onClick={handlePurchase}>구매하기</Button>
        </Flex>
      )}
    </DefaultTemplate>
  );
};

export default Purchase;
