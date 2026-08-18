import { forwardRef, InputHTMLAttributes, useImperativeHandle, useRef, useState } from 'react';

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label, value, placeholder, required, onChange, maxLength, ...props }, ref) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);
    const [count, setCount] = useState(0);

    return (
      <div className='w-11/12 md:w-5/6'>
        <label htmlFor={name} className='font-mono text-xs dark:text-slate-400 text-slate-500'>
          {label}
        </label>
        <textarea
          ref={inputRef}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          onChange={e => {
            setCount(e.target.value.replace(/\r/g, '').length);
            onChange?.(e);
          }}
          className='!w-full'
          {...props}
        />
        {maxLength && (
          <p className={`font-mono text-xs text-right ${count >= maxLength ? 'text-rose-400' : 'dark:text-slate-500 text-slate-400'}`}>
            {count} / {maxLength}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
