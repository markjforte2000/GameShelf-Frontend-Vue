<template>
    <div class="game-modal-wrapper">
        <div class="game-modal">
            <div class="left">
                <img :src="game.cover.url" :alt="game.title">
                <a :href="getDownloadLink(game.id)" :download="game.fileName" class="modal-button"><h4>Download</h4></a>
                <a href="#" class="modal-button"><h4>Create Shareable Link</h4></a>
            </div>
            <div class="right">
                <h3>{{game.title}}</h3>
                <h5>{{translateReleaseDate(game.releaseDate)}}</h5>
                <div class="genre-list">
                    <h5>Genres: </h5>
                    <a v-for="genre in game.genres"
                       :key="genre.id"
                       href="#"
                    ><h5>{{genre.name}}</h5></a>
                </div>

            </div>
            <button class="exit-button">
                <font-awesome-icon :icon="['fas', 'times-circle']" :style="{ color: ' #4f43ae' }" class="exit"/>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameModal",
        props: {
            game: Object
        },
        methods: {
            getDownloadLink: function(gameID) {
                return 'http://localhost:5000/download?id=' + gameID.toString()
            },
            translateReleaseDate: function (dateRaw) {
                return "Release Year: " + dateRaw.substring(0, 4)
            }
        }
    }
</script>

<style scoped>
    .game-modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vw;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .game-modal {
        position: fixed;
        top: 12.5vh;
        left: 25vw;
        width: 50vw;
        height: 75vh;
        background-color: #211a21;
        color: #cec9cc;
        border-radius: 25px;
        z-index: 100;
        display: flex;
    }
    h3 {
        color: #b5b6e4;
        margin-bottom: 1vh;
    }
    h5 {
        margin-top: 0;
        margin-bottom: 1vh;
        color: #b5b6e4;
    }
    a {
        text-decoration: none;
    }
    .modal-button {
        display: flex;
        width: 100%;
        height: 6vh;
        text-align: center;
        border-radius: 25px;
        background-color: #b5b6e4;
        color: #211a21;
        margin-top: 0.5vh;
        align-items: center;
    }
    .modal-button h4 {
        flex: 1;
    }
    .modal-button+.modal-button {
        margin-top: 0.5vh;
    }
    .left, .right {
        flex: 1;
        margin: 1vw;
    }
    img {
        border-radius: 25px;
    }
    .genre-list {
        display: inline;
    }
    .genre-list h5 {
        display: inline;
        margin-left: 0.5vw;
    }
    .genre-list a h5:hover {
        color: #cec9cc;
    }
    p {
        text-align: left;
    }
    .exit-button {
        position: absolute;
        right: 2vw;
        top: 2vh;
        outline: none;
        border: none;
        background-color: transparent;
    }
    .exit-button:hover {
        color: #cec9cc;
    }
</style>