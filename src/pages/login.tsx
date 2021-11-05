import { Layout } from '../components/Layout'
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch(process.env.NEXT_PUBLIC_AUTH_ENDPOINT, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    setEmail("");
    setPassword("");
  };

  return <Layout title="Login">
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="submit" value="Log In" />
    </form>
  </Layout>
}

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {    this.setState({value: event.target.value});  }
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>        <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
