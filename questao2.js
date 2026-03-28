const dataEvento = {
    data : "2026-06-03",
    horarioInicio : 22,
    horarioFim : 6
}

const localizacao = {
    logradouro : "Avenida Henry Ford",
    numero : "511",
    bairro : "Parque da Mooca",
    estado : "São Paulo",
    UF : "SP",
    cep : "03109-001",
    pais : "Brasil"
}

const precosReal = [130, 150,240];

const precoDolar = (preco) => {
    return preco / 5;
}

const precoEuro = (preco) => {
    return preco / 7;
}

const ticket1 = {
    titulo : "PISTA PROMO 4",
    valor : precosReal[0],
    descricao : "Esse ingresso da acesso a pista promo 4",
    qtdSelecionada : 0,
    isOpen : false,
    moeda : "Real"
}

const ticket2 = {
    titulo : "PISTA PROMO 5",
    valor : precosReal[1],
    descricao : "Esse ingresso da acesso a pista promo 5",
    qtdSelecionada : 0,
    isOpen : false,
    moeda : "Real"
}

const ticket3 = {
    titulo : "CAMAROTE 2° LOTE",
    valor : precosReal[2],
    descricao : "Esse ingresso da acesso ao mezanino ao redor de toda a pista do Komplexo Tempo",
    qtdSelecionada : 0,
    isOpen : true,
    moeda : "Real"
}



const conviteShow = {
    titulo : "CASCADA NA REBOBI SUMMER ELETROPRIDE 2026",
    urlPoster : "https://res.cloudinary.com/shotgun/image/upload/v1767469562/production/artworks/Rebobi03jun-capa_vv8i9i.jpg",
    host : "Rebobinights",
    dataEvento,
    nomeLocal : "KOMPLEXO TEMPO",
    localizacao,
    precoTicket : ticket1.valor,
    qtdInteressados : 710,
    isInteressado : false,
    sysLang : "en-US"
}

const tickets = [ticket1, ticket2, ticket3];

// const menorTicket = tickets.sort((a, b) => a.valor - b.valor)[0];

const menorValorTicket = () => {
    let menor = Number.MAX_VALUE;

    tickets.map(e => {
        if(e.valor < menor) menor = e.valor;
    })

    return menor;
}

// console.log(menorValorTicket());

// console.log(tickets);
console.log(conviteShow);
