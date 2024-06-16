console.log(user);
document.getElementById("name").innerHTML = user.name;
document.getElementById("username").innerHTML = user.username;

const returnButtons = document.querySelectorAll(".returnButton");

returnButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const cartItem = button.parentElement.parentElement;
		cartItem.remove();
	});
});

function createBookItem(book) {
	const bookItem = document.createElement("div");
	bookItem.classList.add("book-item");

	const img = document.createElement("img");
	img.src = book.cover;
	img.alt = "Book Cover";
	bookItem.appendChild(img);

	const bookDetails = document.createElement("div");
	bookDetails.classList.add("book-details");

	const title = document.createElement("p");
	const titleLink = document.createElement("a");
	titleLink.textContent = book.name;
	title.appendChild(document.createTextNode("Title: "));
	title.appendChild(titleLink);
	bookDetails.appendChild(title);

	const author = document.createElement("p");
	author.textContent = "Authors: " + book.authors;
	bookDetails.appendChild(author);

	const category = document.createElement("p");
	category.textContent = "Category: " + book.categories;
	bookDetails.appendChild(category);

	const returnButton = document.createElement("button");
	returnButton.classList.add("returnButton");
	returnButton.textContent = "Return Book";
	bookDetails.appendChild(returnButton);

	returnButton.addEventListener("click", () => {
		const borrowed = user.borrow;

		user.borrow = borrowed.filter((item) => {
			return item.id != book.id;
		});
		window.localStorage.removeItem("user");
		window.localStorage.setItem("user", JSON.stringify(user));

		const borrowItem = returnButton.parentElement.parentElement;
		borrowItem.remove();
	});

	bookItem.appendChild(bookDetails);
	bookItem.id = book.id;

	return bookItem;
}

const borrowContainer = document.getElementById("borrowContainer");

const books = user.borrow;

books.forEach((book) => {
	const bookItem = createBookItem(book);
	borrowContainer.appendChild(bookItem);
});
