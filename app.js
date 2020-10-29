// Selectors 

const todoInput = document.querySelector('.todo-input');
const btn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners

btn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// window.addEventListener('DOMContentLoaded', getTodos)

// Functions 

function addTodo(event) {

      event.preventDefault();

      // create todo div
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      // create li
      const newTodo = document.createElement('li');
      newTodo.innerText = todoInput.value;
      newTodo.classList.add('todo-item')


      // add newTodo to new div 
      todoDiv.appendChild(newTodo);

      // clear input value after adding a new one

      todoInput.value = '';

      // save to local storage

      // saveLocalTodos(todoInput.value)

      //Check mark button 

      const completedBtn = document.createElement('button');
      completedBtn.innerHTML = `<i class="fas fa-check"></i>`
      completedBtn.classList.add('complete-btn');
      todoDiv.appendChild(completedBtn);

      //trash button 

      const trashBtn = document.createElement('button');
      trashBtn.innerHTML = `<i class="fas fa-trash"></i>`
      trashBtn.classList.add('trash-btn');
      todoDiv.appendChild(trashBtn);

      // add items to main todo list

      todoList.appendChild(todoDiv);
}


// delete or check item function


function deleteCheck(e) {
      const item = e.target;

      // Delete todo

      if (item.classList.contains('trash-btn')) {
            const todo = item.parentElement;
            // Animation
            todo.classList.add('fall');

            todo.addEventListener('transitionend', () => {
                  todo.remove();
            })
      }

      // Check mark

      if (item.classList.contains('complete-btn')) {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
      }

}


// filter type function

function filterTodo(e) {
      const todos = todoList.childNodes;
      todos.forEach(function (todo) {

            switch (e.target.value) {
                  case 'all':
                        todo.style.display = 'flex';
                        break;
                  case 'completed':
                        if (todo.classList.contains('completed')) {
                              todo.style.diplay = 'flex';
                        } else {
                              todo.style.display = 'none';
                        }
                        break;
                  case 'uncompleted':
                        if (!todo.classList.contains('completed')) {
                              todo.style.display = 'flex';
                        } else {
                              todo.style.display = 'none';
                        }
                        break;
            }

      })
}


// // local storage 

// function saveLocalTodos(todo) {
//       let todos;


//       if (localStorage.getItem('todos') === null) {
//             todos = [];
//       } else {
//             todos = JSON.parse(localStorage.getItem('todos'))
//       }

//       todos.push(todo);
//       localStorage.setItem('todos', JSON.stringify(todos));
// }

// function getTodos() {
//       let todos;

//       if (localStorage.getItem('todos') === null) {
//             todos = [];
//       } else {
//             todos = JSON.parse(localStorage.getItem('todos'))
//       }

//       todos.forEach(function (todo) {


//             // create todo div
//             const todoDiv = document.createElement('div');
//             todoDiv.classList.add('todo');
//             // create li
//             const newTodo = document.createElement('li');
//             newTodo.innerText = todo;
//             newTodo.classList.add('todo-item')


//             // add newTodo to new div 
//             todoDiv.appendChild(newTodo);

//             // clear input value after adding a new one

//             todoInput.value = '';

//             //Check mark button 

//             const completedBtn = document.createElement('button');
//             completedBtn.innerHTML = `<i class="fas fa-check"></i>`
//             completedBtn.classList.add('complete-btn');
//             todoDiv.appendChild(completedBtn);

//             //trash button 

//             const trashBtn = document.createElement('button');
//             trashBtn.innerHTML = `<i class="fas fa-trash"></i>`
//             trashBtn.classList.add('trash-btn');
//             todoDiv.appendChild(trashBtn);

//             // add items to main todo list

//             todoList.appendChild(todoDiv);
//       })
// }