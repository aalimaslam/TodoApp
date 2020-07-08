
function update(){

    const newDiv = document.createElement('div')
    const newInput = document.createElement('input');
    const editBtn = document.createElement("button")
    const input = document.getElementById('main');
    const value = input.value;
    const removeBtn = document.createElement("button")
    const container = document.getElementById('content');
container.appendChild(newDiv);
newDiv.setAttribute('class' , 'newDiv');
newDiv.appendChild(newInput);
newDiv.appendChild(editBtn);
newDiv.appendChild(removeBtn);
newInput.setAttribute('class' , 'newInput');
removeBtn.setAttribute('class' , 'removeBtn');
editBtn.setAttribute('class' , 'editBtn');
newInput.readOnly=true;
editBtn.innerHTML = '<i class="fa fa-edit"></i>'
removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
newInput.value = value;
editBtn.addEventListener('click',()=>{
    newInput.readOnly=false;
});
removeBtn.addEventListener('click' , ()=>{
    container.removeChild(newDiv);
})
}
