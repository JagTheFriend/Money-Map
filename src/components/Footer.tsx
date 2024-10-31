'use client'

import { IconBrandGithub, IconMail } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="footer bg-base-200 text-neutral-content items-center p-4"
    >
      <div className="flex flex-row w-full justify-between">
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="https://github.com/JagTheFriend" target="_blank">
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link href="mailto:JagTheFriend12@gmail.com">
            <IconMail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
