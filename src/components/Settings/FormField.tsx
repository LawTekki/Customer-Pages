import React from "react";

interface FormFieldProps {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  className = "",
}) => {
  return (
    <div className={`min-w-60 flex-1 shrink basis-[0%] ${className}`}>
      <div className="text-[#1a011e]">{label}</div>
      {children}
    </div>
  );
};
