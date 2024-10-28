async function quantidadeUsuarios() {
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    const data = [
        {
           x : nomeDasRedes,
           y : quantidadeUsuarios,
           type: 'bar' 
        }
    ]
    const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(graficos)
        Plotly.newPlot(grafico, data)
    


    console.log(dados)
}
quantidadeUsuarios()