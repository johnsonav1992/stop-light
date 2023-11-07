import { StopLight } from "./components/StopLight/StopLight";

function App() {
  return (
    <div 
      style={{ 
        width: '100%'
        , display: 'flex'
        , alignItems: 'center'
        , flexDirection: 'column'
        , height: '100vh'
        , justifyContent: 'center'
        , backgroundColor: '#36454F'
        , margin: 0
        , padding: 0
    }}>
      <StopLight />
    </div>
  );
}

export default App
