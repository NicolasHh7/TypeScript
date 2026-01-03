//let film = 'Spider Man'
let films = ['Spider Man', 'Spider Man 2']
//let films: string[] = ['Spider Man', 'Spider Man 2']
//let numbers: number[] = [1,2,3,4,5]
//let films: Array<string> = ['Spider Man', 'Spider Man 2']
//let numbers: Array<number> = [1,2,3,4,5]

export function toUpperCaseString(arr: Array<string>){
    return arr.map(value => value.toUpperCase())
}
console.log(toUpperCaseString(films))
