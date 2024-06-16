// Function to initialize the shopping cart functionality

const cart = JSON.parse(window.localStorage.getItem("cart"));

const createElements = (book) => {
	const img = document.createElement("img");
	img.src = book.cover;
	img.alt = book.name;

	const details = document.createElement("div");
	// details.classList.add("book-item");

	const titleH3 = document.createElement("h3");
	titleH3.textContent = book.name;
	details.appendChild(titleH3);

	const authorsPara = document.createElement("p");
	authorsPara.textContent = "by " + book.authors;
	details.appendChild(authorsPara);

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.classList.add("delete-button");
	details.appendChild(deleteButton);

	const cartItem = document.createElement("div");
	cartItem.id = book.id;
	cartItem.className = "cart-item";

	cartItem.appendChild(img);
	cartItem.appendChild(details);

	return cartItem;
};

function initializeShoppingCart() {
	// Get all delete buttons

	const cartContainer = document.getElementById("cartContainer");

	const checkoutContainer = document.getElementById("checkoutContainer");

	cart.forEach((cartItem) => {
		const entry = createElements(cartItem);
		cartContainer.appendChild(entry);

		const checkoutItem = document.createElement("div");
		checkoutItem.classList.add("checkout-item");

		const label = document.createElement("label");
		label.textContent = cartItem.name;

		checkoutItem.appendChild(label);
		checkoutContainer.appendChild(checkoutItem);
	});
	const borrowButton = document.createElement("button");
	borrowButton.textContent = "Borrow";
	borrowButton.classList.add("borrow-button");
	checkoutContainer.appendChild(borrowButton);

	borrowButton.addEventListener("click", () => {
		const borrowed = user.borrow ? user.borrow : [];
		user.borrow = borrowed.concat(cart);
		window.localStorage.removeItem("user");
		window.localStorage.setItem("user", JSON.stringify(user));
		window.localStorage.removeItem("cart");
		window.location.href = "./user.html";
	});

	const deleteButtons = document.querySelectorAll(".delete-button");

	// Add event listeners to delete buttons
	deleteButtons.forEach((button) => {
		button.addEventListener("click", () => {
			// Find the corresponding cart item and remove it from the DOM
			const cartItem = button.parentElement.parentElement;
			cartItem.remove();
			const newCart = cart.filter((item) => {
				return item.id != cartItem.id;
			});
			window.localStorage.removeItem("cart");
			window.localStorage.setItem("cart", JSON.stringify(newCart));
		});
	});
}

// Call the function to initialize the shopping cart functionality
initializeShoppingCart();
