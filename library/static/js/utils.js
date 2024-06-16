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

export { getUser };
