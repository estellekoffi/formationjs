/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @returns {HTMLelement}
 */
export function attributeManage(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for(const [key, value] of Object.entries(attributes)){
        element.setAttribute(key,value)
    }
    return element
}