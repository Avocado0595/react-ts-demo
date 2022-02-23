import React, { SetStateAction, useState } from 'react';
import {
	Box,
	Typography,
	FormControl,
	Select,
	MenuItem,
	styled,
} from '@mui/material';
import Clock from './Clock';
import { JobList, NationList } from './FakeData';
export default function MyHeader() {
	const [job, setJob] = useState(JobList[0]);
	const [nation, setNation] = useState(NationList[0]);

	const handleChangeJob = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		console.log(JobList);
		setJob(e.target.value);
	};
	const handleChangeNation = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setNation(e.target.value);
	};
	const MyFormControl = styled(FormControl)({
		marginTop: '10px',
	});
	return (
		<Box
			sx={{
				width: '100%',
				height: 150,
				backgroundColor: '#4895eb',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Typography variant="body1">Anonymous</Typography>
			<Typography variant="body1">{`I am a ${job} in ${nation}`}</Typography>
			<div>
				<MyFormControl fullWidth>
					<Select
						id="select-job"
						value={job}
						onChange={handleChangeJob}
						inputProps={{ 'aria-label': 'Without label' }}
					>
						{JobList.map((job) => (
							<MenuItem key={job} value={job}>
								{job}
							</MenuItem>
						))}
					</Select>
				</MyFormControl>
				<MyFormControl fullWidth>
					<Select
						id="select-nation"
						value={nation}
						inputProps={{ 'aria-label': 'Without label' }}
						onChange={handleChangeNation}
					>
						{NationList.map((nation) => (
							<MenuItem key={nation} value={nation}>
								{nation}
							</MenuItem>
						))}
					</Select>
				</MyFormControl>
			</div>
			<Clock />
		</Box>
	);
}
