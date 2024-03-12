export function getListStudents(id, firstName, location) {
	const student = {}; //empty student object
	let array = []; //array to store object

	student.id = id;
	student.firstName = firstName;
	student.location = location;

	//Push student object to array
	array.push(student);

	return array;
}


