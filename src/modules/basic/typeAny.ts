// Tira a estática da variável
const file  ={
    name: 'lista_de_funcionarios.txt',
    size: 67321231253,
};

export function handleFileUpload(file: any){
    console.log('Nome: ' + file.name)
    console.log('Tamanho: ' + file.size)
}
//handleFileUpload({name: 'lista_de_funcionarios.txt'});
handleFileUpload(file)