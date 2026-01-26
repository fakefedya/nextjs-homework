'use client'

import { Input } from '@/components/ui/Input/Input'
import styles from './CommentForm.module.css'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { useForm } from 'react-hook-form'

interface CommentFormProps {
	name: string
	comment: string
}

export function CommentForm({ postId }: { postId: number }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CommentFormProps>()

	const onsubmit = (formData: CommentFormProps) => {
		console.log(formData, postId)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onsubmit)}>
			<div className={styles.formWrapper}>
				<Input
					placeholder='Имя'
					{...register('name', {
						required: {
							value: true,
							message: 'Заполните имя',
						},
					})}
					error={errors.name}
				/>
				<Textarea
					placeholder='Комментарий'
					{...register('comment', {
						required: {
							value: true,
							message: 'Напишите комментарий',
						},
					})}
					error={errors.comment}
				/>
				<button className={styles.action}>Отправить</button>
			</div>
		</form>
	)
}
