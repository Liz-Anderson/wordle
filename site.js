// let button = document.getElementById('btn')

// button.addEventListener('click', function(){
//     let text = document.getElementById('output')
//     text.innerText = "poop"
// })

const vm = new Vue({
    el: "#app",
    data: {
        searchWord: '',
        result: [],
        random: [],
        message: "hey, sup?"
    },
    methods: {
        getWords: function(){
            axios({
                method: 'get',
                url: `https://api.dictionaryapi.dev/api/v2/entries/en/${this.searchWord}`
            }).then(response => {
                this.result = response.data
            })
            this.searchWord = ''
        },
        getRandom: function(){
            axios({
                method: 'get',
                url: `https://random-word-api.herokuapp.com/word?length=5`,
            }).then(response => {
                this.random = response.data
            })
        }
    },
    created: function(){
        this.getRandom()
    }
})