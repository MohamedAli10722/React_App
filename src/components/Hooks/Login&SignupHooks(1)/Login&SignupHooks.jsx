import React, { useState, useRef, useEffect } from "react";

function LoginSignupHooks() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isLogin]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      time: new Date().toLocaleString(),
    });
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div></div>

      {isLogin ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                ref={inputRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">submit Login</button>
            <button onClick={() => setIsLogin(false)}>Sign-up</button>
          </form>
          {submittedData && (
            <div className="output">
              <h3>Welcome: {submittedData.email}</h3>
              <p>You are logged in to the account at {submittedData.time}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Sign-up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                ref={inputRef}
                type="text"
                name="name"
                placeholder="Enter your UserName"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button type="submit">Submit Sign-up</button>
              <button onClick={() => setIsLogin(true)}>Login</button>
            </div>
          </form>
          {submittedData && (
            <div className="output">
              <h3>Welcome: {submittedData.name}</h3>
              <p>Your email is: {submittedData.email}</p>
              <p>You are signed up to the website at {submittedData.time}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginSignupHooks;
