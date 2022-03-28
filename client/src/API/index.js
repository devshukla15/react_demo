import axios from 'axios';

// const URL =
// 	;

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			// `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
					'X-RapidAPI-Key':
						'a8ceea9bbemshc5f532044389753p131e0ejsn81a627fcd175',
				},
			}
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
