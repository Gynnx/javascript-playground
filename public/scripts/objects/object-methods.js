let restaurant = {
    name: 'Scoop',
    guestCapacity: 15,
    guestCount: 0,
    checkAvailability: function (partySize) {        
        let seatsLeft = this.guestCapacity - this.guestCount;
        // console.log(this.guestCount);
        return partySize <= seatsLeft;
        
    },
    seatParty: function (capacity) {
        this.guestCount = this.guestCount + capacity;
        console.log(this.guestCount);  
    },
    removeParty: function (capacity) {
        this.guestCount = this.guestCount - capacity;
        console.log(this.guestCount);
        
    }
    
};

restaurant.seatParty(12);
console.log(restaurant.checkAvailability(7));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(7));

