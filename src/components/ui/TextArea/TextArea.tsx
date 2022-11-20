import React from 'react';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label, errors, touched, required, ...props }, ref) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <>
        <textarea
          // onChange={handleInput}
          {...props}
        />
      </>
    );
  }
);
