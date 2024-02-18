"use client";

import { useRouter } from "next/navigation";

interface loginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
const LoginButton: React.FC<loginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const rounter = useRouter();
  const onClick = () => {
    rounter.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
