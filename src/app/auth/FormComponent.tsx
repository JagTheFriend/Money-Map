'use client'

import { SignIn, SignUp } from '@clerk/nextjs'
import { motion } from 'framer-motion'

export default function FormComponent({ type }: { type: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="flex justify-center my-4"
    >
      {type === 'login' ? (
        <>
          <SignIn routing="hash" />
        </>
      ) : (
        <>
          <SignUp routing="hash" />
        </>
      )}
    </motion.section>
  )
}
