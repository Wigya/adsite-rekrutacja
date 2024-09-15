import clsx from "clsx";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
}

const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-lg px-6 py-3 font-roboto-flex font-semibold",
        className,
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-white text-primary outline outline-1 outline-primary",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
