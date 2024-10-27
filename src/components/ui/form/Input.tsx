import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

type TextAreaProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, TextAreaProps>(
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
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

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
