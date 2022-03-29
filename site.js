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
        }
    }
})