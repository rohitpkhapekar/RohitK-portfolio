//This file contatins 'ACTION-CREATOR' functions 
//
export const getRandomNumbers = (term) => {
    return {
        type: "DISPATCH_NUMBERS",
        payload: term
    }
}
