import Icon from './Icon';

function App() {
  return (
    <div
      style={{
        background: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name="arrow-down" color="red" size={35} />

      <Icon name="arrow-left" color="red" size={35} />

      <Icon name="arrow-right" color="white" size={35} />

      <Icon name="arrow-right" color="blue" size={35} />
    </div>
  );
}

export default App;
