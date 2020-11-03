export default (props) => {
    // Encontrar o elemento <Else> que está dentro de <If>
    const elseChild = props.children.filter((child) => {
        return child.type && child.type.name === "Else";
    })[0]; // Como isto retorna um array, pegamos o 1º elem do array

    // Todos os elementos filhos que não sejam o Else
    const ifChildren = props.children.filter((child) => {
        return child !== elseChild;
    });

    // console.log("elseChild :: ", elseChild);

    if (props.test) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    } else {
        return false;
    }
};

export const Else = (props) => props.children;

/* A ideia eh mostrar os filhos de um coponente a depender de uma condição

Exemplo:

<If test={aluno.nota >= 7}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</If>

*/
