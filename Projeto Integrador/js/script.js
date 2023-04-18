window.scrollTo(0, 0);
function $(objeto){
    // alert("AAAAAAA");
    return document.querySelector(objeto);
}
function $$(objeto){
    return document.querySelectorAll(objeto);
}

$(".carrinho_button").addEventListener('click', function(){
    $(".carrinho_invisivel").classList.add("carrinho_move");
})
$(".topo_carrinho img").addEventListener('click', function(){
    $(".carrinho_invisivel").classList.remove("carrinho_move");
})