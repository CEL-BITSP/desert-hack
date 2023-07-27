import Image from "next/image";
// import image1 from "/Users/id19/Value/Programming/Projects(that I've made)/Front-end projects/React & NEXT Projects/DHack Website Work/test/public/top-left.jpeg";

export default function Deal() {
	return (
		<div id="Deal-div">
			<div id="header-div">
				<h1>
					So, Here's The <p id="header-yellow-text">Deal</p>!
				</h1>
				<h4 id="frens">
					{" "}
					find frens you can build with but please do something good
					find frens you can build with
				</h4>
			</div>
			<div id="container-div">
				<div
					id="top-left"
					class="border"
				>
					<p>
						<h3>Make Your Dreams irl</h3>
						find frens you can build with but please do something
						good find frens you can build with
					</p>
				</div>
				<div
					id="top-right"
					class="border"
				>
					<p>
						<h3>Find Your Tribe</h3>
						find frens you can build with but please do something
						good
					</p>
				</div>
				<div
					id="bottom-left"
					class="border"
				>
					<p>
						<h3>No Teaching</h3>
						find frens you can build with but please do something
						good
					</p>
				</div>
				<div
					id="bottom-right"
					class="border"
				>
					<p>
						<h3>Gigabrains From The Industry</h3>
						Find frens you can build with but please do something
						good find frens you can build with
					</p>
				</div>
			</div>
		</div>
	);
}
