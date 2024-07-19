import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Login from "./components/Login.jsx";

function App() {

  const handleLogin = (username, password) => {
    console.log('Username:', username);
    };

    return(
      <>
        <Login onLogin={handleLogin}/>
        <Header/>
        <Food/>
        <Footer/>
      </>
      
    );
}

export default App
