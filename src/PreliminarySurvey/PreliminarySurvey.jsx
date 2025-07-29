import { useState } from "react"
import cls from "./PreliminarySurvey.module.css"
import { useNavigate } from "react-router-dom"
import { ButtonsFooter } from "../ButtonsFooter/ButtonsFooter"
import { InputCheckbox } from "../InputCheckbox/InputCheckbox"
import { InputRadio } from "../InputRadio/InputRadio"

export const PreliminarySurvey = () => {
	const navigate = useNavigate()
	const [selected, setSelected] = useState("")

	const onSelectedHandler = e => {
		setSelected(e.target.value)
	}

	return (
		<>
			<div className={cls.survey}>
				<div className={cls.progressBar}>
					<div className={cls.progress}></div>
				</div>
				<h1 className={cls.survey__header}>Предварительный опрос</h1>
				<p className={cls.survey__text}>
					Пожалуйста, ответьте на несколько вопросов
				</p>
				<div className={cls.survey__checkbox_block}>
					<label className={cls.subtitle}>Укажите Ваше гражданство</label>
					<InputRadio
						value="Республика Беларусь"
						onChange={onSelectedHandler}
						name="radio"
					/>
					<InputRadio
						value="Российская Федерация"
						onChange={onSelectedHandler}
						name="radio"
					/>
				</div>
				<div className={cls.survey__checkbox_block}>
					<label className={cls.subtitle}>В каких программах работаете?</label>
					<div className={cls.survey__radio_block}>
						<InputCheckbox value="АРМ ТПП (РБ)" onChange={onSelectedHandler} />
						<InputCheckbox value="СИС (РБ)" onChange={onSelectedHandler} />
						<InputCheckbox
							value="ГрандСмета (РФ)"
							onChange={onSelectedHandler}
						/>
						<InputCheckbox value="Другие" onChange={onSelectedHandler} />
					</div>
					<div className={cls.survey__checkbox_block}>
						<label className={cls.subtitle}>
							В каких нормах делаете сметы?
						</label>
						<InputRadio
							value="Нормы РБ"
							onChange={onSelectedHandler}
							name="radio"
						/>
						<InputRadio
							value="Нормы РФ"
							onChange={onSelectedHandler}
							name="radio"
						/>
						<InputRadio
							value="Нормы РБ + Нормы РФ"
							onChange={onSelectedHandler}
							name="radio"
						/>
					</div>
					<div className={cls.survey__checkbox_block}>
						<label className={cls.subtitle}>
							Есть ли у Вас лицензионная сметная программа?
						</label>
						<InputRadio value="Да" onChange={onSelectedHandler} name="radio" />
						<InputRadio value="Нет" onChange={onSelectedHandler} name="radio" />
					</div>
					<ButtonsFooter
						onBackClick={() => {
							navigate("/")
						}}
						onSendClick={() => {
							navigate("/test")
						}}
						backText="Назад"
						sendText="Продолжить"
					/>
				</div>
			</div>
		</>
	)
}
