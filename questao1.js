const especialidades = 
    ["Lanches", "Frangos", "Carnes", "Marmitas", "Sorvetes", "Açaí", "vegano", "Italiana"];

const promocoesClube = ["Entrega R$10,00 off", "até R$10,00 Off com o Clube", "Presente de R$7"];

const loja1 = {
    titulo : "Cavanhas - Centro Histórico",
    logoUrl : "https://static.ifood-static.com.br/image/upload/t_low/logosgde/98943dfa-4bcf-4b8f-a79e-4bda4f9482a2/202407101129_kcbp_i.jpg",
    nota : 4.8,
    especialidade : especialidades[0],
    taxaEntrega : 12.99,
    promocoes : [promocoesClube[0]],
    minsEntrega : [37, 52],
    distanciaKm : 5.8,
    isEntregaGratis : false,
    isSuperRestaurante : true,
    cartoesAceitos : ["visa", "mastercard", "elo", "hipercard"],
    isEntregaParceira : false
};

const loja2 = {
    titulo : "A la minuta Zona Norte",
    logoUrl : "imagemGenericaDeALaMinutaIssoAi.png",
    nota : 4.5,
    especialidade : especialidades[3],
    taxaEntrega : 10,
    promocoes : [promocoesClube[1]],
    minsEntrega : [34, 44],
    distanciaKm : 1.6,
    isEntregaGratis : true,
    isSuperRestaurante : false,
    cartoesAceitos : ["visa", "mastercard", "elo", "hipercard", "banrisul", "alimentação", "refeição"],
    isEntregaParceira : true
};

const loja3 = {
    titulo : "Usina de Massas Pocket",
    logoUrl : "https://usinademassaspocket.com.br/wp-content/uploads/2024/04/logo-usina-pocket-bolso-amarelo.png",
    nota : 4.8,
    especialidade : especialidades[7],
    taxaEntrega : 9.9,
    promocoes : [promocoesClube[2]],
    minsEntrega : [35, 45],
    distanciaKm : 1.2,
    isEntregaGratis : false,
    isSuperRestaurante : false,
    cartoesAceitos : ["visa", "mastercard", "banrisul", "alimentação", "refeição"],
    isEntregaParceira : true
}

const lojas = [loja1, loja2, loja3];

const entregaGratis = lojas.filter(e => e.isEntregaGratis);
const aceitaRefeicao = lojas.filter(e => e.cartoesAceitos.includes("refeição"));
const entregaParceira = lojas.filter(e => e.isEntregaParceira)

console.log(lojas);
console.log(entregaGratis);
console.log(aceitaRefeicao);
console.log(entregaParceira);
