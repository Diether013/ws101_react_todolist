import './App.css';
// import Navbar from './components/Navbar/navbar';
// import Hero from './components/Hero/hero';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
// import Footer from './components/Footer/footer';
// import HandlingFunction from './components/HandlingFunction';
// import HandlingClass from './components/HandlingClass';
// import IfCondition from './components/IfConditions';
//import Biodata from './components/Biodata/biodata';
//import TodoList from './components/todolist/todolist';
//import todolist from './components/todolist/todolist';
import Navbar from './navbar/navbar';
function App() {
    return (
        <div className="App">
        {/* <Navbar name="Diether" lastname="Adante" />
        <Hero message="Hello"/>
        <About />
        <Contact />
        <Footer />
        <HandlingFunction />
        <HandlingClass />
        <IfCondition /> 
        <TodoList />*/}
        <Navbar />
    </div>
    
    );

}
export default App;
