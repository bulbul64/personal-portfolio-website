import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Button } from './ui/button';
export default function About() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Turning complex ideas into simple, user-friendly interfaces.'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I'm a self-taught Frontend Developer, passionate about building clean and responsive web
        interfaces. I enjoy turning ideas into real-world projects using modern technologies like
        HTML, CSS, JavaScript, React, and Tailwind CSS.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Over the past year, I’ve been learning and practicing by building personal projects. My
        focus is on improving my skills, writing clean code, and creating user-friendly web
        experiences. I’m always eager to learn new technologies and grow as a developer.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
}
