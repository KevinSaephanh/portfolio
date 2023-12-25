'use client';

import React from 'react';
import { Spectral } from 'next/font/google';
import { Input } from '@/components/Form/Input';
import { TextArea } from '@/components/Form/TextArea';

const spectral = Spectral({ weight: '600', subsets: ['cyrillic'] });

export default function Page() {
  const inputs = React.useRef<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
  });
  const [submitDisabled, setSubmitDisabled] = React.useState(true);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: key, value } = e.target;
    inputs.current[key] = value;

    const { name, email, message } = inputs.current;
    setSubmitDisabled(!name || !email || !message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs.current),
    });

    if (res.status === 200) {
      inputs.current = {
        name: '',
        email: '',
        message: '',
      };
      setSubmitMessage('Message sent successfully');
    } else {
      setSubmitMessage('Message could not be sent');
    }

    setTimeout(() => setSubmitMessage(''), 2000);
  };

  return (
    <>
      <h2 className={`${spectral.className} text-center text-2xl mb-6`}>
        CONTACT
      </h2>
      <div className='box relative rounded-lg overflow-hidden mx-auto'>
        <form
          className='contact-form flex flex-col items-center justify-center rounded-md inset-0.5 absolute z-10'
          onSubmit={handleSubmit}
        >
          <span className='mb-2 font-bold text-red-600 dark:text-red-700'>
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
