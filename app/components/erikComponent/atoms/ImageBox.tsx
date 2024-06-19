import React from "react";
import Image from "next/image";

interface ImageBoxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImageBox;
