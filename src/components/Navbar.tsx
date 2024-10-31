'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function NavbarLinks() {
  return (
    <>
      <li>
        <Link className="rounded-lg" href="/">
          <span className="border-b border-b-green-500">Home</span>
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" href="/about">
          <span className="border-b border-b-sky-500">About Us</span>
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" href="/contact">
          <span className="border-b border-b-rose-500">Contact</span>
        </Link>
      </li>
    </>
  )
}

export default function NavbarUnauthorized() {
  const { push } = useRouter()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="sticky top-0 z-50 opacity-90"
    >
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavbarLinks />
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl rounded-lg" href="/">
            Money Map
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost rounded-lg"
            onClick={() => {
              push('/auth?type=sign-in')
            }}
          >
            <span className="border-b border-b-purple-500">Sign In</span>
          </button>
        </div>
      </div>
    </motion.section>
  )
}
