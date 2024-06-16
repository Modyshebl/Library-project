const books = JSON.parse(window.localStorage.getItem("books"));

const params = new URLSearchParams(window.location.search);
const search = params.get("book");

const searchResult = books.find((book) => {
	return book.id == search;
});

const bookRender = () => {
	const createElements = (book) => {
		const section = document.createElement("section");

		const img = document.createElement("img");
		img.src = book.cover;
		img.alt = book.name;
		img.width = 300;
		img.height = 350;

		const detailsDiv = document.createElement("div");

		const titleH2 = document.createElement("h2");
		titleH2.classList.add("title");
		const titleCite = document.createElement("cite");
		titleCite.textContent = book.name;
		titleH2.appendChild(titleCite);

		const borrowedBook = books.find((book) => {
			return book.id === searchResult.id;
		});
		if (user.previlege == "user" && borrowedBook.available) {
			const borrowButton = document.createElement("button");
			borrowButton.textContent = "Borrow";
			borrowButton.id = "borrow";
			borrowButton.addEventListener("click", () => {
				const cart = JSON.parse(window.localStorage.getItem("cart"));
				window.localStorage.removeItem("cart");
				cart
					? window.localStorage.setItem(
							"cart",
							JSON.stringify([...cart, borrowedBook]),
						)
					: window.localStorage.setItem("cart", JSON.stringify([borrowedBook]));
				window.location.href = "./cartPage.html";
			});

			titleH2.appendChild(borrowButton);
		} else {
			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.id = "delete";

			deleteButton.addEventListener("click", () => {
				const newBooks = books.filter((book) => {
					return book.id !== searchResult.id;
				});
				window.localStorage.removeItem("books");

				window.localStorage.setItem("books", JSON.stringify(newBooks));
				window.location.href = "home.html";
			});

			const editButton = document.createElement("button");
			editButton.textContent = "Edit";
			editButton.id = "edit";
			editButton.addEventListener("click", () => {
				window.location.href = `./editBook.html?book=${book.id}`;
			});
			const container = document.createElement("div");
			container.appendChild(editButton);
			container.appendChild(deleteButton);

			container.classList.add("editButtons");

			titleH2.appendChild(container);
		}

		detailsDiv.appendChild(titleH2);

		const authorsPara = document.createElement("div");
		const strong = document.createElement("strong");
		strong.textContent = "Authors:";
		authorsPara.appendChild(strong);
		authorsPara.innerHTML += " " + book.authors;
		detailsDiv.appendChild(authorsPara);

		// Create div for description
		const descDiv = document.createElement("div");
		descDiv.id = "desc";
		const descH4 = document.createElement("h4");
		descH4.textContent = "Description";
		const descPara = document.createElement("p");
		descPara.textContent = book.description;
		descDiv.appendChild(descH4);
		descDiv.appendChild(descPara);

		// Append elements to section
		section.appendChild(img);
		section.appendChild(detailsDiv);
		section.appendChild(descDiv);

		return section;
	};

	const main = document.getElementById("main");
	const section = createElements(searchResult);
	main.appendChild(section);
};

bookRender();
