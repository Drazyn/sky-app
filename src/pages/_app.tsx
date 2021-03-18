import { QuizzContextProvider } from '../contexts/QuizzContext';
import { QuestionContextProvider } from '../contexts/QuestionContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<QuestionContextProvider>
			<QuizzContextProvider>
				<Component {...pageProps} />
			</QuizzContextProvider>
		</QuestionContextProvider>
	);
}

export default MyApp
