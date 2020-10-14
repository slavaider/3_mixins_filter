/* eslint-disable no-console */
<template>
    <div id="app">
        <h2>{{Title}}</h2>
        <label>
            <input type="text" v-model="searchName"/>
        </label>
        <ul>
            <li v-for="name of filterNames" :key="name">{{ name }}</li>
        </ul>
        <hr/>
        <app-counter></app-counter>
        <app-car>
            <h2 slot="title">{{carName}}</h2>
            <p slot="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quibusdam incidunt magni
                expedita tenetur esse aliquid officia impedit assumenda amet eos, nulla ut ratione nostrum nobis aut
                accusamus, vel eius?</p>
        </app-car>
        <hr/>
        <h2>Form</h2>
        <label>
            <input type="text" v-model.lazy="name"/>
        </label>
        <p>{{name}}</p>
        <hr/>
        <label>
            <textarea v-model="textarea"></textarea>
        </label>
        <p>{{textarea}}</p>
        <hr/>
        <label for="instagram">INSTAGRAM</label>
        <input type="radio" id="instagram" value="instagram" v-model="social"/>
        <label for="vk">VK</label>
        <input type="radio" id="vk" value="vk" v-model="social"/>
        <ul>{{social}}</ul>
        <hr/>
        <label>
            <select v-model="def">
                <option v-for="s of select" :key="s">{{s}}</option>
            </select>
        </label>
        <hr/>
        <label>
            <input type="number" v-model.number="age"/>
        </label>
        <p>{{age}}</p>
        <hr/>
        <button class="on">on</button>
        <button class="off">off</button>
    </div>
</template>

<script>
    import listMixin from "./listMixin";
    import car from "./components/car/car"

    export default {
        name: "app",
        components: {
            "app-car": car
        },
        mixins: [listMixin],
        watch: {
            age(value) {
                // eslint-disable-next-line no-console
                console.log(value);
            }
        },
        data: function () {
            return {
                age: 20,
                carName: "Ford",
                Title: "Title",
                visible: true,
                name: "input",
                textarea: "lol",
                social: "",
                select: ["lol", "lol2"],
                def: "lol2"
            };
        },
        directives: {
            font: {
                bind(el) {
                    el.style.fontSize = "100px";
                }
            }
        },
        filters: {
            lowercase(el) {
                return el.toLowerCase();
            }
        }
    };
</script>
<style scoped>
    textarea {
        height: 100px;
        width: 500px;
    }

    p {
        white-space: pre;
    }

</style>
