import { useParams } from "react-router-dom";
import useGetProduct from "../api/useGetProduct";

const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { data } = useGetProduct({ id });

  console.log(data);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
