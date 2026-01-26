import { ComponentPropsWithRef } from 'react'
import { FieldError } from 'react-hook-form'
import cn from 'classnames'

import styles from './Textarea.module.css'

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
	isValid?: boolean
	error?: FieldError
}

export function Textarea({ className, error, ...props }: TextareaProps) {
	return (
		<div className={styles.textareaWrapper}>
			<textarea
				className={cn(className, styles.textarea, {
					[styles.error]: error,
				})}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	)
}
