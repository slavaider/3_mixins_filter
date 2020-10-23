export default {
    computed: {
        filterNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
            });
        }
    },
    data() {
        return {
            searchName: "",
            names: ["max", "elena", "lox"]
        };
    }
}
