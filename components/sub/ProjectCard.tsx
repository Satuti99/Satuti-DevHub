import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {/* Image Container with fixed aspect ratio */}
      <div className="relative w-full h-[340px] rounded-t-lg overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover" // Ensures the image covers the container without distortion
          className="object-center" // Ensure the image is centered within the container
        />
      </div>

      {/* Text Container */}
      <div className="relative p-4 bg-[#030014] rounded-b-lg">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
