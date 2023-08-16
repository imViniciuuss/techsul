import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import { GlobalStyles } from './styles/globalStyles.ts';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './router/BrowserRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<>
		<RouterProvider router={BrowserRouter} />
		<GlobalStyles />
	</>
	// </React.StrictMode>
);

