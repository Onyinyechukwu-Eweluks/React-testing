import "./App.css";
import Counter from "./Counter/Counter";
import Post from "./components/posts/Post";
import SignUpForm from "./signup-Form/SignUpForm";

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <Post />
    </div>
  );
}

export default App;
