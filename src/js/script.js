const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item){
    item.addEventListener("click", function (){
        
        const itemAtivoAtual = document.querySelector(".ativo");//remover o ativo do item atual para Zeras as configurações
        
        if(itemAtivoAtual) { //validar caso o html não tenha nenhuma classe ativo na marcação
            itemAtivoAtual.classList.remove("ativo");
        }
            
        item.classList.add("ativo"); //adiciona ativo a LI clicada 
    });
});