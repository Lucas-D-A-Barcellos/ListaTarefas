function editar(id, desc_tarefa, pag) {

    let form = document.createElement('form')
    form.action = 'tarefa_controler.php?acao=atualizar&pag='+pag
    form.method = 'post'
    form.className = 'row'

    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'col-9 form-control'
    inputTarefa.value = desc_tarefa

    let inputId = document.createElement('input')
    inputId.type = 'hidden'
    inputId.name = 'id'
    inputId.value = id

    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'col-3 btn btn-info'
    button.innerHTML = 'Atualizar'

        form.appendChild(inputTarefa)
        form.appendChild(button)
        form.appendChild(inputId)        

    let tarefa = document.getElementById('tarefa_'+id)

    tarefa.innerHTML = ''

    tarefa.appendChild(form)

}

function excluir(id, pag) {

    location.href = 'tarefa_controler.php?acao=remover&id='+id+'&pag='+pag
    
}

function realizar(id, pag) {
    
    location.href = 'tarefa_controler.php?acao=realizar&id='+id+'&pag='+pag

}