const wrapper = document.getElementById('wrapper')

function createCard(todo) {
    return `
       <div id="todo">
            <h3>${todo.albumId}</h3>
            <h3>${todo.id}</h3>
            <h3>${todo.title}</h3>
            <h3>${todo.url}</h3>
            <h3>${todo.thumbnailUrl}</h3>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault()

    fetch("https://jsonplaceholder.typicode.com/photos", {
        method: 'GET'
    })
        .then((respone) => {
            if(respone.status == 200) {
                return respone.json()
            }
        })
        .then(data => {
            wrapper.innerHTML = ''
            if(data.length) {
                data.forEach(todo => {
                    let card = createCard(todo)
                    wrapper.innerHTML += card
                })
            }
        })
        .catch(err => {
            console.log(err)            
        })
})