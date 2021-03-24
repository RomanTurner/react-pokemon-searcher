import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  };


  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      sprites: {
        ...this.state.sprites,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.patchPokemon();
  }
  

  patchPokemon = () => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    fetch("http://localhost:3000/pokemon", configObj)
      .then((r) => r.json())
      .then(newPokemon => this.props.handleAdd(newPokemon))
      .catch((e) => console.error("E:", e));
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='Name'
              placeholder='Name'
              name='name'
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='hp'
              placeholder='hp'
              name='hp'
            />
            <Form.Input
              onChange={this.handleChange2}
              fluid
              label='Front Image URL'
              placeholder='url'
              name='front'
            />
            <Form.Input
              onChange={this.handleChange2}
              fluid
              label='Back Image URL'
              placeholder='url'
              name='back'
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
