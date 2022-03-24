const btn = document.querySelector("#new_post") // curently not used
const postsArea = document.querySelector('#postsArea') // curently not used

const form = document.querySelector('#post_form') // used in submitPost()
form.addEventListener('submit', submitPost) // used in submitPost()




// currently we only have one category == posts
async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getItem(category, id) {
    try {
        const response = await fetch(`http://localhost:3000/${category}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

// submit post
// function submitPost(e){
// e.preventDefault()
//     try{
//         const newPostData = {
//             title: e.target.title.value,
//             name: e.target.name.value,
//             post: e.target.post.value
//         };

//         const options = { 
//             method: 'POST',
//             body: JSON.stringify(newPostData),
//             headers: { "Content-Type": "application/json" }
//         };
    
//         fetch('http://localhost:3000/posts', options)
//         .then(r => r.json())
//         // .then()
//         .then(() => e.target.reset())

//         if(err) { 
//             throw Error(err) 
//         } else {
//             window.location.hash = `#posts/${id}`
//         }
//     }
//     catch (err) {
//         console.warn(err);
//     }
// };

// submit post to backend, create a url.hash in the form of url/posts/<id>
async function submitPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

/*

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
    console.log(data)
    data.posts.forEach(appendPost); // look further into
};

function appendPost(postData){
    const newRow = document.createElement('div');
    const postEntry = formatPost(postData, newRow)
    postsArea.append(newRow);
};

*/
