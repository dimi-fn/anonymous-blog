const form = document.querySelector('#post_form') // used in submitPost() at requests.js
form.addEventListener('submit', submitPost) // used in submitPost() at requests.js


// "Back" button: redirect to homepage
document.getElementById("homeButton").onclick = function () {
    location.href = "index.html";
};


// use the updateContent() function if there's a hash change in url by the user
window.addEventListener('hashchange', updateContent);


// update content based on post id associated with the hash location in url
function updateContent()
{
    let hash = window.location.hash.substring(1);

    //If there's hash (i.e. hash is not empty) then display the post based on that id
    if (hash)
    {
        renderPostbyId(hash);
        console.log(`hash is ${hash}`);
    }
    
}

// render post by given post's id based on the Location Hash associated with that id
async function renderPostbyId(id)
{
    // first clear all form input fields if any
    document.getElementById("post_form").reset();

    //initialize data from JSON reponse used below
    let data = "";

    // If the given id in hash isn't a number, redirect to homepage
    if (isNaN(id)) {
        window.alert("Hash location is not a number - please insert a number for a post id!");
        window.location.hash = "";
    }    

    else {
        // is hash is number, try to get the data from backend
        try
        {
            data = await getPostById(id); // function is in requests.js
            console.log("data is: ")
            console.log(data)
        }
        catch (err)
        {
            window.alert("The post for that id could not be found, redirecting to homepage");
            window.location.hash = "";
        }

        // set the value of the form's input fields based on the post id from the hash location
        document.getElementById("name").value = data.name;
        document.getElementById("title").value= data.title;
        document.getElementById("post").value = data.post;

        // if hash is regarding a post id out of range, then the form input fields will be undefined. In this case give an alert message for that
        if (document.getElementById("name").value == 'undefined' && document.getElementById("title").value == 'undefined' && document.getElementById("post").value == 'undefined' ) {
            window.alert("You inserted a post id that does not exist! Please try again!")
            document.getElementById("post_form").reset();
        }
    }
}


