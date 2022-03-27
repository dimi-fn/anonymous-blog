const db = require('../dbConfig/init');


class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.post = data.post;
    };

     // get all posts
     static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts;`);
                let posts = postData.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject(`Post not found, error: ${err}`);
            }
        });
    };

        // find single post by id and return it
      static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * 
                                                    FROM posts
                                                    WHERE posts.id = $1;`, [ id ]);                                                  
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject(`Post not found, error: ${err}`);
            }
        });
    };

    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                
                /* 
                "const { title, name, post} = postData;" below is like doing:
                let title = postData["title"]
                let name = postData["name"]
                let post = postData["post"]                
                */
                const { title, name, post} = postData;
                let result= await db.query(`INSERT INTO posts (title, name, post)    
                VALUES($1, $2, $3) RETURNING *;`,[title, name, post]);
                console.log(result)                
                resolve (result.rows[0]);
            } catch (err) {
                reject(`Post could not be created, error: ${err}`);
            }
        });
    };
};


module.exports = Post;
