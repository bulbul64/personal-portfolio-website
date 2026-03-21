import { statsData } from '@/constants';
import {  fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';


export default function Stats() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'
      id='hero'
    >
      {statsData.map((stat, index: number) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className='border border-neutral-700 rounded-xl flex justify-center items-center flex-col py-6'
        >
              <p className='text-4xl font-bold lining-nums'>{stat.number}</p>
              
          <p className='text-neutral-300 capitalize font-bold'>{stat.label}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
