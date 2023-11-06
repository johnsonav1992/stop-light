import Light from "./components/Light/Light";

function App() {
  return (
    <div>
      <Light color={'green'}/>
      <Light color={'yellow'} disabled/>
      <Light color={'red'} disabled/>
    </div>
  );
}

export default App
