const books = JSON.parse(window.localStorage.getItem("books"));

const showBooks = (book) => {
	const title = document.createElement("p");
	title.textContent = book.name + "  ";

	const available = document.createElement("abbr");
	if (book.available) {
		available.title = "Available";
		available.textContent = "✓";
	} else {
		available.title = "Not Available";
		available.textContent = "✗";
	}
	title.appendChild(available);

	const author = document.createElement("span");
	author.textContent = book.authors;
	const details = document.createElement("div");
	details.classList.add("details");
	details.appendChild(title);
	details.appendChild(author);

	const image = document.createElement("img");
	image.src = book.cover;
	image.alt = book.name;
	const container = document.createElement("a");
	container.href = "./bookPage.html?book=" + book.id;
	container.classList.add("book");
	container.appendChild(image);
	container.appendChild(details);
	return container;
};

const section = document.getElementById("books");

console.log(books);

if (window.location.search) {
	const params = new URLSearchParams(window.location.search);
	const search = params.get("search");

	const searchResult = books.filter((book) => {
		return book.name.includes(search) || book.authors.includes(search);
	});
	console.log(searchResult);

	searchResult.forEach((book) => {
		const entry = showBooks(book);
		section.appendChild(entry);
	});
} else {
	books.forEach((book) => {
		const entry = showBooks(book);
		section.appendChild(entry);
	});
}
