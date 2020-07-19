import React, { Component } from 'react';
import api from './api'

class App extends Component{

  state= {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');
    //console.log(response.data)
    this.setState({ filmes: response.data});
  }

  render(){

    const { filmes } = this.state;

    return(
      <div>
        <h1> listar os filmes </h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2><strong>Título: </strong>
            {filme.show.name}
            </h2>
            <p>
            {filme.show.url}
            </p>
          </li>
        ))}
      </div>
    );
  };
}
/*
function App() {
  return (
    <div>
      <h1>Listar</h1>
    </div>
  );

  }
  */

export default App;
