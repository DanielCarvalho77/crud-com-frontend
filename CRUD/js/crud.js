const posts = [];


//CREATE
function createPost(dados){
    posts.push(dados);

    const timeline = document.querySelector('#timeline');
    timeline.insertAdjacentHTML('afterbegin', `<li class="list">${dados}</li>`);
}

//createPost({owner: 'filisbino', content: 'Queria que o dólar estivesse mais baixo'})
//console.log(posts);

//READ
function readPost () {
    return posts;
}
//console.log(readPost());


//UPDATE
function updatePost (dados){
    const postQueVaiSerAtualizado = readPost().find((dados)=>{
        return dados === dados
    });
   // console.log(postQueVaiSerAtualizado);
    //postQueVaiSerAtualizado.dados = novoConteudo;
}

updatePost(1, 'Meu sonho é ter um Marea');


//DELETE
function deletePost (dados){
    const listaDePostAtualizada =  readPost().filter((postAtual) =>{
        return postAtual.dados !== dados;
    });
    //posts = listaDePostAtualizada;
}

deletePost(1)

export {createPost as create, readPost as read, updatePost as update, deletePost as delete}


