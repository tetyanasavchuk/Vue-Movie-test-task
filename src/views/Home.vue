<template>
    <div class="home">
        <img src="../assets/kinohit.png" alt="movie image" class="main-img" />
        <form @submit.prevent="SearchMovies()" class="search-box">
            <input type="text" placeholder="Search movie" v-model="search" />

            <input type="submit" value="Search" />
        </form>
        <div class="movies-list">
            <div class="movie" v-for="movie in movies" :key="movie.imdbID">
                <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                    <div class="product-image">
                        <img :src="movie.Poster" alt="Movie Poster" class="img-poster" />
                        <div class="type">{{ movie.Type }}</div>
                    </div>
                    <div class="detail">
                        <p class="year">{{ movie.Year }}</p>
                        <h3>{{ movie.Title }}</h3>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import env from '../env.js'

export default {
    setup() {
        const search = ref('');
        const movies = ref([]);

        const SearchMovies = () => {
            if (search.value != '') {
                fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        movies.value = data.Search;
                        search.value = '';
                    });
            }
        }
        return {
            search,
            movies,
            SearchMovies
        }
    }
}
</script>



 <style>
.main-img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
}

.search-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
}
input {
    border: none;
    background: none;
    outline: none;
    background-color: #81bed6;
    font-size: 18px;
    border-radius: 8px;
    margin-bottom: 15px;
}

input[type="text"] {
    width: 60%;
    padding: 10px 35px;
    color: #f3f3f3;
}
input[type="submit"] {
    color: #fff;
    padding: 0px 25px;
}
[type="submit"]:focus {
    background-color: #196a7e;
    cursor: pointer;
}
.movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 100px;
}

.movie {
    max-width: 50%;
    flex: 1 1 30%;
    padding: 10px 10px;
}

.movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;
}

.product-image {
    position: relative;
    display: block;
}
.img-poster {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.type {
    position: absolute;
    padding: 10px 10px;
    background-color: #81bed6;
    color: #fff;
    bottom: 10px;
    opacity: 0.8;
    text-transform: capitalize;
}
.detail {
    flex: 1 1 100%;
    padding: 10px 10px;
    border-radius: 0px 0px 10px 10px;
    background-color: #2a7481;
}
.year {
    color: #aaa;
    font-size: 14px;
}
</style>