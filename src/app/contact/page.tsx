'use client';

import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { Spectral } from 'next/font/google';
import { Input } from '@/components/ui/form/Input';
import { TextArea } from '@/components/ui/form/TextArea';
import styles from '@/app/styles/contact.module.scss';

const spectral = Spectral({ weight: '600', subsets: ['cyrillic'] });

export default function Page() {
  const inputs = useRef<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: key, value } = e.target;
    inputs.current[key] = value;

    const { name, email, message } = inputs.current;
    setSubmitDisabled(!name || !email || !message);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs.current),
    });

    const { status, message } = await res.json();
    if (status === 200) {
      inputs.current = {
        name: '',
        email: '',
        message: '',
      };
      setSubmitSuccess(true);
      setSubmitMessage(message);
    } else {
      setSubmitSuccess(false);
      setSubmitMessage(message);
    }

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <>
      <h2 className={`${spectral.className} text-center text-2xl mb-6`}>
        CONTACT
      </h2>
      <div
        className={`${styles.boxAnimation} relative rounded-lg overflow-hidden mx-auto`}
      >
        <form
          className='bg-slate-100 dark:bg-neutral-900 flex flex-col items-center justify-center rounded-md inset-0.5 absolute z-10'
          onSubmit={handleSubmit}
        >
          <span
            className={`mb-2 font-bold ${
              submitSuccess ? 'success-text' : 'error-text'
            }`}
          >
            {submitMessage}
          </span>
          <Input
            type='text'
            name='name'
            placeholder='Name'
            label='Name'
            minLength={3}
            maxLength={100}
            onChange={handleInput}
            required
          />
          <Input
            type='email'
            name='email'
            placeholder='Email'
            label='Email'
            minLength={7}
            maxLength={100}
            onChange={handleInput}
            required
          />
          <TextArea
            type='text'
            name='message'
            placeholder='Message'
            label='Message'
            minLength={5}
            maxLength={300}
            onChange={handleInput}
            required
          />
          <button
            className='text-lg font-bold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 px-6 py-2 mt-4 rounded'
            type='submit'
            disabled={submitDisabled}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
