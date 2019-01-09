# Dopeflix
All series and movies in one place!

[Live preview:](https://dopeflix.firebaseapp.com)

## Features (atm)
- Search Movies
- Search Series

## What I want to add?
- Profile Creation
- "Watch List"
- Rating of the film and series

## Technologies that I use:
- React
- React Router
- Axios
- SCSS
- Firebase Hosting

## Setup:

1.Create a file named `axios.js` in the directory `src`

2.Paste the code:
```
import axios from "axios";

export const key = "Your api key";
export const URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: URL
});

export default instance;

```

3.Paste your api key

4.Run:

- `yarn / npm i` - Install dependencies
- `yarn start / npm run start` - Run project
- `yarn build / npm run build` - Build project

## License
 - [MIT License](https://github.com/folxu/Dopeflix/blob/master/LICENSE)
 - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
