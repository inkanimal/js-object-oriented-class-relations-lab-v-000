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



