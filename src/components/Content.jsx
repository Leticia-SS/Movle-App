import Card from "./Card"

const Content = () => {
    return(
        <main>
            <div className="main-background">
                <h1>Movle App</h1>
            </div>
            <div>
                <h2>Modos de Jogo</h2>
                <Card title='Jogo da Forca' subtitle='Desafie seu vocabulário e raciocínio rápido em um jogo de Forca'/>
                <Card title='Trivia de filmes' subtitle='Responda a questões sobre filmes, como nome de atores, diretores, anos de lançamento e frases icônicas, e teste seus conhecimentos cinematográficos!'/>
                <Card title='Adivinhe o Ator' subtitle='Veja uma lista de filmes e tente descobrir qual ator ou atriz está presente em todos eles!'/>
                <Card title='Encaixe de Poster' subtitle='Combine os pôsteres com os títulos corretos dos filmes!'/>
            </div>
        </main>
    )
}

export default Content