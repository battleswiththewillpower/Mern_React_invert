import Main from "./components/Main";
import './App.css';

let eachPerson = [
{"firstName": "Solange", "lastName": "Knowles", "age": 35, "hairColor":"Dark Brown"},
{"firstName": "Donna", "lastName": "Summer", "age": "dead", "hairColor":"Dark Brown"},
{"firstName": "Eartha", "lastName": "Kit", "age": "dead", "hairColor":"Dark Brown"},
{"firstName": "Dorothy", "lastName": "Danridge", "age": "dead", "hairColor":"Dark Brown"}

]

function App() {
  return (
    <div className="App">
      {eachPerson.map(person => {
        return <Main firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })}
      
    </div>
  );
}

export default App;
