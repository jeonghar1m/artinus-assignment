import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Img } from "./lazyImage.style";
import { Skeleton } from "@radix-ui/themes";

interface LazyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  placeholderSrc?: string;
  width?: string;
  height?: string;
}

const DEFAULT_IMG_SIZE = "216px";

const LazyImage = ({
  placeholderSrc,
  src = "",
  width = DEFAULT_IMG_SIZE,
  height = DEFAULT_IMG_SIZE,
  ...props
}: LazyImageProps) => {
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
    <Container width={width} height={height} ref={ref}>
      {isLoading ? (
        <Skeleton width={width} height={height} />
      ) : (
        <Img
          {...props}
          className={customClassName}
          src={imgSrc}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </Container>
  );
};

export default LazyImage;
