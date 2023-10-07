const div = document.getElementById('list');
const ul = document.querySelector('ul');
const btn1 = document.getElementById('all');
const btn2 = document.getElementById('noDo');
const btn3 = document.getElementById('do');

async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    if(!data.ok){
        throw new error('erreur ' + error);
    }
    let todos = await data.json();
    for(let todo of todos){
        const li = document.createElement('li');
        li.textContent = todo.title;
        ul.append(li)
    }
}
function othersButton(element,text){
    const elmt = document.createElement(element);
    div.append(elmt);
    elmt.textContent = text;
}
btn1.addEventListener('click',function(){fetchData()},{
    once:true
});
btn2.addEventListener('click',function(){othersButton('h4','aucune tache selectionnee')})
btn2.addEventListener('click',function(){othersButton('h6','aucune tache effectuee')})

/*
document.querySelectorAll('button').forEach(
    button => button.addEventListener('click', function(event){
        //avec switch case
        switch(button.id){
            case 'all': fetchData();
                break;
            case 'noDo' :        
                const h4 = document.createElement('h4');
                div.append(h4);
                h4.textContent = 'aucune tache selectionnee';
                break;
            case 'do':
                const h5 = document.createElement('h5');
                div.append(h5);
                h5.textContent = 'aucune tache effectuee';
                break;
            default: console.log(event.currentTarget)
        }
        //avec if
        /*if(button.id == 'all'){
            fetchData()
        }else if(button.id == 'noDo'){
            const h4 = document.createElement('h4');
            div.append(h4);
            h4.textContent = 'aucune tache selectionnee';
        }else if(button.id == 'do') {
            const h4 = document.createElement('h4');
            div.append(h4);
            h4.textContent = 'aucune tache effectuee';
        }else{
            console.log(event.currentTarget)
        }
    }))
    */






