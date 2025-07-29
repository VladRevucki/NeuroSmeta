import cls from "./HomePage.module.css"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className={cls.home}>
				<h1 className={cls.home__header}>Регистрация</h1>
				<p className={cls.home__text}>Выберите тип пользователя:</p>
				<div className={cls.home__block_btn}>
					<button
						className={cls.home__registration}
						onClick={() => {
							navigate("/registrationCustomer")
						}}
					>
						<h3>Я заказчик</h3>
						<p>Хочу получить услугу по разработке сметной документации</p>
					</button>
					<button
						className={cls.home__registration}
						onClick={() => {
							navigate("/registrationEstimator")
						}}
					>
						<h3>Я сметчик</h3>
						<p>Готов заниматься разработкой сметной документации</p>
					</button>
				</div>
			</div>
		</>
	)
}
