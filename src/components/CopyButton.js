import React from 'react';

const CopyButton = ({
    result
}) => {
    return (
        <>
            <input type='button' value="Copy" onClick={() => {
                navigator.clipboard.writeText(
                    result.cep+' '+
                    result.logradouro+' '+
                    result.complemento+' '+
                    result.bairro+' '+
                    result.localidade+' '+
                    result.uf+' '+
                    result.unidade+' '+
                    result.ibge
                )
            }
            }></input>
        </>
    )
}

export default CopyButton;