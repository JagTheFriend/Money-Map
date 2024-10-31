'use client'

import {
  IconAccessPoint,
  IconAdjustmentsBolt,
  IconChartBar,
  IconChartDots,
  IconChartScatter,
  IconHeartHandshake,
  IconNotebook,
  IconRouteAltLeft,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { cn } from '~/lib/utils'

export default function Features() {
  const features = [
    {
      title: 'Real-Time Expense Tracking',
      description:
        'Instantly log and categorize your expenses to stay on top of your spending, wherever you are.',
      icon: <IconAccessPoint />,
    },
    {
      title: 'Spending Analytics Dashboard',
      description:
        'Visualize your spending trends with charts and graphs to gain insights into your financial habits.',
      icon: <IconChartBar />,
    },
    {
      title: 'Expense Breakdown by Category',
      description:
        'Get detailed reports of your spending, organized by categories such as food, transportation, and entertainment.',
      icon: <IconChartScatter />,
    },
    {
      title: 'Daily/Weekly Expense Summary',
      description:
        'Get automatic daily or weekly summaries of your spending to stay informed without deep analysis.',
      icon: <IconChartDots />,
    },
    {
      title: 'Export and Share Reports',
      description:
        'Easily export your financial reports in PDF or CSV format and share them with others for further analysis or budgeting.',
      icon: <IconRouteAltLeft />,
    },
    {
      title: 'In-App Expense Notes',
      description:
        'Add notes or photos to your transactions for better context and detail, like receipt images or reminders.',
      icon: <IconNotebook />,
    },
    {
      title: 'Expense Search Function',
      description:
        'Easily search through past expenses by keywords, dates, or categories to find specific transactions.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Basic Monthly Spending Report',
      description:
        'View a simple monthly report showing total expenses, key categories, and remaining budget at a glance.',
      icon: <IconHeartHandshake />,
    },
  ]
  return (
    <section
      id="learn-more-section"
      className="relative bg-cover bg-center bg-no-repeat bg-[url('/analytic-image.jpg')]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto inset-0 bg-gray-900/75 sm:bg-transparent from-gray-900/95 to-gray-900/25 bg-gradient-to-t">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Feature {...feature} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-900 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
