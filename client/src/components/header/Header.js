import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({ setCoords, isDesktop }) => {
	const classes = useStyles();

	const [autoComplete, setAutoComplete] = useState(null);

	const onPlaceChanged = () => {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();

		setCoords({ lat, lng });
	};

	const onLoad = (autoC) => setAutoComplete(autoC);

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" className={classes.title}>
					{isDesktop ? (
						<a>Traveller</a>
					) : (
						<img
							src="logo4.jpg"
							height="30"
							alt="icon"
							width="30"
							className={classes.image}
						/>
					)}
				</Typography>
				<Box display="flex">
					<Typography variant="h6" className={classes.title}>
						Explore new places
					</Typography>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{ root: classes.inputRoot, input: classes.inputInput }}
							/>
						</div>
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
