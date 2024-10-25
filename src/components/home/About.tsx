import Image from 'next/image';

export const About = () => {
  const getYearsOfExp = () => {
    return new Date().getFullYear() - 2020;
  };

  return (
    <div className='flex-col md:flex-center md:flex-row fading-border mb-4 md:mb-6'>
      <Image
        src='/assets/me.jpg'
        alt='me'
        height={300}
        width={300}
        className='mx-auto md:mx-0 themed-border mb-4 lg:h-72'
      />
      <section className='flex flex-col space-y-2 md:space-y-4 md:mt-0 md:mb-auto md:pl-8'>
        <h3 className='font-press-start font-bold responsive-text text-2xl md:text-3xl'>
          Kevin Saephanh
        </h3>
        <span className='font-press-start responsive-text md:text-xl'>
          Software Engineer
        </span>
        <p className='2xl:w-4/5 md:leading-5'>
          I have {getYearsOfExp()} years of experience in both enterprise and
          startup work environments. I kicked off my career in full stack
          development and continue to do so, but my expertise and preference
          lean more towards backend development. I really enjoy building
          microservices and working on distributed systems to develop scalable
          applications. Over the years, I've tackled some cool projects like
          large-scale loan and contract investigations, batch processing systems
          for corporate investments, and much more!
        </p>
      </section>
    </div>
  );
};
