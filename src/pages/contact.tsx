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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputs.current);
  };

  return (
    <div>
      <h2 className='title'>CONTACT ME</h2>
      <div className='contact-content'>
        <div id='slime' title='Slime from Maplestory made with CSS'>
          <div className='antenna'>∿∿∿</div>
          <div className='eye1'>+</div>
          <div className='eye2'>+</div>
          <div className='mouth'>w</div>
        </div>
        <form className='myForm'>
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
          <span className='submitMessage'>{submitMessage}</span>
          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
