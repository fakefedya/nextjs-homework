'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.06 },
	},
}

const item = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0 },
}

export function MotionWrapper({ children }: { children: ReactNode }) {
	return (
		<motion.div initial='hidden' animate='visible' variants={container}>
			{children}
		</motion.div>
	)
}

export const MotionItem = motion.div
export const itemVariants = item
