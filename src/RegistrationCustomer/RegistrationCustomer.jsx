import { SearchInput } from "../SearchInput/SearchInput"
import cls from "./RegistrationCustomer.module.css"
import { ButtonsFooter } from "../ButtonsFooter/ButtonsFooter"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const RegistrationCustomer = () => {
	const [inputCompany, setInputCompany] = useState("")
	const [inputFio, setInputFio] = useState("")
	const [inputPhone, setInputPhone] = useState("")
	const [inputNote, setInputNote] = useState("")

	const navigate = useNavigate()

	const onInputCompanyHandler = e => {
		setInputCompany(e.target.value)
	}
	const onInputFioHandler = e => {
		setInputFio(e.target.value)
	}
	const onInputPhoneHandler = e => {
		setInputPhone(e.target.value)
	}
	const onInputNoteHandler = e => {
		setInputNote(e.target.value)
	}

	return (
		<>
			<form action="#">
				<div className={cls.home}>
					<div className={cls.progressBar}>
						<div className={cls.progress}></div>
					</div>
					<h1 className={cls.home__header}>Регистрация</h1>
					<p className={cls.home__text}>Выберите тип пользователя:</p>
					<div className={cls.home__block_btn}>
						<SearchInput
							name={inputCompany}
							onChange={onInputCompanyHandler}
							labelText="Название компании"
						/>
						<SearchInput
							name={inputFio}
							onChange={onInputFioHandler}
							labelText="ФИО"
						/>
						<SearchInput
							name={inputPhone}
							onChange={onInputPhoneHandler}
							labelText="Контактный телефон"
						/>
						<SearchInput
							name={inputNote}
							onChange={onInputNoteHandler}
							labelText="Примечание"
						/>
						<ButtonsFooter
							onBackClick={() => {
								navigate("/")
							}}
							backText="Назад"
							sendText="Отправить данные"
						/>
					</div>
				</div>
			</form>
		</>
	)
}
