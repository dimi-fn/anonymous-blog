const form = document.querySelector('#post_form')
const btn = document.querySelector("#new_post")
const postsArea = document.querySelector('#postsArea')
form.addEventListener('submit', submitPost)


getAllPosts()


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

async function getItem(id){
    try{
        const response = await fetch(`http://localhost:3000/posts/${id}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.warn(err);
    }
}

// implement try catch 
async function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json)
        .then(appendPosts)
        .catch
    
}

function appendPosts(data){
    data.post.forEach(appendPost); // look further into
};

function appendPost(postData){
    const newRow = document.createElement('div');
    const postEntry = formatPost(postData, newRow)
    postsArea.append(newRow);
};

