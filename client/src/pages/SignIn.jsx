import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!email || !password) {
        return toast.error("Fill Out all fields");
      }
      const result = await axios.post("http://localhost:3000/api/v1/signin", {
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
        <h3>SignIn</h3>
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
        <p>
          <Link to="/forgotpassword">forgot Password?</Link>
        </p>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignIn;
