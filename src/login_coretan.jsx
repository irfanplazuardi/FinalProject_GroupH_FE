import React from "react";
import backgroundImage from "../assets/astronaut.jpg";
import VogueSchoolLogoLarge from "../common/vogue_school_logo/logo_large";
import CustomInput from "../common/CustomInputLabel";

const LoginCoretan = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailExists = true;

    if (!emailExists) {
      setEmailError("There is no email registered yet.");
      setPasswordError("");
    } else {
      const correctPassword = true;

      if (!correctPassword) {
        setEmailError("");
        setPasswordError("Wrong password.");
      } else {
        setEmailError("");
        setPasswordError("");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div>
        <VogueSchoolLogoLarge />
        <div className="w-full max-w-md bg-white bg-opacity-75 p-8 rounded-2xl shadow-lg m-10">
          <h2 className="text-4xl font-semibold mb-8 text-left">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <CustomInput
                label="Username/Email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div className="mb-4">
              <CustomInput
                label="Password"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/create-account" className="text-blue-500">
              Create account now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCoretan;
