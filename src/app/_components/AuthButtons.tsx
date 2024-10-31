'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AuthButtons() {
  return (
    <section className="my-4 flex flex-row gap-4 justify-center max-w-screen overflow-hidden">
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: [null, '0%'] }}
        transition={{ duration: 1 }}
        className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center"
      >
        <Link href="#">Get Started</Link>
      </motion.div>
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: [null, '0%'] }}
        transition={{ duration: 1 }}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <Link href="#">Login</Link>
      </motion.div>
    </section>
  )
}
