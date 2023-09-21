export function hello(){
    const hello = 'hello'
    return hello + 'mundo!!'
}

console.log(hello())


export function miFactorial(n){
    resultado = 1
    for (let i=1; i<=n;++i){
        resultado = i * resultado
    }
    return resultado
}
console.log(miFactorial(n))

