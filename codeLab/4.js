class Assignment {
	constructor(subject, level, dueDate){
		this.subject = subject
		this.level = level
		this.dueDate = dueDate
	}
	toString(){
		return console.log(JSON.stringify(this))
	}
}

class AssignmentBuilder{
	constructor(){
		this.assignment = new Assignment;
 	}
 	announcement(subject,level,dueDate){
 		this.assignment.subject = subject
 		this.assignment.level = level
 		this.assignment.dueDate = dueDate
 		return this.assignment
 	}
}
const assi1 = new AssignmentBuilder().announcement("html",'hard',"3-11-2022")
assi1.toString()

const assi2 = new AssignmentBuilder().announcement("JS",'easy',"4-11-2022")
assi2.toString()