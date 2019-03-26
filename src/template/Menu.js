import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function Menu (props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='http://localhost:8080'>
                        <i className='fas book-dead'></i>
                    </a>
                </div>

                <div id='navbar' className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'><a  className='nav-link' href='#/todos'><i className='fas dragon'></i>Tarefas</a></li>
                        <li className='nav-item'><a  className='nav-link' href='#/about'><i className='fas bullhorn'></i>Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Menu;