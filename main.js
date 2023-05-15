$(document).ready(function(){

    $('header button').click(function(e){
        $('.container').slideDown();
    })
    
    $('#recolher').click(function(e){
        $('.container').slideUp();
    })

    $('.container').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#colocando-nova-tarefa').val();
        const novaTarefa = $(`<li>${inputTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
  
        $(novaTarefa).on('click', function(){
            const liRisc = $(novaTarefa).toggleClass('riscado');
            
        })
        $('#colocando-nova-tarefa').val(' ');
       
    })
})
