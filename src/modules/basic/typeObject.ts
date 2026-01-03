let person = {
    name: 'Jorge',
    age: 35,
    skills: ['JS', 'TS']
}
person.name = 'João'
person.age = 22
person.skills = ['JS', 'TS']

export function showPerson(person:{name: string, age: number, skills: string[]} ){
    console.log(person)
}
showPerson(person)
showPerson({name:  'João' , age: 22, skills: ['JS', 'TS']})