
const { criarContato, removerContato, listarContato } = require('./functions.js');

test('verificar se a lista esta vazia', function () {
    removerContato();
    var lista= listarContato();
    expect(lista).toBe('Lista está vazia');

})

test('deve criar contato', function () {

    var contatos = criarContato('douglas', 'Y3LmV@example.com', '11 99999-9999');

    expect(contatos.nome).toBe('douglas');
    expect(contatos.email).toBe('Y3LmV@example.com');
    expect(contatos.telefone).toBe('11 99999-9999');

})


 test('deve remover contato', function () {

    var contatos = criarContato('remover contato', 'Y3LmV@example.com', '11 99999-9999');

     removerContato(contatos.id);

    var lista = listarContato(contatos);

    expect(lista).not.toContain(contatos);
 })


 test('deve verificar se o contato foi criado', function () {
   var contatos = criarContato('verificar contato', 'Y3LmV@example.com', '11 99999-9999');

     var lista = listarContato();
     expect(lista).toContain(contatos);

 })


    test('deve verificar se o compo nome esta vazio', function () {

        var contatos = criarContato('', 'Y3LmV@example.com', '11 99999-9999');

        expect(contatos).toBe('Nome é obrigatório');
  
    })

   
   
    test('deve verificar se o campo email esta vazio', function () {
         
        var contatos = criarContato('douglas', '', '11 99999-9999');
        expect(contatos).toBe('E-mail é obrigatório');
    })

    
    test('deve verificar se o campo telefone esta vazio', function () {
         
        var contatos = criarContato('douglas', 'Y3LmV@example.com', '');
        expect(contatos).toBe('Telefone é obrigatório');
    })


    test ('verificar se o contato foi encontrado', function () {
        removerContato();
        var lista= listarContato();

        expect(lista).not.toContain('Contato não encontrado');
    })

   