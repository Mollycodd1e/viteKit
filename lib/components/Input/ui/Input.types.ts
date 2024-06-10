import React, { ReactNode } from 'react'

type inputWidth = 'auto' | 'full'

export const INPUT_VARIANTS = {
	light: 'light',
	dark: 'dark',
}

export type inputVariant = keyof typeof INPUT_VARIANTS

type inputSizes = 'large' | 'medium' | 'small' | 'tiny'

interface InputProps {
	size_s?: inputSizes
	size_m?: inputSizes
	size_l?: inputSizes
	pre?: ReactNode
	error?: boolean
	post?: ReactNode
	children?: ReactNode
	variant?: inputVariant
	width?: inputWidth
	additionalClass?: string
}

export type ComponentProps = InputProps & React.InputHTMLAttributes<HTMLInputElement>
