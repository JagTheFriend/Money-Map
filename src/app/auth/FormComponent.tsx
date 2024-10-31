'use client'

import { SignIn, SignUp } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Head from 'next/head'

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
          <Head>
            <title>Login to Money Map</title>
          </Head>
          <SignIn routing="hash" />
        </>
      ) : (
        <>
          <Head>
            <title>Sign In/Register for Money Map</title>
          </Head>
          <SignUp routing="hash" />
        </>
      )}
    </motion.section>
  )
}
