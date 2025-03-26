interface ButtonProps {
  name: string | React.ReactNode;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ name, color, textColor, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={onClick ? "button" : "submit"}
      disabled={disabled}
      onClick={onClick}
      className={`${color} ${textColor} rounded-md py-2 px-4 transition-all duration-200 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
