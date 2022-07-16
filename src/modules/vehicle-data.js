
const API_URL    = 'https://vpic.nhtsa.dot.gov/api/';
export const URLS = {
    Variables:     '/vehicles/GetVehicleVariableList?format=json',
    Makes:         '/vehicles/GetAllMakes?format=json',
    Manufacturers: '/vehicles/GetAllManufacturers?format=json',
    MakesForManufacturer: (manufacturer) => {
        return `/vehicles/GetMakeForManufacturer/${manufacturer}?format=json`
    },
    ModelsForManufacturer: (manufacturer) => {
        return `/vehicles/GetModelsForMake/${manufacturer}?format=json`
    }
}

export async function getDataFrom(url, callback) {
    try {
        const response = await fetch(`${API_URL}${url}`);
        const data     = await response.json();
        callback(data.Results);
    } catch(e) {
        console.log('There was an issue retrieving your data');
        console.log(e);
    }
}