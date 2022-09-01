const name = "Bagus Nugroho";
const email = "bagus@gmail.com";
const password = "banu";
const address = "Ciamis";

const account = {
	name,
	email,
	password,
	address,
};

const login = ({ email, password, name }) => {
	console.log(name + " success login");
};

login(account);