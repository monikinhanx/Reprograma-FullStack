import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {aberto: false}
    }

    abreOuFechaMenu = () => {
        // ev.preventDefault();
        if (this.state.aberto){
            this.setState({aberto:false})
        }else{
            this.setState({aberto:true})
        }
    }

    sair = () => {
        this.abreOuFechaMenu()
        this.props.deslogaUsuario()
    }

    render(){
        let classesDoBotao = 'navbar-menu__botao'
        let classesDasOpcoes = 'navbar-menu__opcoes'

        if (this.state.aberto){
            classesDoBotao += ' navbar-menu__botao--aberto'
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
        }
        
        return (            
            <nav className='navbar-menu'>
                 <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>Menu</button>
                 <ul className={classesDasOpcoes}>
                     <li>
                         <NavLink to='/quemsomos' activeClassName='navbar-menu__opcoes--ativo' onClick={this.abreOuFechaMenu}>Quem Somos</NavLink>
                     </li>
                     <li>
                         <NavLink to='/contato' activeClassName='navbar-menu__opcoes--ativo' onClick={this.abreOuFechaMenu}>Contato</NavLink>
                     </li>
                     {this.props.usuario ? (
                        <li>
                            <NavLink to='/login' activeClassName='navbar-menu__opcoes--ativo' onClick={this.sair}>Sair</NavLink>
                        </li>
                     ) : (
                        <li>
                        <NavLink to='/login' activeClassName='navbar-menu__opcoes--ativo' onClick={this.abreOuFechaMenu}>Login</NavLink>
                    </li>
                     )}                     
                 </ul>
            </nav>
        )
    }
}

export default Menu