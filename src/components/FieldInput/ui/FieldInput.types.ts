import React, { ReactNode } from 'react'

interface InputProps {
	label: string
	children?: ReactNode
}

export type ComponentProps = InputProps & React.InputHTMLAttributes<HTMLInputElement>
