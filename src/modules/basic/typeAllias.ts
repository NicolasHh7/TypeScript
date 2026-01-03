type Salary = number | string;

type Person = {
    name: string, 
    age: number, 
    skills: string[],
    salary: Salary
}
export function showPerson(person: Person){
    console.log(person)
}
showPerson({
    name: 'Jorge',
    age: 35,
    skills: ['JS', 'TS'],
    salary: 1200
})