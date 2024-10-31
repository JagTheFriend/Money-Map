'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function HeaderText() {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="text-3xl font-extrabold text-white sm:text-5xl"
    >
      Money Map
      <strong className="block font-extrabold text-rose-500">
        Track Smarter
      </strong>
    </motion.h1>
  )
}

function DescriptionText() {
  return (
    <motion.p
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="mt-4 max-w-lg text-white sm:text-xl/relaxed overflow-hidden whitespace-nowrap"
    >
      Track every penny with precision. <br />
      Unlock insights to spend smarter.
    </motion.p>
  )
}

function Links() {
  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: [null, '40%', 0] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="mt-8 flex flex-wrap gap-4 text-center"
      >
        <motion.a
          href="/auth"
          className="bg-rose-500 block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          initial={{ background: '#e11d48' }}
          whileInView={{ background: ['#e11d48', '#fb7185', '#e11d48'] }}
          transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
        >
          Get Started
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: [null, '-40%', 0] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="mt-8 flex flex-wrap gap-4 text-center"
      >
        <Link
          href="/about"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </motion.div>
    </>
  )
}

export default function IntroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center md:block bg-[url('/analytic-image.jpg')] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent from-gray-900/95 to-gray-900/25 bg-gradient-to-r"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <HeaderText />
          <DescriptionText />
          <Links />
        </div>
      </div>
    </motion.section>
  )
}
