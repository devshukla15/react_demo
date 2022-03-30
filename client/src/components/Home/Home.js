import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import Header from '../header/Header';
import List from '../list/List';
import { getPlacesData } from '../../API/index';
import Map from '../map/Map';

const Home = ({ coords, setCoords }) => {
	const [places, setPlaces] = useState([]);

	const [bounds, setBounds] = useState({});

	const [childClicked, setChildClicked] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	const [type, setType] = useState('restaurants');

	const [rating, setRating] = useState('');

	const [filteredPlaces, setFilteredPlaces] = useState([]);

	const isDesktop = useMediaQuery('(max-width:600px)');

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
				setIsLoading(false);
				setRating('');
			}
		});
	}, [type, bounds]);

	return (
		<>
			<CssBaseline />

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

export default Home;
