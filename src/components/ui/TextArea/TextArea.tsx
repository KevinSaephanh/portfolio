import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
