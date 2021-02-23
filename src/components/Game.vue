<template>
    <div class="game" :id="gameID">
        <a href="#" @click="onLinkClick"><img :src="coverURL" :alt="title"></a>
        <a href="#" @click="onLinkClick"><small>{{title}}</small></a><br>
        <small>CONSOLE</small>
        <small>{{releaseDate}}</small>
    </div>
</template>

<script>
    export default {
        props: {
            gameID: String,
            title: String,
            releaseDate: String,
            coverURL: String
        },
        name: "Game",
        methods: {
            onLinkClick() {
                this.$emit("open")
            }
        }
    }
</script>

<style scoped>
    .game {
        position: relative;
        display: inline-block;
        width: 15vw;
        padding: 1vh 1vw 1vh 1vw;
    }
    img {
        object-fit: contain;
        width: 15vw;
        border-radius: 25px;
    }
    img:hover {
        box-shadow: 0 0 3pt 2pt #cec9cc;
    }
    a {
        text-decoration: none;
    }
    a small {
        color: #cec9cc;
        padding-right: 0.5vw;
    }
    small {
        color: #908a99;
        padding-right: 0.5vw;
    }
</style>