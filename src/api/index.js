import axios from 'axios';

export const findNearByCamps = async (lat, lng) => {
    try {
        const URL = `${process.env.REACT_APP_BASE_URL}/NearBy/Mount Kosciuszko, Kosciuszko National Park NSW, Australia/${lat},${lng}`;
        const {data} = await axios.get(URL);
        return data;
    } catch (err) {
        console.log(err);
    }
}