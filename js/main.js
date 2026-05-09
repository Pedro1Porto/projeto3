$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('#nome').attr('placeholder', 'Nome Completo');
    $('#mensagem').attr('placeholder', 'Feedbacks, Sugestões etc.')

    $('#formulario').validate({
        rules: {
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true
            },
            mensagem:{
                required: false
            }
        },
        messages: {
            nome: 'Insire o seu nome !',
            telefone: 'Insira o seu número de telefone !',
            email: 'Insira o seu email !'
        },

        invalidHandler: function(e, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Possui ${camposIncorretos} campos a serem preenchidos`)
            }
        },

        submitHandler: function(form){
            alert('Formulário enviado!')
        }
    })

})