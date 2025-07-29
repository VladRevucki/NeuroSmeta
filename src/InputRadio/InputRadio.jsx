import { useId } from "react"
import cls from "./InputRadio.module.css"

export const InputRadio = props => {
	const { value, name, onChange } = props
	const id = useId()

	return (
		<>
			<label className={cls.labelRadio} htmlFor={id}>
				<input
					className={cls.inputRadio}
					type="radio"
					name={name}
					id={id}
					onChange={onChange}
				/>
				{value}
			</label>
		</>
	)
}
