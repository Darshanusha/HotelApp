import axios from 'axios';

export default axios.create({
        baseURL: "https://api.yelp.com/v3/businesses",
        headers:{
            Authorization: "Bearer 4xWHSPk8nFR4atJ5PoeDn4r8yJIQhNrE4TIxB48a5bQj-r8VboGs-LlSqlvdBiHU96iS8hT_PoZcvUyyt_jpSNj2-6gqe4sAa9M5kmffmueQuhyaJiDyV3VwZrlpYHYx"
        }
    }
);