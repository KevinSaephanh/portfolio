import React from 'react';
import { NextPage } from 'next';
import { Input } from '../components/ui/Input/Input';
import { TextArea } from '../components/ui/TextArea/TextArea';

const Contact: NextPage = () => {
  const inputs = React.useRef({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    inputs.current[name] = value;
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
      setSubmitMessage('Message sent successfully 🦖');
    } else {
      setSubmitMessage('Message could not be sent');
    }

    setTimeout(() => setSubmitMessage(''), 2000);
  };

  const disabled = () => {
    const { name, email, message } = inputs.current;
    return !!submitMessage || !name || !email || !message;
  };

  return (
    <div>
      <h2 className='text-center text-lg mb-4 game-font'>CONTACT ME</h2>
      <span className='text-center mb-2'>{submitMessage}</span>
      <form className='flex flex-col items-center justify-between' onSubmit={handleSubmit}>
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
          placeholder='Speak your mind 😊'
          label='Message'
          minLength={5}
          maxLength={300}
          onChange={handleInput}
          required
        />
        <button
          className='text-lg font-bold border-4 px-6 py-2 rounded'
          type='submit'
          disabled={disabled()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
