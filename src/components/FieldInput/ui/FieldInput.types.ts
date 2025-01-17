import React, { ReactNode } from 'react'

interface InputProps {
	label: string
	handleClear?: () => void
	children?: ReactNode
	isShowClear?: boolean
}

export type ComponentProps = InputProps & React.InputHTMLAttributes<HTMLInputElement>
