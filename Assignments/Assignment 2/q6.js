//Theate booking system
    console.log("                       Theatre Booking System")
    totalSeats=120;
    bookedSeats=78;
    availableSeats=totalSeats-bookedSeats;
    if(availableSeats<20){
        result = "        Almost Full"
    }
    else if(availableSeats>20 && availableSeats<60){
        result ="         Moderate Availability"
    }
    else if(availableSeats>60){
        result ="         Plenty of Seats Available"
    }
    console.log("________________________________________________________________")
    console.log(`        There are ${availableSeats} seats are avaialble`) //Template lierals I have used here
    console.log(result)
    console.log("________________________________________________________________")