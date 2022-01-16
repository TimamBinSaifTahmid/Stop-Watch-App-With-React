import logo from "./logo.svg";
import "./App.css";
import ProductList from "./projectList";
import {ProjectProvider} from "./projectContext"
import Form from "./Form"
function App() {
  return (
    <ProjectProvider>
     <div className="App">
      <ProductList />
      
      <Form/>
    </div>
    </ProjectProvider>
  );
}

export default App;
