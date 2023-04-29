window.scrollTo(0, 0);
function $(objeto){
    // alert("AAAAAAA");
    return document.querySelector(objeto);
}
function $$(objeto){
    return document.querySelectorAll(objeto);
}

$(".carrinho_button").addEventListener('click', function(event){
    $(".carrinho_invisivel").classList.add("carrinho_move");
})
$(".topo_carrinho img").addEventListener('click', function(event){
    $(".carrinho_invisivel").classList.remove("carrinho_move");
})

function maisUm(event){
    let valor = event.target.parentNode.parentNode.querySelector(".quantiaProduto > p");
    valor.textContent = parseInt(valor.textContent) + 1;
}
function menosUm(event){
    let valor = event.target.parentNode.parentNode.querySelector(".quantiaProduto > p");
    valor.textContent = parseInt(valor.textContent) - 1;
}
let varExibirFavoritos = 0;
function exibirFavoritos(event){
    if (varExibirFavoritos === 0){
        $(".favoritados").classList.remove("favoritadosInvisiveis");
        varExibirFavoritos = 1;
        return;
    }
    $(".favoritados").classList.add("favoritadosInvisiveis");
    varExibirFavoritos = 0;
}
let chat = 0;
function toogleChatBot(event){
    if (chat == 0){
        $(".chatbot").classList.add("chatbotAparece");
        chat = 1;
        return;
    }
    $(".chatbot").classList.remove("chatbotAparece");
    chat = 0;
}

