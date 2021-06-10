import { useEffect, useState } from "react";
import defaultPlaceholder from "./../../assets/images/placeholder.jpg";
import Container from "../Container";
import { IImage } from "../../types";

const Image = ({
  src,
  alt,
  placeholder = defaultPlaceholder,
  ...props
}: IImage) => {
  const [imageIsReady, setImageIsReady] = useState(false);

  useEffect(() => {
    const img = new (window as any).Image();
    img.src = src;
    img.onload = () => setImageIsReady(true);
  }, [src]);

  return (
    <Container isReady={imageIsReady} bgImage={placeholder}>
      {imageIsReady ? <img src={src} alt={alt} {...props} /> : ""}
    </Container>
  );
};

export default Image;
