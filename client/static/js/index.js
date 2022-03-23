const form = document.querySelector('#post_form')
const btn = document.querySelector("#new_post")

form.addEventListener('submit', submitPost)





// create
function submitPost(e){
e.preventDefault()
        const newPostData = {
            title: e.target.title.value,
            name: e.target.name.value,
            post: e.target.post.value
        };

    const options = { 
        method: 'POST',
        body: JSON.stringify(newPostData),
        headers: { "Content-Type": "application/json" }
    };

    
    fetch('http://localhost:3000/posts', options)
    .then(r => r.json())
    // .then()
    .then(() => e.target.reset())
    .catch(console.warn)
}
