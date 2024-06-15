//your JS code here. If required.
const student={
	name:'name1'
}

function getKeys(){
	return Object.keys(this)
}

Object.prototype.getKeys=getKeys

console.log(student.getKeys())

 