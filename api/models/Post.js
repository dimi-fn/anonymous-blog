// const db = require('../init');
const db = require('../init');


class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.post = data.post;
    };

     // 
     static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts;`);
                let posts = postData.rows.map(b => new Post(b));
                
                resolve (posts);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

      static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * 
                                                    FROM posts
                                                    WHERE posts.id = $1;`, [ id ]);                                                  
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                const { title, name, post} = postData;
                let result= await  db.query(`INSERT into posts (title, name, post)    
                VALUES($1, $2,  $3) RETURNING *; `,[title, name, post]);                
                resolve (result.rows[0]);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };
};


module.exports = Post;
