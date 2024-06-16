const checkAdmin = () => {
	const getUser = () => {
		let user = null;
		if (window.localStorage.getItem("user")) {
			user = JSON.parse(window.localStorage.getItem("user"));
		} else if (window.sessionStorage.getItem("user")) {
			user = JSON.parse(window.sessionStorage.getItem("user"));
		} else {
			window.location.href = "./login.html";
		}
		return user;
	};

	const user = getUser();

	if (user.previlege.toLowerCase() != "admin") {
		window.location.href = "./home.html";
	}
};

checkAdmin();

const form = document.getElementById("addBook");

const addBook = (e) => {
	e.preventDefault();
	const formData = new FormData(form);

	const id = formData.get("id");
	const name = formData.get("name");
	const authors = formData.get("authors");
	const categories = formData.get("cat");
	const description = formData.get("desc");
	const cover = formData.get("cover");

	const book = {
		id,
		name,
		authors,
		categories,
		description,
		cover,
		available: true,
	};

	const books = JSON.parse(window.localStorage.getItem("books"));
	window.localStorage.removeItem("books");
	books
		? window.localStorage.setItem("books", JSON.stringify([...books, book]))
		: window.localStorage.setItem("books", JSON.stringify([book]));
};

function HomeRed(){
	window.location.href = "./home.html";
}

form.addEventListener("submit", addBook);
