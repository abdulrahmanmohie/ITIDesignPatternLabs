class  Actioneer{

	constructor(){
		// this.videoTitle = ""
		this.bidders = []
	}


	notifyAll(){ 
        // this.announceNewBidderPrice()
		// return this.bidders.forEach(bid => bid.update(this))
	}

	announceNewBidderPrice(price){
		this.price = price
		// this.notifyAll()
	}

	registerBidder(bidder){
		this.bidders.push(bidder)

	}
	// unregister(subscriber){
	// 	this.subscribers = 
	// 	this.subscribers.filter(sub => sub != subscriber)
	// }

}

class Bidder{
    constructor(bidderName,price){
        this.biddderName = bidderName
        this.bidPrice = price

    }
	update(){
		// this ==> channel
		// console.log(Channl)
		// console.log(`new video uploaded ${Channl.videoTitle}`)
        console.log(`${this.bidderName} is offering ${this.bidPrice}`)
        // if(this.bidPrice > 500){
        //     console.log(`Sold to ${this.bidderName}`)
        // }
        // giveNewPrice()
	}

    // giveNewPrice(price){
    //     return this.price = price
    // }
}


const actioneer = new Actioneer()

const aya = new Bidder("aya",500)
// console.log(aya)
// aya,update()
actioneer.registerBidder(aya)

// const ali = new Person()
// myChannel.register(ali)

// myChannel.placeNewVideo("hello world") // 1

// const ali = new Person()
// myChannel.register(ali)

// myChannel.placeNewVideo("all persones") // 2


// const ahmed = new Person()
// myChannel.register(ahmed)

// myChannel.placeNewVideo("test new ") // 2
