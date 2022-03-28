import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import { getPlacesData } from './API';

const App = () => {
	const [places, setPlaces] = useState([]);

	const [coords, setCoords] = useState({});

	const [bounds, setBounds] = useState({});

	const [childClicked, setChildClicked] = useState(null);

	const [isLoading, setIsLoading] = useState(false);

	const [type, setType] = useState('Restaurant');

	const [rating, setRating] = useState('');

	const [filteredPlaces, setFilteredPlaces] = useState([]);

	const isDesktop = useMediaQuery('(min-width:600px)');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating > rating);

		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	useEffect(() => {
		console.log(coords, bounds);
		getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
			if (bounds.sw && bounds.ne) {
				console.log('data is ', data);
				setFilteredPlaces([]);
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setIsLoading(true);
			}
		});
	}, [type, bounds]);

	return (
		<>
			<CssBaseline />
			<Header setCoords={setCoords} isDesktop={isDesktop} />
			<Grid container spacing={3} style={{ width: '100%', marginTop: '5px' }}>
				<Grid item xs={12} md={4}>
					<List
						places={filteredPlaces.length ? filteredPlaces : places}
						childClicked={childClicked}
						isLoading={isLoading}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoords={setCoords}
						setBounds={setBounds}
						coords={coords}
						places={filteredPlaces.length ? filteredPlaces : places}
						isDesktop={isDesktop}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
