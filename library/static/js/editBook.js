const books = JSON.parse(window.localStorage.getItem("books"));

const params = new URLSearchParams(window.location.search);
const search = params.get("book");

const searchResult = books.find((book) => {
	return book.id == search;
});

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

const form = document.getElementById("editBook");
document.getElementById("id").value = searchResult.id;
document.getElementById("name").value = searchResult.name;
document.getElementById("authors").value = searchResult.authors;
document.getElementById("cat").value = searchResult.categories;
document.getElementById("desc").value = searchResult.description;
document.getElementById("cover").value = searchResult.cover;

const editBook = (e) => {
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
    const nbooks = books.filter((item) => {
        return item.id !== searchResult.id
      })
    // console.log(book);
    // console.log(books);
	window.localStorage.removeItem("books");
	window.localStorage.setItem("books", JSON.stringify(    nbooks.concat(book)));
};

function HomeRed(){
	window.location.href = "./home.html";
}

form.addEventListener("submit", editBook);
