import React, { ReactNode } from 'react'

type textAreaWidth = 'auto' | 'full'


interface TextAreaProps {
    error?: boolean
    children?: ReactNode
    width?: textAreaWidth
    additionalClass?: string
}

export type ComponentProps = TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
