'use client'

import { motion } from 'framer-motion'
import { TypewriterEffectSmooth } from '~/components/ui/typewriter-effect'

const words = [
  {
    text: 'Contact',
  },
  {
    text: 'Developer',
    className: 'text-pink-500 dark:text-pink-500',
  },
]

export default function TypewriterHeading() {
  return (
    <section>
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
