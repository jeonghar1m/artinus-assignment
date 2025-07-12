import { useInView } from "react-intersection-observer";
import { Container } from "./intersectionObserver.style";
import { useEffect } from "react";

interface IntersectionObserverProps {
  onIntersect: () => void;
}

const IntersectionObserver = ({ onIntersect }: IntersectionObserverProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onIntersect();
    }
  }, [inView, onIntersect]);

  return <Container ref={ref} />;
};

export default IntersectionObserver;
