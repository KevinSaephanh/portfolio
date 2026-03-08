'use client';

import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/form/Input';
import { TextArea } from '@/components/ui/form/TextArea';
import styles from '@/app/styles/contact.module.scss';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { motion } from 'framer-motion';

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
      inputs.current = { name: '', email: '', message: '' };
      setSubmitSuccess(true);
      setSubmitMessage(message);
    } else {
      setSubmitSuccess(false);
      setSubmitMessage(message);
    }

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center'
    >
      {/* Heading */}
      <div className='text-center mb-6'>
        <h2 className='font-press-start text-lg md:text-xl neon-text mb-3'>
          CONTACT
        </h2>
        <p className='font-mono text-xs md:text-sm dark:text-slate-400 text-slate-500'>
          // ping me anytime
        </p>
      </div>

      {/* Social links */}
      <div className='flex gap-4 md:gap-8 mb-8'>
        <a
          href='https://www.linkedin.com/in/kevin-saephanh'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 font-mono text-xs md:text-sm hover:text-teal-400 transition-colors duration-200 dark:text-slate-300 text-slate-600'
        >
          <BsLinkedin size={16} />
          <span>LinkedIn</span>
        </a>
        <a
          href='https://github.com/KevinSaephanh'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 font-mono text-xs md:text-sm hover:text-teal-400 transition-colors duration-200 dark:text-slate-300 text-slate-600'
        >
          <BsGithub size={16} />
          <span>GitHub</span>
        </a>
        <a
          href='https://www.discord.com/users/360657658270973956'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 font-mono text-xs md:text-sm hover:text-teal-400 transition-colors duration-200 dark:text-slate-300 text-slate-600'
        >
          <BsDiscord size={16} />
          <span>Discord</span>
        </a>
      </div>

      {/* Animated form */}
      <div
        className={`${styles.boxAnimation} relative rounded-lg overflow-hidden mx-auto`}
      >
        <form
          className='bg-slate-100 dark:bg-neutral-900 flex flex-col items-center justify-center rounded-md inset-0.5 absolute z-10'
          onSubmit={handleSubmit}
        >
          <span
            className={`mb-2 font-bold text-sm ${
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
            className='font-press-start text-xs bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 px-6 py-2 mt-4 rounded'
            type='submit'
            disabled={submitDisabled}
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}
