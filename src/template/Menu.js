import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function Menu (props) {
    return (
        <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='http://localhost:8080'>
                        <i className='fas book-dead'></i>
                    </a>
                </div>

                <div className='collapse navbar-collapse' id='navbar'>
                    <ul className='nav navbar-nav'>
                        <li><a href='http://localhost:8080/todos'><i className='fas dragon'></i>Tarefas</a></li>
                        <li><a href='http://localhost:8080/about'><i className='fas bullhorn'></i>Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Menu;