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

	const welcomeUser = document.getElementById("welcome");

	welcomeUser.innerText += " " + user.name;
};

function redaddbooks(){
	window.location.href = "./addBook.html";
}

checkAdmin();
