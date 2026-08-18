import { forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, value, placeholder, required, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <div className='w-11/12 md:w-5/6'>
        <label htmlFor={name} className='font-mono text-xs dark:text-slate-400 text-slate-500'>
          {label}
        </label>
        <input
          ref={inputRef}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className='!w-full'
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
