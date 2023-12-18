function Nav() {
	return (
		<div className="navbar bg-secondary">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl text-primary">Trundle</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a className="text-xl">Reviews</a>
					</li>
					<li>
						<a className="text-xl">Respond</a>
					</li>
					<li>
						<a className="text-xl">GameMasters</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
