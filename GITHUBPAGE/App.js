const { useState } = React;
const rootElement = document.querySelector("#root");
const app = ReactDOM.createRoot(rootElement);
app.render(<App />);

function App() {
  const defaultMessage = useState("Hello World !!!");
  const reactVersion = useState(`React version: ${React.version}`);
  return (
    <>
      <h1>{defaultMessage}</h1>
      <h2>{reactVersion}</h2>
      <h3>
        <Component />
      </h3>
    </>
  );
}

function Component() {
  const defaultMessage = useState("Component are working");
  return <>{defaultMessage}</>;
}
