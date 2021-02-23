<template>
    <div class="dropdown-wrapper">
        <form>
            <label for="console" hidden>Select Console</label>
            <font-awesome-icon :icon="['fas', 'caret-down']" :style="{ color: ' #4f43ae' }" class="caret"/>
            <select id="console" name="Console">
                <option value="" selected>All Games</option>
                <option
                        v-for="console in data.consoles"
                        v-bind:key="console.id"
                        v-bind:value="console.name"
                >{{ console.name }}</option>
                <option value="">Other</option>
            </select>
        </form>
    </div>
</template>

<script>
    export default {
        name: "GameSelectDropdown",
        data: function () {
            return {
                data: {
                    consoles: [
                        {
                            name: "SNES",
                            id: 0
                        },
                        {
                            name: "GBA",
                            id: 1
                        },
                        {
                            name: "GBC",
                            id: 2
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .dropdown-wrapper {
        width: 10vw;
        height: 6vh;
        position: relative;
    }
    small {
        color: #4f43ae;
        position: absolute;
        z-index: 1;
        top: -0.20vh;
        left: 0.2vw;
    }
    select {
        border-radius: 5px;
        outline: none;
        background-color: #cec9cc;
        border: none;
        font-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        z-index: 0;
        color: #4f43ae;
        appearance: none;
    }
    select:hover, select:focus:active {
        background-color: #b5b6e4;
    }
    .caret {
        position: absolute;
        z-index: 1;
        top: 2vh;
        right: 5%;
    }
</style>