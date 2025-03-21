interface ButtonProps {
  name: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, color, textColor }) => {
  return (
    <button
      className={`px-4 py-2 rounded-[15px] ${color} ${textColor} border cursor-pointer text-sm`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
