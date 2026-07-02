document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------
    // 1. SISTEMA DE ZOOM (+ e -)
    // ------------------------------------
    let nivelZoom = 100; // Começa em 100%
    const corpoPagina = document.body;

    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');

    // Aumentar zoom
    btnZoomIn.addEventListener('click', () => {
        if (nivelZoom < 150) { // Limite máximo de zoom (150%)
            nivelZoom += 10;
            corpoPagina.style.fontSize = nivelZoom + '%';
        }
    });

    // Diminuir zoom
    btnZoomOut.addEventListener('click', () => {
        if (nivelZoom > 70) { // Limite mínimo de zoom (70%)
            nivelZoom -= 10;
            corpoPagina.style.fontSize = nivelZoom + '%';
        }
    });

    // ------------------------------------
    // 2. INTERATIVIDADE NOS PRODUTOS
    // ------------------------------------
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(cartao => {
        // Altera cor da borda ao passar o mouse
        cartao.addEventListener('mouseenter', () => {
            cartao.style.borderColor = '#ffffff'; 
            cartao.style.cursor = 'pointer';
        });

        cartao.addEventListener('mouseleave', () => {
            cartao.style.borderColor = '#FFFF2A'; 
        });

        // Alerta de compra ao clicar
        cartao.addEventListener('click', () => {
            const nome = cartao.querySelector('.nome-produto').innerText;
            alert(`🛒 ${nome} foi adicionado ao seu carrinho com sucesso!`);
        });
    });
});