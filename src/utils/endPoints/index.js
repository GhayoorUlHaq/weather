export const devServer = 'https://api.openweathermap.org';
const API_KEY = '0957e35138dbd0b79de39fd04be69625';

export const endPoints = {
  getCities: `${devServer}/data/2.5/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=${API_KEY}`,
};
