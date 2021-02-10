import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import CharacterList from "./CharacterList";
import Error from "./Error";
import Character from "./Character";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
		<div className="grid-container">
			<NavBar/>
			<div className="grid-content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={CharacterList} />
					<Route exact path="/characters/:zpage" component={CharacterList} />
					<Route exact path="/character/:id" component={Character} />
					<Route exact path='*' component={Error} />
				</Switch>
			</div>

			<aside className="grid-empty"></aside>

			<aside className="grid-empty2"></aside>
		</div>
    </Router>
  );
}

export default App;
