import React from 'react';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label, value, placeholder, errors, touched, required, onChange, ...props }, ref) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <>
        <textarea
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
