// Aguarda o carregamento total da página
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cartões de produtos
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(cartao => {
        // Efeito visual ao passar o mouse (hover dinâmico)
        cartao.addEventListener('mouseenter', () => {
            cartao.style.borderColor = '#ffffff'; // Muda a borda para branco temporariamente
            cartao.style.cursor = 'pointer';
        });

        cartao.addEventListener('mouseleave', () => {
            cartao.style.borderColor = '#FFFF2A'; // Volta para o amarelo original
        });

        // Simulação de compra ao clicar no cartão
        cartao.addEventListener('click', () => {
            const nomeProduto = cartao.querySelector('p').innerText;
            alert(`Você adicionou o ${nomeProduto} ao seu carrinho!`);
        });
    });
});