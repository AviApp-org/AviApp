import './Botao.css'

const Botao = (props) => {
    return (
        <a>
            <button className='botao' id={props.id}>
                {props.texto}
            </button>
        </a>
    )
}
export default Botao