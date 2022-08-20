// aqui va todo el código

/* const btnElement = document.getElementById("add-task-btn")
console.log(btnElement)

if(btnElement){
    btnElement.addEventListener("click", function(){

    })
} */
//agarrar el elemento form
const taskListElement = document.getElementById("task-list")
const deleteTask = (id) =>{
    //console.log("holaaaaaaaaaaaaaaaaaaaaaa")
    const taskListElement = document.getElementById("task-list")
    const elementToDelete = document.getElementById(id)
    taskListElement.removeChild(elementToDelete)
    init()
}

const formElement= document.getElementById("task-form")

const btnClearAll = document.getElementById("btn")
btnClearAll.style.display = "none"
const inputElement = document.getElementById("taskName")
const taskDateElement = document.getElementById("taskDate")    
const selectElement = document.getElementById("taskPriority")
if(formElement){
    //modificar el evento
    
    formElement.addEventListener("submit",function(event){
        event.preventDefault()
        
        
        
        if(inputElement.value !== "" && taskDateElement.value !== ""){
            // agarrar el elemento de la lista
            
            



            const taskListElement = document.getElementById("task-list")
            const taskListTitle= document.getElementById("card-title")
            


            console.log(selectElement.value)
            console.log(inputElement.value)
            console.log()
            const myDate= Date.parse(taskDateElement.value)

            

            let  mayorId= 1

            if(taskListElement.children.length > 0){
                const ultimoHijo= taskListElement.children[taskListElement.children.length - 1]
                mayorId += parseInt(ultimoHijo.id)
            }
            let backgroundColor = ""

            if(selectElement.value < 3){
                backgroundColor = "background-color: blue; color: white;"
            }else if(selectElement.value > 2 && selectElement.value < 5 ){
                backgroundColor = "background-color: yellow; "
            }else{
                backgroundColor = "background-color: red; color: white;"
            }
            
        
            
            taskListElement.innerHTML +=`
                <li id="${mayorId}"  class="list-group-item d-flex justify-content-between align-items-center"
                style="word-break: keep-all; ${backgroundColor}">
                    <div class="mx-2 text-start" style="flex: 1;">
                        <div class="fw-bold">${inputElement.value}</div>
                        <div class="fw-bold">${taskDateElement.value}</div>                        
                    </div>
                    <span class="badge bg-primary rounded-pill mx-1">${selectElement.value}</span>
            
                    <button onclick="deleteTask(${mayorId})" type="button" class="btn btn-outline-danger btn-sm">
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                        </svg>
                    </button>
                </li>
            `
            

            
            init()
        }else{
            alert("Debe especificar una tarea y fecha")
        } 
    })

}



const alerta=() =>{
    const music = new Audio('Audio Sound Effect.mp3')
    const opcion = confirm("desea eliminar")
    if (opcion == true) {
        taskListElement.innerHTML = ""
        music.play()
        init()
    }

}


const contadorTask = document.getElementById("card-title")
init = () =>{
    if(taskListElement.children.length !== 0){
        btnClearAll.style.display = "block"
    }
    contadorTask.innerHTML = `Listado de tareas :${taskListElement.children.length}`

    inputElement.value = ""
    taskDateElement.value = ""
    selectElement.value = 5

}
init()



// extraer los datos nombre de la tarea y prioridad



// agregar el nuevo hijo

{/* <li class="list-group-item d-flex justify-content-between align-items-center"
    style="word-break: keep-all;">
        <div class="mx-2 text-start" style="flex: 1;">
            <div class="fw-bold">Pasear al perro</div>
        </div>
        <span class="badge bg-primary rounded-pill mx-1">2</span>

        <button type="button" class="btn btn-outline-danger btn-sm">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
            </svg>
        </button>
</li> */}