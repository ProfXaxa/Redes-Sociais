const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInfomacoesGlobais() {
    const res = await fetch(url)
    const dados = res.json()
    console.log(dados);    
}
visualizarInfomacoesGlobais()
