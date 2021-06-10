import { useEffect, useState } from "react";
import defaultPlaceholder from "./../../images/placeholder.jpg";

interface IImage {
  src: string;
  name: string;
  placeholder?: string;
}
const Image = ({ src, placeholder = defaultPlaceholder }: IImage) => {
  const [imageIsReady, setImageIsReady] = useState(false);

  useEffect(() => {
    const img = new (window as any).Image();
    img.src = src;
    img.onload = () => setImageIsReady(true);
  }, [src]);

  return (
    <div
      style={{
        background: imageIsReady ? "transparent" : `url(${placeholder})`,
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100%",
      }}
    >
      {imageIsReady ? <img src={src} alt={`product`} /> : ""}
    </div>
  );
};

export default Image;
