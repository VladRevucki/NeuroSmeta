import cls from "./MainLayout.module.css"
import { Outlet } from "react-router"

export const MainLayout = () => {
	return (
		<>
			<div className={cls.mainLayout}>
				<div className={cls.mainLayout__backdrop}>
					<div className={cls.mainLayout__circle_red}></div>
					<div className={cls.mainLayout__circle_yellow}></div>
					<div className={cls.mainLayout__circle_blue}></div>
				</div>
				<main className={cls.main}>
					<Outlet />
				</main>
			</div>
		</>
	)
}
