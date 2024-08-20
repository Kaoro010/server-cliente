const { processarRequisicao } = require ('./server');

function solicitarConsulta(titulo) {
    const requisicao =  { acao: 'CONSULTAR', titulo }
    const resposta = processarRequisicao(requisicao)
    console.log('resposta:', resposta)
}

function solicitarListagem() {
    const requisicao = {acao: 'LISTAR'};
    const resposta = processarRequisicao(requisicao);
    console.log('lista de titulos:', resposta);
}

function solicitarAdicao(titulo, categoria) {
    const requisicao = { acao: 'ADICIONAR', titulo, categoria }
    const respostaServidor = processarRequisicao(requisicao)
    console.log('resposta do servidor:', respostaServidor);
}

solicitarConsulta('LionsDev')
solicitarListagem()
solicitarAdicao('Harry Potter', 'livros')
solicitarListagem()