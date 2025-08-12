import React from 'react'

export const CHECKBOX_VARIANTS = {
	light: 'light',
}

export type checkBoxVariant = keyof typeof CHECKBOX_VARIANTS

type checkBoxSizes = 'medium'

interface InputProps {
	size_s?: checkBoxSizes
	size_m?: checkBoxSizes
	size_l?: checkBoxSizes
	error?: boolean
	variant?: checkBoxVariant
	additionalClass?: string
}

export type ComponentProps = InputProps & React.InputHTMLAttributes<HTMLInputElement>
