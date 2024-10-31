'use client'

import { motion } from 'framer-motion'
import { TypewriterEffectSmooth } from '~/components/ui/typewriter-effect'

const words = [
  {
    text: 'About',
  },
  {
    text: 'Money Map.',
    className: 'text-blue-500 dark:text-blue-500',
  },
]

export default function TypewriterHeading() {
  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0.1, 0.2, 0.3, 0.4, 1],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center text-xl"
      >
        <TypewriterEffectSmooth
          words={words}
          className="border-b-2 border-violet-500"
        />
      </motion.div>
    </section>
  )
}
