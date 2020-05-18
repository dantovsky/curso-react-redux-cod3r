import './App.css'
import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

const tag = <strong>Hello World!</strong>;

// Posso esportar a função de 2 maneiras:
// export default retornando função nomeada ou anônima
// export function para retornar funcao anonima
export default () =>
    <div id="App">
        <h1>Fundamentos React</h1>
        <strong>Olá React!!!</strong> {tag}

        <div className="Cards">

            <Card titulo="Aula 34 (ex #12) - Componente Classe (Contador)" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="Aula 33 (ex #11) - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="Aula 31 (ex #10) - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="Aula 30 (ex #09) - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="Aula 27 (ex #08) - Rendericazao Condicional #01" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'fer@nando.com' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>

            <Card titulo="Aula 25 (ex #07) - Exercício Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="Aula 24 (ex #06) - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Aula 22 (ex #05) - Componentes com filhos" color="#00C8F8">
                <Familia sobrenome="Silva" >
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="Aula 17 - Desafio Número Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Aula 14 - Props são somente leitura (solução com React.Fragment)" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="Aula 13 - componente com props" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Dante"
                    nota={9.3} />
                <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={6.9} />
            </Card>

            <Card titulo="Aula inicial" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>

