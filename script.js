console.log("hello js");

let todoInput = document.querySelector(".todo-input");
let todoUl = document.querySelector(".todo-ul");

todoInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (todoInput) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `
   ${todoInput}
   <span>X</span>`;

  listItem.addEventListener("click", function () {
     this.classList.toggle("done");
  });

  listItem.querySelector('span').addEventListener("click",function(){
    listItem.remove();
  })
  todoUl.appendChild(listItem);
};



// btn.addEventListener('click',function(){

//     let inputValue =  addTodo.value;
//     todoLists.append(inputValue);
//     if(inputValue !== ''){
//         todoLists.style.display = 'block'
//     }else{
//         todoLists.style.display = 'none'
//     }
//     addTodo.value = '';

// });

// deleteBtn.addEventListener('click',function(){
//     todoLists.style.display = 'none';
//     addTodo.value = '';
//     todoLists.innerText = '';
// })



// calculator
