import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 

                {params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                    'X-RapidAPI-Key': '48b5db370fmsh2bd99d48b2f1195p159520jsn99a1944aef72',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }}
            )
        return data
    }catch(error){
        console.log(error)
    }
}

// export const getWeatherData = async (lat, lng) => {
//     try {
//         if (lat && lng) {
//             const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', 
//                 {params: { lat, lon: lng },
//                 headers: {
//                     'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//                     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//                 }}
//             );
//             return data;
//           }
//     } catch (error) {
//         console.log(error)
//     }
// }

