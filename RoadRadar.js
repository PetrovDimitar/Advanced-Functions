function radat(input) {
    let speed = input[0]
    let zone = input[1]

    let limit = getLimit(zone)

 function getLimit(zone) {
     switch (zone){
         case 'motorway' : return 130
         case 'interstate' : return90
         case 'city' : return 50
         case 'residential' : return 20;

     }
 }

 function  getInfraction(speed, limit) {
     let overSpeed = speed - limit
     if (overSpeed <= 0){
         return false
     }else {
         if (overSpeed <= 20){
             return 'speeding'
         }else if (overSpeed <= 40){
             return 'excessive speeding'
         }else {
             return 'reckless driving'
         }
     }
 }
}