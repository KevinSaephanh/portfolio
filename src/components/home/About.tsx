import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  const getYearsOfExp = () => {
    return new Date().getFullYear() - 2020; 
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 md:mt-16 fading-border pb-8'
    >
      {/* Profile Pic */}
      <motion.div variants={fadeIn} transition={{ delay: 0.1 }} className='md:col-span-4 bento-card flex-center flex-col p-6'>
        <div className="profile-image-container mb-4">
           <Image
            src='/assets/me.jpeg'
            alt='Kevin Saephanh'
            height={300}
            width={300}
            priority
            className='themed-border rounded-xl transition-transform duration-500 hover:scale-105'
          />
        </div>
        <h3 className='font-press-start text-xl highlight'>Kevin Saephanh</h3>
      </motion.div>

      {/* Main Bio */}
      <motion.div variants={fadeIn} transition={{ delay: 0.2 }} className='md:col-span-8 bento-card p-8 flex flex-col justify-center'>
        <span className='font-press-start text-lg mb-4'>Software Engineer</span>
        <p className='text-lg leading-relaxed font-normal'>
          Senior Software Engineer with <span className="highlight">{getYearsOfExp()} years of experience</span> specializing in <span className="highlight">architecting and optimizing high-throughput distributed systems</span>. I've had the opportunity to work in the high-stakes environment of <span className="highlight">fintech</span> as well as the fast-paced environment of an <span className="highlight">edtech startup</span>. 
          While I primarily focus on building and scaling backend systems, I have extensive full stack development experience in an enterprise setting, enabling quick adaptation with a diverse skillset.
        </p>
      </motion.div>

      {/* Exp Tile */}
      <motion.div variants={fadeIn} transition={{ delay: 0.3 }} className='md:col-span-4 bento-card p-6 flex-center flex-col'>
        <span className='text-4xl font-bold highlight'>{getYearsOfExp()}+</span>
        <span className='text-sm uppercase tracking-widest font-mono'>Years Experience</span>
      </motion.div>

      {/* Current Role Tile */}
      <motion.div variants={fadeIn} transition={{ delay: 0.4 }} className='md:col-span-8 bento-card p-6 flex items-center px-10'>
        <span className='font-mono text-cyan-400 text-left leading-relaxed'>
          {`// Senior SWE @ Capital One`} <br/>
        </span>
      </motion.div>
    </motion.div>
  );
};