import { Grid, Typography } from '@mui/material';
import { useGlobalContext } from './context/apiContext';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Info from './Info';

const ListInfo = () => {
	const { infos, page, totalInfos, handlePage } = useGlobalContext();

	const totalPage = Math.ceil(totalInfos / 20);

	return (
		<Typography textAlign={'center'} marginY={5} variant='h3' component={'h2'}>
			<Grid container spacing={2}>
				{infos.map((info, idx) => {
					return <Info key={idx} info={info} />;
				})}
			</Grid>
			<Stack
				sx={{
					marginY: 5,
				}}
				spacing={2}
				direction={'row'}
				justifyContent='center'
				alignItems='center'>
				<Pagination
					count={totalPage}
					value={page}
					color='primary'
					onChange={handlePage}
				/>
			</Stack>
		</Typography>
	);
};
export default ListInfo;
