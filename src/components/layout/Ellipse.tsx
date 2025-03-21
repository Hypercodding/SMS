// import Image from "next/image";

interface EllipseProps {
  className?: string;
}

const Ellipse = ({ className = "" }: EllipseProps) => {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        filter: "blur(40px)",
        opacity: 0.5,
      }}
    />
  );
};

export default Ellipse;
