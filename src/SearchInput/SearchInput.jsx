import { useId } from "react"
import cls from "./SearchInput.module.css"

export const SearchInput = ({ name, onChange, labelText }) => {
	const inputId = useId()

	return (
		<div className={cls.inputContainer}>
			<label className={cls.label} htmlFor={inputId}>
				{labelText}
			</label>
			<input
				type="text"
				id={inputId}
				className={cls.input}
				name={name}
				onChange={onChange}
			/>
		</div>
	)
}
