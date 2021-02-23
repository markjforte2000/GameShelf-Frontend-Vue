<template>
    <div id="content-wrapper" class="content-wrapper">
        <game-modal :game="currentlyRenderedGame" id="modal" v-on:close="closeCurrentModal" v-if="modalOpen"></game-modal>
        <div id="content" class="content disabled">
            <game
                    v-for="game in games"
                    v-bind:key="game.id"
                    v-bind:title="game.title"
                    v-bind:gameID="game.id.toString()"
                    v-bind:releaseDate="convertReleaseDate(game.releaseDate)"
                    v-bind:coverURL="game.cover.url"
                    v-on:open="openGameModal($event,  game)"
            ></game>
        </div>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import Game from "./Game";
    import GameModal from "./GameModal";
    export default {
        name: "Content",
        // eslint-disable-next-line vue/no-unused-components
        components: {GameModal, Game},
        data: function () {
            return {
                games: null,
                modalOpen: false,
                currentlyRenderedGame: null
            }
        },
        mounted() {
            axios.get('http://localhost:5000/library').then(
                response => {
                    this.games = response.data
                }
            )
        },
        methods: {
            convertReleaseDate: function(date) {
                return date.substring(0, 4)
            },
            closeCurrentModal: function () {
                this.modalOpen = false;
                document.getElementById("content").classList.remove("disabled")
            },
            openGameModal: function (event, game) {
                this.currentlyRenderedGame = game;
                this.modalOpen = true
            }
        }
    }
</script>

<style scoped>
    .content-wrapper {
        max-width: 100vw !important;
        overflow-x: hidden;
        overflow-y: visible;
        pointer-events: auto;
    }
    .content {
        display: inline-block;
        max-width: 100vw !important;
        margin-top: 3vh;
        margin-bottom: 20vh;
    }
    .disabled {

    }
</style>