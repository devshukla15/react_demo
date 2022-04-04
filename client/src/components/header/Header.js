import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	Box,
	Button,
	Avatar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

import useStyles from './styles';

const Header = ({ setCoords, isDesktop }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logOut = () => {
		dispatch({ type: 'LOGOUT' });

		navigate('/');

		setUser(null);
	};

	console.log('user is ', user);

	useEffect(() => {
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const [autocomplete, setAutocomplete] = useState(null);

	const onPlaceChanged = () => {
		const lat = autocomplete.getPlace().geometry.location.lat();
		const lng = autocomplete.getPlace().geometry.location.lng();

		setCoords({ lat, lng });
	};

	const onLoad = (autoC) => setAutocomplete(autoC);

	return (
		<AppBar className={classes.AppBar}>
			<Toolbar className={classes.toolbar}>
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<Typography variant="h5" className={classes.title}>
						Traveller
					</Typography>
				</Link>
				<Box display="flex">
					{user ? (
						<>
							<div className={classes.profile}>
								<Avatar
									className={classes.purple}
									alt={user.result.name}
									src={user.result.imageUrl}
								>
									{user.result.name.slice(0, 1)}
								</Avatar>
								<Typography variant="h6" className={classes.title}>
									{user.result.name}
								</Typography>
							</div>

							<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder="Search…"
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
									/>
								</div>
							</Autocomplete>

							<Button variant="contained" onClick={logOut}>
								Logout
							</Button>
						</>
					) : (
						<Button component={Link} to="/auth" variant="contained">
							Sign In
						</Button>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
