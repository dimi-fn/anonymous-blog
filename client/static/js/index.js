const form = document.querySelector('#post_form') // used in submitPost()
form.addEventListener('submit', submitPost) // used in submitPost()


// get all posts
async function getAllPosts()
{
    try
    {
        const response = await fetch (`http://locahost:3000/posts`);
        let data = await response.json();
        return data;
    }
    catch (err)
    {
        console.log(`Failed to get posts for reason: ${err}`);
        window.alert(`Failed to get posts for reason: ${err}`);
    }
}

// get individual post
async function getPostById(id)
{
    try 
    {
        const response = await fetch (`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    }
    catch
    {
        console.log(`Failed to get post for reason: ${err}`);
        window.alert(`Failed to get post for reason: ${err}`);
    }
}

// Create a new post
async function submitPost(e)
{
    e.preventDefault();

    let titleInput = document.getElementById("title").value;
    let nameInput = document.getElementById("name").value;
    let postInput = document.getElementById("post").value;
    console.log(titleInput, nameInput, postInput);

    // Post validation based on the sql setup
    /*The following is not needed because the "required" html attribute handles those cases
    if (titleInput === "" || nameInput === "" || postInput === "" )
    {
        alert("Please fill out all fields in the form");
    }
    */
    if (titleInput.length > 100)
    {
        window.alert(`Title length too long! ${titleInput.length} characters were given but only 100 can be accepted`);
    }
    else if (nameInput.length > 50 )
    {
        window.alert(`Name length too long! ${nameInput.length} characters were given but only 50 can be accepted`);
    }
    else if (postInput.length > 300)
    {
        window.alert(`Post length too long! ${postInput.length} characters were given but only 300 can be accepted`);
    }
    // else if post validation is successful:
    else
    {
        try
        {
            const options = 
            { 
            method: 'POST', 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
            };

            const response = await fetch ("http://localhost:3000/posts",options);
            const data = await response.json();

            if(data.err)
            {
                throw Error(data.err)
            }
            else
            {
                // redirect to the post hash
                window.location.hash = `#${data.id}`;
                console.log(window.location.hash);
                console.log(data)
            }
        }
        catch (err)
        {
            console.log("Failed to create post :" +err);
            alert("Failed to create post:" +err);
        }
    }
}
