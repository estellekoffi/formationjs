
/*
PROPOSITION DE GRAFIKAT QUI NE FONCTIONNE PAS CHEZ MOI
export async function fetchJSON (url, options = {} ){
    const headers = {Accept: 'application/json', ...options.headers}
    const data = await fetch(url, {...options, headers})
    if(data.ok){
        return data.json()
    }
    throw new Error('erreur serveur', {cause: data})
}
*/


export async function fetchJSON(url, options = {}){
  
    const data = fetch(url, {...options, 
        headers:{
            Accept : 'application/json'
        }
    })
    if(!data.ok){
        throw new Error('erreur')
    }
   
}

