import axios from 'axios';

export const findNearByCamps = async (campSiteAddress, lat, lng) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/NearBy/${campSiteAddress}/${lat},${lng}`;
        const {data} = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getAddressFrom = async (lat, lng) => {

    try {
        const url = `${process.env.REACT_APP_BASE_URL}/places?latitude=${lat}&longitude=${lng}`;
        const {data} = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
}


export const getPlaceDetail = async (placeId) => {

    try {
        const url = `${process.env.REACT_APP_BASE_URL}/places/${placeId}/details/formatted_phone_number,website`;
        const {data} = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
}