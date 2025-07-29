import { useNavigate } from "react-router-dom"
import cls from "./TestPage.module.css"
import { useState } from "react"
import { InputRadio } from "../InputRadio/InputRadio"
import { InputCheckbox } from "../InputCheckbox/InputCheckbox"
import { ButtonsFooter } from "../ButtonsFooter/ButtonsFooter"

export const TestPage = () => {
	const navigate = useNavigate()
	const [selected, setSelected] = useState("")

	const onSelectedHandler = e => {
		setSelected(e.target.value)
	}

	return (
		<>
			<div className={cls.test}>
				<div className={cls.progressBar}>
					<div className={cls.progress}></div>
				</div>
				<h1 className={cls.test__header}>
					Для продолжения необходимо пройти тест
				</h1>
				<div className={cls.test__checkbox_block}>
					<label className={cls.test__subtitle}>1. Общие положения</label>
					<ul>
						<li>
							- Тест содержит 10 вопросов по разработке сметной документации.
						</li>
						<li>
							- Для успешного прохождения теста, необходимо ответить верно на
							90% вопросов.
						</li>
						<li>
							- Вопросы охватывают основные темы сметного дела: методы
							определения сметной стоимости, составление локальных смет, работа
							с нормативными базами, расчет накладных расходов и сметной
							прибыли.
						</li>
					</ul>
					<label className={cls.test__subtitle}>
						2. Процесс прохождения теста
					</label>
					<ul>
						<li>
							- Время на выполнение теста не ограничено, однако рекомендуется
							проходить его в комфортных условиях и без перерывов.
						</li>
						<li>
							- Для каждого вопроса предусмотрено несколько вариантов ответа.
						</li>
						<li>
							- Выберите наиболее подходящий ответ, исходя из ваших знаний и
							опыта.
						</li>
						<li>
							- При выходе из теста или перезагрузке страницы все результаты
							обнуляются. В следующий раз вам будет предложен новый тест.
						</li>
					</ul>
					<label className={cls.test__subtitle}>
						3. Оценивание результатов
					</label>
					<ul>
						<li>
							- Результаты теста отображаются сразу после ответа на все вопросы.
						</li>
						<li>
							- Вы сможете увидеть количество правильных ответов и процент
							успешного выполнения теста.
						</li>
						<li>
							- После успешного прохождения теста вы сможете продолжить
							регистрацию.
						</li>
					</ul>
					<div className={cls.test__mail}>
						Если у вас возникли вопросы, свяжитесь с нами по почте -&nbsp;
						<a href="mailto:support@neurosmeta.by" className={cls.mail__link}>
							support@neurosmeta.by
						</a>
					</div>
					<form action="#">
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								1. Включают ли локальные сметы, составленные на основании
								нормативов расхода ресурсов, затраты на перевозку отходов
								(погрузка, транспортировка, разгрузка), которые подлежат
								хранению, использованию, обезвреживанию или захоронению, в том
								числе использованию в качестве изолирующего слоя на объектах
								захоронения отходов, в санкционированные места хранения,
								захоронения отходов, на объекты обезвреживания, использования?
							</label>
							<InputRadio
								value="Да"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Только по согласованию с заказчиком"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Нет"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								2. Нужно ли учитывать средства на непредвиденные работы и
								затраты при составлении сводного сметного расчета стоимости
								строительства на основании нормативов расхода ресурсов в
								натуральном выражении?
							</label>
							<InputRadio
								value="Да, приводятся за итогом глав 1 - 10 сводного сметного расчета"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Нет"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value='Да, в главе 9 сводного сметного расчета "Прочие работы и расходы"'
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								3. Требуется ли оформлять сводку средств при составлении сметной
								документации на основании нормативов расхода ресурсов в
								натуральном выражении в случае, если по объекту строительства
								одновременно предусмотрено финансирование строительства
								жилищно-гражданских объектов и объектов производственного
								назначения?
							</label>
							<InputRadio
								value="Да"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Нет, если в составе объекта не выделены очереди строительства
"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								4. Как в процессе подготовки локальных смет при отсутствии
								нормативов расхода ресурсов в натуральном выражении в сборниках,
								утвержденных Минстройархитектуры, можно определить стоимость
								выполнения отдельных видов работ?
							</label>
							<InputRadio
								value="На основании индивидуальных нормативов расхода ресурсов в натуральном выражении"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="На основании данных Минэкономики
"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="На основании данных межведомственной комиссии"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								5. Правомерно ли производить замену стоимости материалов в ранее
								разработанной локальной смете, если эта стоимость была принята
								на основании данных республиканской нормативной базы текущих цен
								на ресурсы, а сметная документация разработана на основании
								нормативов расхода ресурсов в натуральном выражении?
							</label>
							<InputRadio
								value="Да"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да, по поручению руководителя"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да, если стоимость согласована разработчиком проектной документации"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да, если стоимость передана официальным письмом заказчика"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Нет"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								6. Определяются ли объемы работ при составлении локальных смет
								на основании проектной документации (дефектного акта) и
								технической части сборников нормативов расхода ресурсов в
								натуральном выражении?
							</label>
							<InputRadio
								value="Нет"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да, без учета технической части сборников"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								7. Как производится компенсация увеличения стоимости отдельных
								работ и расходов в процессе строительства, если это увеличение
								обосновано необходимостью выполнения дополнительных работ,
								стоимость которых определяется разработчиками проектной
								документации путем составления локальных смет на основе актов,
								оформленных заказчиком и проектной организацией?
							</label>
							<InputRadio
								value="Определяется исходя из среднеарифметического значения нормативов средств на непредвиденные работы и затраты"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="За счет средств на непредвиденные работы и затраты и экономии средств по другим статьям в пределах сметной стоимости строительства в целом"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="За счет дополнительных средств, которые должен предоставить инвестор"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								8. При составлении сводного сметного расчета стоимости
								строительства, который составлен на основании нормативов расхода
								ресурсов в натуральном выражении, учитываются ли налоги и
								отчисления в соответствии с законодательными актами?
							</label>
							<InputRadio
								value="На основании индивидуальных нормативов расхода ресурсов в натуральном выражении"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value='Да, в главе 9 сводного сметного расчета стоимости строительства "Прочие работы и расходы"'
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Да, за итогом глав 1 - 10 сводного сметного расчета (за исключением средств по уплате обязательных страховых взносов)"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								9. Что может служить основанием для разработки сметной
								документации с применением нормативов расхода ресурсов в
								натуральном выражении?
							</label>
							<InputRadio
								value="Служебная записка проектировщика – разработчика разделов проекта"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Акт на дополнительные работы"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Докладная записка ГИПа"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Поручение руководителя"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Проектная документация"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<div className={cls.test__checkbox_block}>
							<label className={cls.test__subtitle_question}>
								10. Как осуществляется расчет средств на перебазирование
								строительно-монтажной организации с одного объекта на другой,
								включаемые в сводный сметный расчет стоимости строительства,
								определяемый на основании нормативов расхода ресурсов в
								натуральном выражении?
							</label>
							<InputRadio
								value="По процентной норме, установленной Минстройархитектуры, и приводятся в графах 8 и 9 ССР"
								onChange={onSelectedHandler}
								name="radio"
							/>
							<InputRadio
								value="Средства определяются расчетом, составленным на основании данных подрядчика, согласованных с заказчиком, и данных раздела ПОС, и приводятся в графах 8 и 9 ССР"
								onChange={onSelectedHandler}
								name="radio"
							/>
						</div>
						<ButtonsFooter
							onBackClick={() => {
								navigate("/registrationEstimator")
							}}
							backText="Назад"
							sendText="Проверить ответы"
						/>
					</form>
				</div>
			</div>
		</>
	)
}
