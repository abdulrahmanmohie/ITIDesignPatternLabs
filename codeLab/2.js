class Attack{
	setPlan(plan){
		return "Attack: 2"
	}
}
class Medium{
	setPlan(plan){
		return "Medium: 4"
	}
}
class Defense{
	setPlan(plan){
		return "Defense: 4"
	}
}

class PlanA{
	setStrategy(position){
		return position.setPlan(position)
	}
}


var attack = new Attack()
var medium = new Medium()
var defense = new Defense()
var plana = new PlanA()
console.log(plana.setStrategy(attack))
console.log(plana.setStrategy(medium))
console.log(plana.setStrategy(defense))