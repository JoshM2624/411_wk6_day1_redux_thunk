import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
	// fill out this component
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const options = [ 'delete' ];

	return (
		<Container>
			<p>Import Component</p>
			<div style={{ textAlign: 'center' }}>
				<Button variant="contained" className="import" onClick={props.fetchMakes}>
					Import
				</Button>
			</div>

			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Make</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.makes.map((make, idx) => (
						<TableRow key={make.id}>
							<TableCell component="th" scope="row">
								{make.MakeId}
							</TableCell>
							<TableCell>{make['MakeName']}</TableCell>
							<TableCell>
								<MoreVert onClick={handleClick} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
				{options.map((option) => (
					<MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</Container>
	);
};

export default Import;
