import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-62'
      >
        <SparklesIcon size={15} /> <span>Hi, I build modern web apps</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize md:leading-16 mt-2 max-w-3xl'
      >
        I'm <span className='text-primary'>Bulbul</span>, a Frontend Developer.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>My projects </a>
        </Button>

        <Button variant='outline'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
}
