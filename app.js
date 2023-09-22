import { attributeManage } from "./functions/dom.js"

const ul = document.createElement('ul');
ul.setAttribute('classs','list-group');
ul.innerHTML;
document.getElementById('list').append(ul)
/* const li = document.createElement('li')
li.setAttribute('class', 'list-group-item')
li.innerHTML
ul.append(li) */


/**
 * 
 * @param {object} todos 
 */
function addChecked(){
   for(let todo of todos){
      document.querySelectorAll('input').forEach(element =>{
         element.addEventListener('change',(e)=>{
            if(e.currentTarget.checked === true){
              
            }
   
         })
          
         })
   }
  
   }
/**
 * fonction fetchJSON pour recuperer toutes les todos de l'api
 */
async function fetchJSON(){
   try{
      const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
      hearders:{
         Accept:'application/json'
      }
   })
   if(!data.ok){
      throw new error('erreur serveur')
   }
   const todos = await data.json()
   for(let todo of todos){

      const li = document.createElement('li')
      li.setAttribute('class', 'list-group-item mb-2')
      li.innerText = todo.title
      ul.append(li)

      const span = document.createElement('span')
      span.setAttribute('class','m-1')
      span.innerHTML
      li.prepend(span)

      const input = document.createElement('input')
      input.setAttribute('type','checkbox')
      input.innerHTML
      span.append(input)
   }
   for(let element of todos){

      document.getElementById('do').addEventListener('click', (e)=>{
         
      const input = document.createElement('input')
      input.setAttribute('type','checkbox')
      input.innerHTML
      input.addEventListener('change', (e)=>{
         if(e.currentTarget.checked === true){
            
         }
      })
      const li = document.createElement('li')
      li.setAttribute('class', 'list-group-item mb-2')
      li.innerText = element.title
      ul.append(li)

      const span = document.createElement('span')
      span.setAttribute('class','m-1')
      span.innerHTML
      li.prepend(span)

      span.append(input)
      })
   }
}catch(e){

   const alert =  attributeManage(
      'div', {
      class:'alert alert-danger',
      role: 'alert'
  }
  )
  alert.innerText = 'impossible de recuperer cette adresse'
  document.body.prepend(alert)
}
 }


fetchJSON()