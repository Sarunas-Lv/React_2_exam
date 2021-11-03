import StarterPage from './components/pages/StarterPage';

function App() {
  const newDate = new Date().getFullYear();
  return (
    <>
      <header>To exit modal hit Esc button</header>
      <StarterPage />
      <footer>Copyright &copy;{newDate}</footer>
    </>
  );
}

export default App;
