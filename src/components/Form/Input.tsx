import React from 'react';

type TextAreaProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const Input = React.forwardRef<HTMLInputElement, TextAreaProps>(
  (
    {
      name,
      label,
      value,
      placeholder,
      errors,
      touched,
      required,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <>
        <input
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </>
    );
  }
);
