document.addEventListener('DOMContentLoaded', () => {
    const linksMenu = document.querySelectorAll('header nav ul li a');
    const blocosVeiculos = document.querySelectorAll('.bloco-veiculo');

    // Função para mostrar o veículo e fazer o ecrã ir até ele
    function ativarVeiculo(idAlvo) {
        blocosVeiculos.forEach(bloco => {
            if (bloco.id === idAlvo) {
                bloco.classList.add('ativo');
                
                // Faz o navegador rolar suavemente até ao cartão que acabou de aparecer
                bloco.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            } else {
                bloco.classList.remove('ativo');
            }
        });
    }

    // Intercepta o clique nos links do menu superior
    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault(); 
                const idAlvo = href.substring(1); 
                ativarVeiculo(idAlvo);
            }
        });
    });

    // Ao carregar a página pela primeira vez
    if (blocosVeiculos.length > 0) {
        const hashInicial = window.location.hash ? window.location.hash.substring(1) : blocosVeiculos[0].id;
        ativarVeiculo(hashInicial);
    }
});