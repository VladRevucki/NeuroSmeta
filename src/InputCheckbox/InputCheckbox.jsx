import { useId } from "react"
import cls from "./InputCheckbox.module.css"

export const InputCheckbox = props => {
	const id = useId()

	const { value, onChange } = props

	return (
		<>
			<label className={cls.labelCheckbox} htmlFor={id}>
				<input
					className={cls.inputCheckbox}
					type="checkbox"
					id={id}
					onChange={onChange}
				/>
				{value}
			</label>
		</>
	)
}
