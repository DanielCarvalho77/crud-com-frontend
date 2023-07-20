const miniTwitter = {
    usuarios: [
        {
            username: 'daniel',
        }
    ],
    posts:[
        {
            id: 1,
            owner: 'daniel',
            content: 'minha publicação'
        }
    ]
};

//CREATE
function createPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });

    const timeline = document.querySelector('#timeline');
    timeline.insertAdjacentHTML('afterbegin', `<li class="list">${dados}</li>`);
}

createPost({owner: 'filisbino', content: 'Queria que o dólar estivesse mais baixo'})
console.log(miniTwitter.posts);

//READ
function readPost () {
    return miniTwitter.posts;
}
//console.log(readPost());


//UPDATE
function updatePost (id, novoConteudo){
    const postQueVaiSerAtualizado = readPost().find((post)=>{
        return post.id === id
    });
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoConteudo;
}

updatePost(1, 'Meu sonho é ter um Marea');


//DELETE
function deletePost (id){
    const listaDePostAtualizada =  readPost().filter((postAtual) =>{
        return postAtual.id !== id;
    });
    miniTwitter.posts = listaDePostAtualizada;
}

deletePost(1)

//export {createPost as create, readPost as read, updatePost as update, deletePost as delete}


