function Home() {
	return (
		<div className="flex items-center flex-col">
			<h1 className="text-6xl text-center m-5 pt-5">Trundle</h1>
			<h2 className="text-center text-2xl">Review Data Complier</h2>
			<div className="flex flex-col mt-5">
				<button className="bg-secondary rounded border-black p-2 m-2 border-2 flex justify-center">
					Collect Reviews
				</button>
				<button className="bg-secondary rounded border-black p-2 m-2 border-2 flex justify-center">
					Respond to Reviews
				</button>
				<button className="bg-secondary rounded border-black p-2 m-2 border-2 flex justify-center">
					Edit GameMasters
				</button>
			</div>
		</div>
	);
}

export default Home;
