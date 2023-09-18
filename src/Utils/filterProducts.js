export const filterByClass = (array, classesArray) => {

    if(classesArray.length === 0) {return array}
    
    let newArray = []
    
    for(let singularClass of classesArray) {
        newArray.push(...array.filter(element => element.class == singularClass))
    }
    
    return newArray
}

export const filterBySearch = (array, string)=> {

    const search = string.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    if(search === "") {return array}

    let filteredArray = array.filter(e=>{

        const words = e.description.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');

        const searchWords = search.split(' ');

        return searchWords.every(searchWord => words.some(word => word.includes(searchWord)));
    })

    return filteredArray
}