// .tsx = TypeScript XML | .jsx = JavaScript XML
// PascalCase


function Msg() {
    const nm = 'Arthur Ferreira'

    if (nm) {
       return <h2>Feito por {nm}</h2>
    }

    return (
        <h2>Mensagem em React</h2>
    )
}

export default Msg