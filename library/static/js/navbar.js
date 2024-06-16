const searchForm = document.getElementById("search");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const params = new URLSearchParams();
	const search = document.getElementById("searchBar");
	params.set("search", search.value);

	const query = params.toString();
	const newUrl = "./home.html" + "?" + query;

	window.location.href = newUrl;

	window.history.pushState({ path: newUrl }, "", newUrl);
});

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
const navRight = document.getElementById("right");

if (user.previlege == "admin") {
	const adminDash = document.createElement("a");
	adminDash.href = "admin.html";
	adminDash.innerText = "Dashboard";
	navRight.appendChild(adminDash);
} else {
	const cart = document.createElement("a");
	cart.href = "cartPage.html";
	cart.innerText = "Shopping Cart";
	navRight.appendChild(cart);

	const userPage = document.createElement("a");
	userPage.href = "user.html";
	userPage.innerText = "User Page";
	navRight.appendChild(userPage);
}
