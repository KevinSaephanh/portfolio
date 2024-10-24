import Image from 'next/image';

export const About = () => {
  const yearsOfExp = new Date().getFullYear() - 2020;

  return (
    <>
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
      <p>
        I have {yearsOfExp} years of experience in both enterprise and startup
        work environments. I began my career in full stack development and
        continue to do so, but my expertise and preference lean towards backend
        development. I enjoy developing microservices and working on distributed
        systems to build scalable applications.
      </p>
    </>
  );
};
