$(document).ready(function(){

    $('header button').click(function(e){
        $('form').slideDown();

    })
    
    $('#recolher').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#colocando-nova-tarefa').val();
        console.log(inputTarefa)
        const novaTarefa = $(`<li>${inputTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        $('#colocando-nova-tarefa').val('');
    })
    
    $('.ul-body').click(function(){
        const inputTarefa = $('#colocando-nova-tarefa').val();

        const riscarTarefa = $(`<li>${inputTarefa}</li>`);
        $(riscarTarefa).addClass('riscado');
        console.log(riscarTarefa);

    })

})