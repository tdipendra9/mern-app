import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ExercisesList from "./component/ExerciseList";
import EditExercise from "./component/EditExercise";
import CreateExercise from "./component/CreateExercise";
import CreateUser from "./component/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}
export default App;
