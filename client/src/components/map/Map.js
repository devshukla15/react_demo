import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';

const Map = ({
	setCoords,
	setBounds,
	coords,
	places,
	setChildCliked,
	isDesktop,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyD0ef9N1BSKlKoSoEPNzWiHDTpWo3-rPl0' }}
				defaultCenter={coords}
				center={coords}
				defaultZoom={15}
				margin={[50, 50, 50, 50]}
				options={(child) => {
					setChildCliked(child);
				}}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				onChildClick={''}
			>
				{places?.map((place, index) => (
					<div
						className={classes.markerContainer}
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
						key={index}
					>
						{isDesktop ? (
							<LocationOnOutlined color="primary" fontSize="large" />
						) : (
							<Paper elevation={3} className={classes.paper}>
								{' '}
								<Typography
									className={classes.Typography}
									variant="subtitle2"
									gutterBottom
								>
									{place.name}
								</Typography>
								<img
									className={classes.pointer}
									src={
										place.photo
											? place?.photo?.images?.large?.url
											: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
									}
									alt={place.name}
								/>
								<Rating size="small" value={Number(place.rating)} readOnly />
							</Paper>
						)}
					</div>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
