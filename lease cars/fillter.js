const list = document.querySelector('.tab__list')
const items = document.querySelectorAll('.tab__props')
function fillter(){
  list.addEventListener('click',event=>{
    const targetId = event.target.dataset.id
   
    switch(targetId){
      case 'car':
getItems(targetId)
        break
      case 'trucks':
        getItems(targetId)
     break
      case 'crossovers':
        getItems(targetId)
        break
      case 'electrified':
        getItems(targetId)
        break

    }
  })
}
fillter()

function getItems (className){
items.forEach(item=>{
  if(item.classList.contains(className)){
    item.style.display="grid"
  }
  else{
    item.style.display="none"
  }
})
}