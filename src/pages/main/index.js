import React, { Component } from 'react';
//Importa o arquivo de referência da API
import api from '../../services/api';

import './styles.css';

export default class Main extends Component{
    state = {
        tasks: [],
    }

    //Chama a função de carregamento das tarefas assim que a página é carregada
    componentDidMount(){
        this.loadTarefas();
    }

    //Função que carrega as tarefas da API
    loadTarefas = async ()  => {
        const response = await api.get("/listar");

        this.setState({ tasks: response.data});

        //Mostra no console o retorno da API
        console.log(response.data);
    };

    render() {
        //Busca as tasks do state 
        const { tasks } = this.state;

        return(
            <div className="task-list">
                { tasks.map ( task => (
                    <article key={task.CodTarefa}>
                        <strong>{task.CodTarefa} - {task.TituloTarefa}</strong>
                        <p>Descrição: {task.DescTarefa}</p>
                        <p>Status: {task.StatusTarefa}</p>

                        <a href="">Editar Tarefa</a>
                        <a href="">Excluir Tarefa</a>
                    </article>                
                ))}
            </div>
        )
    }
}