import React from 'react';

import CopyButton from '../components/CopyButton';

import '../assets/w3schools.css';

const Result = ({
    result
}) => {
    return (
        <div class="w3-container w3-center w3-animate-opacity">
            <table class="w3-table-all">
                <tr>
                    <th>Cep</th>
                    <th>Logradouro</th>
                    <th>Complemento</th>
                    <th>Bairro</th>
                    <th>Localidade</th>
                    <th>Ce</th>
                    <th>Unidade</th>
                    <th>Ibge</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{result.cep}</td>
                    <td>{result.logradouro}</td>
                    <td>{result.complemento}</td>
                    <td>{result.bairro}</td>
                    <td>{result.localidade}</td>
                    <td>{result.uf}</td>
                    <td>{result.unidade}</td>
                    <td>{result.ibge}</td>
                    <td><CopyButton result={result} /></td>
                </tr>
            </table>
        </div>
    )
}

export default Result;