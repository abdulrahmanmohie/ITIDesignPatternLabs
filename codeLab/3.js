class CarBuilder {
	constructor(engine, wheels, accelerator, doors){
		this.engine = engine
		this.wheels = wheels
		this.accelerator = accelerator
		this.doors=doors
	}

	toString(){
		return console.log(JSON.stringify(this))
	}
}

class TruckBuilder {
	constructor(engine, wheels, accelerator, doors){
		this.engine = engine
		this.wheels = wheels
		this.accelerator = accelerator
		this.doors = doors
	}

	toString(){
		return console.log(JSON.stringify(this))
	}
}

class Shop{
	constructor(){
		this.car = new CarBuilder
        this.truck = new TruckBuilder()
 	}

 	firstStep(item1,item2){
 		this.car.engine = item1
        this.car.accelerator = item2
        this.truck.engine = item1
        this.truck.accelerator = item2
 		return this

 	}

 	secondStep(item1,item2){
 		this.car.wheels = item1
 		this.car.doors = item2
         this.truck.wheels = item1
 		this.truck.doors = item2
 		return this
 	}
     getInfo(){
         return this.car
     }
}

const car1 = new Shop().firstStep(true,true).secondStep(true,true).getInfo()

car1.toString()
const truck1 = new Shop().firstStep(false,true).secondStep(true,false).getInfo()

truck1.toString()