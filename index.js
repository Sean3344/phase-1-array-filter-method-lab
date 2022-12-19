
function findMatching(array, soughtName) { 
    return array.filter(name => name.toUpperCase() === soughtName.toUpperCase())
    


}
function fuzzyMatch(array, string) {
    return array.filter(name => name.indexOf(string) === 0)
}

function matchName(array, string) {
    return array.filter(Object => Object.name === string)
    
}