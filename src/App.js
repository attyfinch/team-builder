import logo from './logo.svg';
import './App.css';
import Circus from './Form';
import React, { useState } from 'react';

const circusMembers = [
  { name: 'Marla Magnifico', act: 'Fire Eater', insurance: 'No' },
  { name: 'Mr. George', act: 'Lion Tamer', insurance: 'Yes' },
  { name: 'Boinky Booboo', act: 'Clown', insurance: 'No' }
]

function App() {
  const [members, setMembers] = useState(circusMembers);
  const [formValues, setFormValues] = useState({name: "", act: "", insurance: ""});


  const change = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
  };

  const submit = () => {
    setMembers(members.concat({name: formValues.name, act: formValues.act, insurance: formValues.insurance}));
    setFormValues({name: "", act: "", insurance: ""});
  }

  return (
    <div className="App-header">
      <h2>Sign up to be in the circus!</h2>
      <Circus submit={submit} change={change} values={formValues}/>
      <br></br>
      <hr></hr>
      <h4>Who's signed up so far:</h4>
      <div>
        { members.map((mem, idx) => {
          return (
            <div key={idx}>
              {mem.name} the {mem.act}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
