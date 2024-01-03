import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/about");
  };
  const handleClick1 = () => {
    return navigate("/library");
  };
  const handleClick2 = () => {
    return navigate("/participate");
  };
  const handleClick3 = () => {
    return navigate("/ranking");
  };

  return (
    <div>
      <h1>login</h1>
      <button onClick={handleClick}>about</button>
      <button onClick={handleClick1}>library</button>
      <button onClick={handleClick2}>participate</button>
      <button onClick={handleClick3}>ranking</button>
    </div>
  );
};
