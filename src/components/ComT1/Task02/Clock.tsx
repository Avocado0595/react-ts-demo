import React, { useEffect } from 'react';

export default function Clock() {
	const [date, setDate] = React.useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, [date]);
	return <div>{date.toString()}</div>;
}
