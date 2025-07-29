import cls from "./ButtonsFooter.module.css"

export const ButtonsFooter = props => {
	const { onBackClick, onSendClick, backText, sendText } = props

	return (
		<>
			<div className={cls.block__btn}>
				<button
					className={`${cls.button} ${cls.backBtn}`}
					onClick={onBackClick}
				>
					{backText}
				</button>
				<button
					className={`${cls.button} ${cls.sendBtn}`}
					onClick={onSendClick}
				>
					{sendText}
				</button>
			</div>
		</>
	)
}
