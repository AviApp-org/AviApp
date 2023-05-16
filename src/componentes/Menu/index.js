import Botao from '../Botao'
import './Menu.css'
const Menu = (props) =>{
    return(
       

        <section className="menu-principal">

                <Botao texto="Lote e Aviários" id="primeiro-botao"/>

                <Botao texto="Financeiro"/>

                <Botao texto="Geral"/>
                
                <Botao texto="Relatórios" id="relatorios"/>
              
                <Botao texto="Ajuda"/>

                <Botao texto="Configurações"/>

            <footer>
            </footer>
        </section>
      
        
    )
}
export default Menu