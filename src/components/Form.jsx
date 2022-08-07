import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useGlobalContext } from './context/apiContext';

const CATEGORIES = [
	{ value: 'general', label: 'General' },
	{ value: 'business', label: 'Entreprise' },
	{ value: 'entertainment', label: 'Divertissement' },
	{ value: 'health', label: 'Santé' },
	{ value: 'science', label: 'Science' },
	{ value: 'sports', label: 'Sport' },
	{ value: 'technology', label: 'Technologie' },
];

const Form = () => {
	const { categorie, handleChangeCategorie } = useGlobalContext();
	return (
		<form>
			<FormControl fullWidth>
				<InputLabel>Categorie</InputLabel>
				<Select
					onChange={handleChangeCategorie}
					label='Categorie'
					value={categorie}>
					{CATEGORIES.map((categorie, idx) => (
						<MenuItem key={idx} value={categorie.value}>
							{categorie.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</form>
	);
};
export default Form;
