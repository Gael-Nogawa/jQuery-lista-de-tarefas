$(document).ready(function(){

    $('header button').click(function(e){
        $('.container').slideDown();

    })
    
    $('#recolher').click(function(){
        $('.container').slideUp();
    })

    $('.container').on('submit', function(e){
        e.preventDefault();

        
        $('<ul>').appendTo('form');

        // não está passando o valor de <li>;
        $('<ul>').on('click', function(){
            const inputTarefa = $('#colocando-nova-tarefa').val();

            if (inputTarefa != inputTarefa){
                console.log(inputTarefa)
                const novaTarefa = $(`<li>${inputTarefa}</li>`);
                $(novaTarefa).appendTo('ul');
                console.log('elemento1');
                
                $(novaTarefa).on('click', function(){
                    const liRisc = $(novaTarefa).toggleClass('riscado');
                    console.log('elemento2')
                })
                $('#colocando-nova-tarefa').val(' ');
            }
        })
       
    })

   

})
