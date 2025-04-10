document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessbilidade.classList.toggle('apresenta-lista');
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';
    
    botaoDeAcessibilidade.setAttribute('aria-expended' , botaoSelecionado)

    })
    
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte')
    const diminiFonteBotao = document.getElementById('diminir-fonte')
    
    const alternaconstraste = document.getElementById('alterna-constraste')
    
    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener("click", function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })

    diminiuFonteBotao.addEventListener("click", function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })

    alternaConstraste.addEventListener("click", function(){
        document.body.classList.toggle('alto-contraste')
    })
 
})

ScroollReveal().Reveal('#inicio', {delay: 500 });
ScroollReveal().Reveal('#tripicalia', {delay: 500 });
ScroollReveal().Reveal('#galeria', {delay: 500 });
ScroollReveal().Reveal('#contato', {delay: 500 });
