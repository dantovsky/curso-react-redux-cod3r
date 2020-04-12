import React from 'react'

// O filho vai receber uma funcao como param através do props, e esta funcao podera ser chamada passando algum valor
export default props =>
    <div>
        <p>Etse botao será chamado sempre que o componente filho for avisar para o componente pai, que vai sair. E passa pro pai a dizer qual é o local que vai sair.</p>
        <p>O comp pai passa uma funcao via props, e no filho quando acontecer um evento, essa funcao é chamada de volta notificando o pai.</p>
        <button
            onClick={() => props.notificarSaida('praia')}>
            Vou Sair
        </button>

        {/* Se quisesse enviar um objeto com várias infos, no lugar da string, basta fazer:
        onClick={() => props.notificarSaida({"lugar": 'praia', "hora": 15})}>
        E no pai, basta aceder com "data.lugar" e "data.hora". */}
    </div>