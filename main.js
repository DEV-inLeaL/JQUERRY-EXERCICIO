$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        const listaDeTarefas = $('#Tarefa').val();
        const listaNaoOrd = $(".lista");
        $(`<li>${listaDeTarefas}</li>`).appendTo(listaNaoOrd); 
        
    
    })
    $('.lista').on("click", "li", function(){
        $(this).toggleClass('riscado');  })

    })


