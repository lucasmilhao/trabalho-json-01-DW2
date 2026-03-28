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

const precosDolar = [30, 60, 100];
const precosReal = [130, 150,240];

const precosTicket = [precosDolar, precosReal];


const conviteShow = {
    titulo : "CASCADA NA REBOBI SUMMER ELETROPRIDE 2026",
    urlPoster : "https://res.cloudinary.com/shotgun/image/upload/v1767469562/production/artworks/Rebobi03jun-capa_vv8i9i.jpg",
    host : "Rebobinights",
    dataEvento,
    nomeLocal : "KOMPLEXO TEMPO",
    localizacao,
    precoTicket : precosTicket[1][0],
    qtdInteressados : 710,
    isInteressado : false,
    sysLang : "en-US"
}

const ticket1 = {
    titulo : "PISTA PROMO 4",
    valor : precosTicket[1][0],
    descricao : "Esse ingresso da acesso a pista promo 4",
    qtdSelecionada : 0,
    isOpen : false,
    moeda : "Real"
}

const ticket2 = {
    titulo : "PISTA PROMO 5",
    valor : precosTicket[1][1],
    descricao : "Esse ingresso da acesso a pista promo 5",
    qtdSelecionada : 0,
    isOpen : false,
    moeda : "Real"
}

const ticket3 = {
    titulo : "CAMAROTE 2° LOTE",
    valor : precosTicket[1][2],
    descricao : "Esse ingresso da acesso ao mezanino ao redor de toda a pista do Komplexo Tempo",
    qtdSelecionada : 0,
    isOpen : true,
    moeda : "Real"
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

console.log(menorValorTicket());

// console.log(tickets);
// console.log(conviteShow);
