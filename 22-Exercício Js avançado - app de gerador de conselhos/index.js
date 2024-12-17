const botao = document.getElementById("gerarConselho");
const conselho = document.getElementById("conselho");
const descricao = document.getElementById("descricao");

async function pegarConselho() {
try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
        throw new Error("Erro na chamada da API");
    }
    const data = await response.json();
    const conselho = data.slip;

    conselho.innerText = `ID do Conselho: ${conselho.id}`;
    descricao.innerText = `Conselho: ${conselho.advice}`;
    
} catch (error) {
    console.log('Erro ao pegar o conselho:', error);
}
}

botao.addEventListener('click', pegarConselho);

