import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Img } from "./lazyImage.style";
import { Skeleton } from "@radix-ui/themes";

interface LazyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  placeholderSrc?: string;
}

const IMG_SIZE = "216px";

const LazyImage = ({ placeholderSrc, src = "", ...props }: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLazy, setIsLazy] = useState(true);

  const { ref, inView } = useInView();

  const customClassName = isLazy ? "loading" : "loaded";

  useEffect(() => {
    if (inView && imgSrc === placeholderSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
        setImgSrc(src);
        setIsLazy(false);
      };
      img.onerror = () => {
        setImgSrc("");
        setIsLazy(false);
      };
    }
  }, [src, inView, imgSrc, placeholderSrc]);

  return (
    <Container ref={ref}>
      {isLoading ? (
        <Skeleton width={IMG_SIZE} height={IMG_SIZE} />
      ) : (
        <Img
          {...props}
          className={customClassName}
          src={imgSrc}
          loading="lazy"
        />
      )}
    </Container>
  );
};

export default LazyImage;
