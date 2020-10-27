<template>
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
              rel="stylesheet">
        <div class="container" id="app">
            <!-- Directive:[bindings.arg].[bindings.modifier] = "[bindings.value]"-->
            <p v-colored:color.font.delay="'green'">{{Title}}</p>
            <p v-font>{{Title}}</p>
            <!--Filters-->
            <p>{{'LOL123'|lowercase}}</p>
            <p>{{'lol123'|uppercase}}</p>
            <p>{{'lol123'|uppercase|lowercase}}</p>

            <label>
                <input class="form-control" type="text" v-model="searchName"/>
            </label>

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
                <input class="form-control" type="text" v-model.lazy="name"/>
            </label>
            <p>{{name}}</p>
            <hr/>
            <label>
                <textarea v-model="textarea"></textarea>
            </label>
            <p>{{textarea}}</p>
            <hr/>
            <input id="defaultCheck1" type="checkbox" v-model="social" value="VK">
            <label class="form-check-label mx-1" for="defaultCheck1">
                VK
            </label>
            <br>
            <input id="defaultCheck2" type="checkbox" v-model="social" value="Instagram">
            <label class="form-check-label mx-1" for="defaultCheck2">
                Instagram
            </label>
            <ul class="list-group">{{social}}</ul>
            <hr/>
            <label>
                <select v-model="def">
                    <option :key="s" v-for="s in select">{{s}}</option>
                </select>
            </label>
            <hr/>
            <label>
                <input class="form-control" type="number" v-model.number="age"/>
            </label>
            <p>{{age}}</p>
            <hr/>
            <button class="btn btn-success btn-block col-2">on</button>
            <button class="btn btn-danger btn-block col-2">off</button>
        </div>
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
                    el.style.fontSize = "50px";
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
