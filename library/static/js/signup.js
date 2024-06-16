const form = document.getElementById("signup");

const checkUser = () => {
	let user = null;
	if (
		window.localStorage.getItem("user") ||
		window.sessionStorage.getItem("user")
	) {
		window.location.href = "home.html";
	}
	return user;
};

checkUser();

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");
	const phone = formData.get("phone");
	const email = formData.get("email");
	const username = formData.get("username");
	const name = `${firstName} ${lastName}`;
	let admin;

	try {
		admin = document.querySelector('input[id="admin"]:checked').value;
	} catch (e) {
		console.error(e);
	}

	let previlege = "user";
	if (admin == "") {
		previlege = "admin";
	}

	const user = { username, name, phone, email, previlege };

	window.localStorage.setItem("user", JSON.stringify(user));
	previlege == "admin"
		? (window.location.href = "./admin.html")
		: (window.location.href = "./home.html");
});

window.onload = () => {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = null;
	}
};
