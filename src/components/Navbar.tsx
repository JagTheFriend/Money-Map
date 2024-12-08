'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { toast } from 'sonner'
import { addNewTransaction } from '~/server/post-actions'

function AddTransactionButton() {
  return (
    <>
      <li>
        <button
          className="rounded-lg"
          onClick={() =>
            (
              document.getElementById(
                'add_transaction_modal',
              ) as HTMLDialogElement
            ).showModal()
          }
        >
          <span className="border-b border-b-green-500">Add Transaction</span>
        </button>
      </li>
      <dialog id="add_transaction_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <IconX />
            </button>
          </form>

          <h3 className="font-bold text-lg mb-4">Add Transaction</h3>
          <form
            className="flex gap-4 flex-col"
            action={async (formData: FormData) => {
              const returnData = await addNewTransaction({
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                amount: formData.get('amount') as string,
                purchaseDate: new Date(formData.get('date') as string),
              })
              if (!returnData?.data) {
                toast.error('Failed to add transaction')
              } else {
                toast.success('Transaction added successfully')
              }
            }}
          >
            <input
              required
              name="title"
              type="text"
              placeholder="Enter Title"
              className="grow input input-bordered w-full max-w-xs"
            />
            <input
              required
              name="description"
              type="text"
              placeholder="Enter Description"
              className="grow input input-bordered w-full max-w-xs"
            />
            <div className="flex flex-row gap-4">
              <input
                required
                name="amount"
                type="number"
                placeholder="Enter Amount"
                className="grow input input-bordered w-full max-w-xs"
              />
              <input
                required
                name="date"
                type="date"
                placeholder="Pick a date"
                className="grow input input-bordered w-full max-w-xs"
              />
            </div>
            <button
              className="btn btn-ghost btn-outline rounded-lg"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

function NavbarLinks() {
  return (
    <>
      <SignedOut>
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
      </SignedOut>
      <SignedIn>
        <AddTransactionButton />
        <li>
          <Link className="rounded-lg" href="/about">
            <span className="border-b border-b-sky-500">See History</span>
          </Link>
        </li>
        <li>
          <Link className="rounded-lg" href="/contact">
            <span className="border-b border-b-rose-500">Contact</span>
          </Link>
        </li>
      </SignedIn>
    </>
  )
}

function AuthButton() {
  return (
    <>
      <SignedOut>
        <Link className="btn btn-ghost rounded-lg" href="/auth?type=login">
          <span className="border-b border-b-purple-500">Sign In</span>
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default function Navbar() {
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
          <AuthButton />
        </div>
      </div>
    </motion.section>
  )
}
