import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardHeader,
	styled,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function CardUpDown() {
	const [myTitle, setMyTitle] = useState('Hello World');
	const [number, setNumber] = useState(0);
	useEffect(() => {
		setMyTitle(`${number != 0 ? `Value: ${number}` : 'Hello World'}`);
		document.title = myTitle;
	}, [number, myTitle]);
	const handleUpBtn = () => {
		setNumber(number + 5);
	};
	const handleDownBtn = () => {
		setNumber(number - 5);
	};
	const MyButton = styled(Button)({
		width: '80px',
	});
	return (
		<Card
			sx={{
				width: '400px',
				backgroundColor: '#66bb6a',
				margin: '20px auto',
			}}
			variant="outlined"
		>
			<CardHeader title="Task 01 here!"></CardHeader>
			<CardHeader title={myTitle}></CardHeader>
			<CardContent>
				<ButtonGroup disableElevation variant="contained">
					<MyButton color="primary" onClick={handleUpBtn}>
						Up
					</MyButton>
					<MyButton color="error" onClick={handleDownBtn}>
						Down
					</MyButton>
				</ButtonGroup>
			</CardContent>
		</Card>
	);
}
