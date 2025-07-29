import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage/HomePage"
import { MainLayout } from "./MainLayout/MainLayout"
import { RegistrationCustomer } from "./RegistrationCustomer/RegistrationCustomer"
import { PreliminarySurvey } from "./PreliminarySurvey/PreliminarySurvey"
import { TestPage } from "./TestPage/TestPage"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/registrationCustomer"
							element={<RegistrationCustomer />}
						/>
						<Route
							path="/registrationEstimator"
							element={<PreliminarySurvey />}
						/>
						<Route path="/test" element={<TestPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
