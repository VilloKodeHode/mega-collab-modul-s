import React from "react";
import Image from "next/image";

interface ImageBoxProps {
  imageURL: string;
  altText?: string;
  width?: number;
  height?: number;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageURL,
  altText = "",
  width = 150,
  height = 150,
}) => {
  return (
    <div className="flex flex-col items-center justify-between overflow-auto p-4 max-w-1/2 gap-8">
      <Image
        src={imageURL}
        className="h-12 w-16"
        alt={altText}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageBox;
