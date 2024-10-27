import {
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

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
