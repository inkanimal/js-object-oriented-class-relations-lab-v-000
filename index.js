const storeIds = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
   constructor(name){
     this.name = name;
     this.id = ++driverId;
     store.drivers.push(this);
  }
   trips(){
    return store.trips.filter(trip => trip.driverId === this.id);
  }


  passengers(){
    let trips = this.trips();
    return trips.map(trip => trip.passenger());
  }
}



