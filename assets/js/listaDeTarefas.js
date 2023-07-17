const criarTarefa = (evento) => {
    
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const lista = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    lista.appendChild(tarefa)
    
    tarefa.innerHTML = conteudo
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)