
import { attributeManage } from "./functions/dom.js";
try{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5',
        {
            headers: {
                Accept: 'application/json'
            }
        })
    if(!data.ok){
        throw new Error('erreur serveur')
    }
    const r = await data.json()
    console.log(r)

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




/*

import { fetchJSON } from "./functions/api.js";
import { attributeManage } from "./functions/dom.js";

try{
    const r = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    console.log(r)
}catch(e){
    const alert =  attributeManage('div', {
        class:'alert alert-danger',
        role: 'alert'
    })
    alert.innerText = 'impossible de recuperer cette adresse'
    document.body.append(alert)
}

*/