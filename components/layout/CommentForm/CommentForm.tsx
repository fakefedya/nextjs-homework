'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/ui/Input/Input'
import { Textarea } from '@/components/ui/Textarea/Textarea'

import styles from './CommentForm.module.css'

interface CommentFormValues {
	name: string
	comment: string
}

interface CommentFormProps {
	postId: number
}

export function CommentForm({ postId }: CommentFormProps) {
	const formId = useId()
	const nameId = `${formId}-name`
	const commentId = `${formId}-comment`
	const nameErrorId = `${formId}-name-error`
	const commentErrorId = `${formId}-comment-error`

	const [status, setStatus] = useState<'idle' | 'success'>('idle')

	const nameRef = useRef<HTMLInputElement | null>(null)
	const commentRef = useRef<HTMLTextAreaElement | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<CommentFormValues>({
		mode: 'onSubmit',
		shouldFocusError: true,
	})

	// фокус на первое поле с ошибкой (надёжнее, чем надеяться на shouldFocusError)
	useEffect(() => {
		if (errors.name) nameRef.current?.focus()
		else if (errors.comment) commentRef.current?.focus()
	}, [errors])

	const onSubmit = async (values: CommentFormValues) => {
		setStatus('idle')
		// тут будет fetch
		console.log(values, postId)

		setStatus('success')
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
			aria-describedby={status === 'success' ? `${formId}-status` : undefined}
		>
			<div className={styles.formWrapper}>
				<div className={styles.field}>
					<label htmlFor={nameId} className={styles.label}>
						Имя
					</label>

					<Input
						id={nameId}
						placeholder='Иван'
						autoComplete='name'
						aria-invalid={Boolean(errors.name)}
						aria-describedby={errors.name ? nameErrorId : undefined}
						{...register('name', {
							required: 'Заполните имя',
						})}
						ref={(el) => {
							register('name').ref(el)
							nameRef.current = el
						}}
						error={errors.name}
					/>

					{errors.name && (
						<p id={nameErrorId} role='alert' className={styles.error}>
							{errors.name.message}
						</p>
					)}
				</div>

				<div className={styles.field}>
					<label htmlFor={commentId} className={styles.label}>
						Комментарий
					</label>

					<Textarea
						id={commentId}
						placeholder='Напишите комментарий…'
						aria-invalid={Boolean(errors.comment)}
						aria-describedby={errors.comment ? commentErrorId : undefined}
						{...register('comment', {
							required: 'Напишите комментарий',
						})}
						ref={(el) => {
							register('comment').ref(el)
							commentRef.current = el
						}}
						error={errors.comment}
					/>

					{errors.comment && (
						<p id={commentErrorId} role='alert' className={styles.error}>
							{errors.comment.message}
						</p>
					)}
				</div>

				<button
					type='submit'
					className={styles.action}
					disabled={isSubmitting}
					aria-disabled={isSubmitting}
				>
					{isSubmitting ? 'Отправка…' : 'Отправить'}
				</button>

				{/* Live region для скринридеров */}
				{status === 'success' && isSubmitSuccessful && (
					<p
						id={`${formId}-status`}
						role='status'
						aria-live='polite'
						className={styles.success}
					>
						Комментарий отправлен.
					</p>
				)}
			</div>
		</form>
	)
}
