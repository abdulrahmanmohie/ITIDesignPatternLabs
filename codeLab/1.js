class  Store{
	constructor(){
		this.productName = ""
		this.customers = []
	}

	setNewProduct(name){
		this.productName = name
		this.notify()
	}

	notify(){ 
		return this.customers.forEach(customer => customer.update(this))
	}

	add(customer){
		this.customers.push(customer)

	}
}

class Client{
	update(advert){
		console.log(`new product ${advert.productName}`)
	}
}


const newAdvert = new Store()
const abdo = new Client()
newAdvert.add(abdo)

newAdvert.setNewProduct("Kiwi")

newAdvert.setNewProduct("apple")

newAdvert.setNewProduct("banana")
