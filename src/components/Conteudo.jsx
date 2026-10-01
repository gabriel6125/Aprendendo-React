function Conteudo(){
    function clicouNoBotao(){
        alert("Clicou no botao")
    }

    let nome = "Sem nada"

    let clicouNoBotao2 = () => {
        alert("Clicou no botao 2")
    }
    return(
        <main>
            <h2>Meu nome é Gabriel Chaves</h2>
            <h3> Sou programador</h3>
            <button onClick={() => { nome = "Gabriel Chaves Silva" }} onMouseOver={ () => { alert ("Mouse por cima")}}>Clique aqui para mostrar seu nome</button>
            <p>{nome}</p>
        </main>
    )
}

export default Conteudo