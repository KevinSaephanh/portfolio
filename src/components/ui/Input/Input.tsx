import React from 'react';

type TextAreaProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const Input = React.forwardRef<HTMLInputElement, TextAreaProps>(
  ({ name, label, errors, touched, required, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <>
        <input
          name="message"
          title="Message"
          minLength={1}
          maxLength={300}
          // onChange={handleInput}
          {...props}
        />
      </>
    );
  }
);
