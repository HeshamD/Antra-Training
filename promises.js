const posts = [
    {
        title:'Post1',
        body:'This is post one'
    },
    {
        title:'Post2',
        body:'This is post two'
    }
];

function getPosts(){
    setTimeout(function(){ 

        let output = '';
        posts.forEach((post,index)=> {
            //add it to the output

            output += `<li> ${post.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000)//setTimeout takes a callBack Function
}

function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:');
            }
        },2000);
    }) 
}

createPost({title:'Post3', body:'This is post three'})
    .then(getPosts);