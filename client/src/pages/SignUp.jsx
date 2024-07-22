import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!name || !password || !email) {
        return toast.error("Fill Out all fields");
      }
      const result = await axios.post("http://localhost:3000/api/v1/signup", {
        name,
        email,
        password,
      });
      toast.success(result.data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;
