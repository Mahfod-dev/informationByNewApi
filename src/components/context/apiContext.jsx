import { useState, useEffect, createContext, useContext } from 'react';
const url = `https://newsapi.org/v2/top-headlines?country=fr&category=`;

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
	const [categorie, setCategorie] = useState('general');
	const [infos, setInfos] = useState([]);
	const [page, setPage] = useState(1);
	const [totalInfos, setTotalInfos] = useState(0);

	const handleChangeCategorie = (e) => {
		setCategorie(e.target.value);
	};

	const fetchData = async (url) => {
		const response = await fetch(
			`${url}${categorie}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
		);
		const { articles, totalResults } = await response.json();
		setInfos(articles);
		setTotalInfos(totalResults);
	};

	const handlePage = (e, value) => {
		console.log(value);
		setPage(value);
	};

	useEffect(() => {
		fetchData(url);
	}, [categorie, page]);

	return (
		<ApiContext.Provider
			value={{
				categorie,
				handleChangeCategorie,
				infos,
				page,
				totalInfos,
				handlePage,
			}}>
			{children}
		</ApiContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(ApiContext);
};

export { ApiProvider };
export default ApiContext;
