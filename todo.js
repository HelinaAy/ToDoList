let inputTask = document.getElementById("taskinput");
let add = document.getElementById("add");
let task = document.getElementById("task");
let date = document.getElementById("date")
let today = new Date();
let app= document.getElementById('app')
let form = document.getElementById('welform');
let welcomePage = document.getElementById('welcome');
let hello = document.getElementById('hello');
let submit = document.getElementById('submit');
let f = document.getElementById('f');
app.classList.add("blur");
submit.addEventListener('click', function(e){
    e.preventDefault();
    welcomePage.style.display="none";
    app.classList.remove("blur");
    hello.textContent = `Hello, ${f.value}  🌸`
})
date.textContent=today.toDateString();
add.addEventListener('click', function(e){
    let tasks = inputTask.value.trim();
    e.preventDefault();
    if (tasks === "") {
    alert("Please enter a task!");
    return;
}
    let card = document.createElement('div');
    card.className="card shadow-sm border-0 rounded-3 p-3 d-flex justify-content-center flex-row gap-4 align-items-center mt-3 mx-center";
    card.innerHTML = `
    <input type="checkbox" class="check">
    <p class="mb-0 flex-grow-1">${tasks}</p>
    <button class="btn btn-light btn-sm rounded-pill delete"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button> 
    <button class="btn btn-light btn-sm rounded-pill edit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></button><br/>
<br>
<small class="text-muted mb-0 comp">❤️Be proud of yourself!</small>
   
    `;
    task.appendChild(card);
    inputTask.value="";
    let complement = card.querySelector(".comp");
        complement.style.display="none";
    const checkbox = card.querySelector("input[type='checkbox']");
    const deleteBtn = card.querySelector(".delete");
    const editBtn = card.querySelector(".edit");
    checkbox.addEventListener('change', function(e){
        e.preventDefault();
        
        let para = card.querySelector('p');
        para.style.color = "gray";
        card.style.backgroundColor="#FFF7FA";
        para.style.textDecoration="line-through";
        complement.style.display="inline-block";
        


});
deleteBtn.addEventListener('click', function(){
   // card.innerHTML="";
   // card.className="";
   card.remove();
});
editBtn.addEventListener('click', function(){
    inputTask.value= card.querySelector('p').textContent;
    card.innerHTML="";
    card.className="";
    
})
})
