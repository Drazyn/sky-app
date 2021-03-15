import { QuizzContextProvider } from '../contexts/QuizzContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<QuizzContextProvider>
			<Component {...pageProps} />
		</QuizzContextProvider>
	);
}

export default MyApp
