'use client'

import { motion } from 'framer-motion'
import { WobbleCard } from '~/components/ui/wobble-card'

export default function WobbleCardComponent() {
  return (
    <section className="px-4 overflow-hidden pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <motion.span
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-pink-800 min-h-[310px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Real-Time Expense Tracking
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Instantly log and categorize your expenses as they happen,
                ensuring you always have an up-to-date view of your spending.
              </p>
            </div>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[340px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Spending Analytics Dashboard
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Access a dynamic dashboard that visualizes your spending trends
              with charts and graphs, providing clear insights into where your
              money is going.
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[340px] bg-blue-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Expense Breakdown by Category
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Organize your expenses into custom categories like food,
              entertainment, and transportation, allowing you to see exactly
              where you're spending the most.
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[340px] bg-green-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Daily/Weekly Expense Summary
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Receive automatic summaries of your expenses either daily or
              weekly, giving you a quick overview without needing to dig into
              detailed reports.
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[340px] bg-violet-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Export and Share Reports
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Easily export your expense reports in formats like PDF or CSV and
              share them with others or for personal record-keeping.{' '}
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[340px] bg-amber-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              In-App Expense Notes
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Add context to your transactions by attaching notes or photos,
              like receipt images or additional details, for future reference.
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[340px] bg-cyan-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Expense Search Function
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Quickly search for past expenses by keyword, date, or category,
              making it easy to find specific transactions in seconds.
            </p>
          </WobbleCard>
        </motion.span>
        <motion.span
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[340px] bg-yellow-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Basic Monthly Spending Report
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              View a simple monthly report summarizing your total spending, key
              categories, and remaining budget, helping you track your progress
              at a glance.
            </p>
          </WobbleCard>
        </motion.span>
      </div>
    </section>
  )
}
