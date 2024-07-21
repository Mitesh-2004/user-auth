import { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
        <input type="text" placeholder="name" value={name} />
        <br />

        <input
          type="email"
          placeholder="email"
          autoComplete="off"
          value={email}
        />
        <br />
        <input type="password" placeholder="password" value={password} />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;
