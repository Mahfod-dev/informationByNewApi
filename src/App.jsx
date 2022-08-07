import { Container, Grid, Typography } from '@mui/material';
import Form from './components/Form';
import ListInfo from './components/ListInfo';

function App() {
	return (
		<Container>
			<header>
				<Typography align='center' marginY={5} component='h1' variant='h3'>
					INFORMATIONS
				</Typography>
			</header>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'>
				<Grid item xs={12} md={6} lg={4}>
					<Form />
				</Grid>
			</Grid>
			<ListInfo />
		</Container>
	);
}

export default App;
