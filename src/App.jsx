import "./App.css";

function App() {
	return (
		<div className="navbar bg-primary">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Trundle</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Link</a>
					</li>
					<li>
						<a>Link</a>
					</li>
					<li>
						<a>Link</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
