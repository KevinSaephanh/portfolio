import Image from 'next/image';

export const About = () => {
  return (
    <>
      <section>
        <h3 className='section-title'>About</h3>
        <Image
          src='/assets/me.jpg'
          alt='me'
          height={300}
          width={300}
          className='themed-border mb-4 h-64 md:h-80 w-5/6 md:w-80'
        />
        <h3 className='themed-text font-semibold text-2xl md:text-3xl'>
          Kevin Saephanh
        </h3>
        <span>Software Engineer</span>
        <p>Simple intro</p>
        <ul>SKILLS</ul>
      </section>
    </>
  );
};
