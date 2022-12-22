const posts = [
    {title:'Post One', body:'This is post one', createdAt:new Date().getTime()},
    {title:'Post One', body:'This is post one', createdAt:new Date().getTime()}

];
function getPost(){
    let output = '';
    for(let i=0; i<posts.length;i++){
        output +=`<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) / 100}seconds ago</li>`
    }
    document.body.innerHTML = output;
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error:something went wrong');
            }
        
        }, 2000);
    });   
}
function create4thPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error:something went wrong');
            }
        },1000);
    })
}
function deletePost(){
    return new Promise ((resolve,reject) => {
        setTimeout( () => {
            if(posts.length >0){
                const lastelement = posts.pop()
                resolve(lastelement);
            } else {
                reject('Array is empty now');
            }
        },1000);
    })
}
createPost({ title:'Post Three', body:'This is post three'})
create4thPost({title:'post four',body:'This is post four'})
.then(() => {
    getPost()
    deletePost().then((deletedElement) => {
        console.log(deletedElement)
        getPost();
        deletePost().then(() => {
            getPost();
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {
                    getPost();
                    deletePost().then(() => {})
                    .catch((err)=>{
                        console.log('Inside catch block', err)
                    })
                })
            })
        })
    })
})
.catch(err => console.log(err))

//PROMISE.ALL//
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
 setTimeout(resolve,2000,'Goodbye')
 );
 const promise4 = fetch
 ('https://jsonplaceholder.typicode.com/users').then(res =>
 res.json()
 );
 Promise.all([promise1,promise2,promise3,promise4])
 .then(values =>
    console.log(values)
    );
