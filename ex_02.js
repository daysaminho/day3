function findHousing(housingToFind, housingList) {
    let index = 0;

    
    while (index < housingList.length) {
        
        if (housingList[index] === housingToFind) {
            
            return [index, housingList[index]];
        }
        index = index + 1;
    }

   
    return null;
}

