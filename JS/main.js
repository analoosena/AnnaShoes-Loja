$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('#carousel-loja').carousel({
        interval: 2500 
    });

    $('#form-contato').validate({
        rules:{
            nome:{
                required: true,
            },
            mensagem:{
                minlength: 3
            }
        },
        messages:{
            nome:{
                required: "Você esqueceu de colocar seu nome",
            },
            mensagem:{
                minlength: "Escreva algo com mais de 3 caracteres"
            } 
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
})