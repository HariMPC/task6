class Uber{
    constructor(distance, typeOfVehicle, promoCode = null){
        const date = new Date();
        const ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
        const offset= ISToffSet*60*1000;
        
        const hours = new Date(date.getTime() + offset).getHours();
        this.isDayTime = hours > 10 && hours < 18;
        
        this.distance = distance;
        this.typeOfVehicle = typeOfVehicle;
        if(promoCode){
            this.promoCode = promoCode;
        }
    }
    
    
    getPrice(){
        if(this.typeOfVehicle){
            switch(this.typeOfVehicle){
                case 'UBER GO': {
                    if(this.isDayTime){
                        this.pricePerKM = 15;
                    }else{
                        this.pricePerKM = 20;
                    }
                    break;
                }
                case 'UBER MOTO':{
                    if(this.isDayTime){
                        this.pricePerKM = 10;
                    }else{
                        this.pricePerKM = 12;
                    }
                    break;
                }
                case 'UBER AUTO':{
                    if(this.isDayTime){
                        this.pricePerKM = 13;
                    }else{
                        this.pricePerKM = 15;
                    }
                    break;
                }
                case 'UBER PREMIER':{
                    if(this.isDayTime){
                        this.pricePerKM = 20;
                    }else{
                        this.pricePerKM = 25;
                    }
                    break;
                }
                case 'UBER GO SEDAN':{
                    if(this.isDayTime){
                        this.pricePerKM = 25;
                    }else{
                        this.pricePerKM = 30;
                    }
                    break;
                }
                case 'UBER SUV':{
                    if(this.isDayTime){
                        this.pricePerKM = 30;
                    }else{
                        this.pricePerKM = 35;
                    }
                    break;
                }
                default: {
                    if(this.isDayTime){
                        this.pricePerKM = 15;
                    }else{
                        this.pricePerKM = 20;
                    }
                    break;
                }
            }
        }
        
        if(this.promoCode){
            switch(this.promoCode){
                case 'RIDE30': {
                    this.offerInPercentage = 30;
                    break;
                }
                case 'RIDE20': {
                    this.offerInPercentage = 20;
                    break;
                }
                case 'RIDE10': {
                    this.offerInPercentage = 10;
                    break;
                }
                default: {
                    this.offerInPercentage = 0;
                    break;
                }
            }
        }
        
        
        if(this.distance && this.pricePerKM && this.offerInPercentage){
            // pricePerKM * distance *  (100 - discount) / 100 
            const totalPrice = this.pricePerKM * this.distance * ( 100 - this.offerInPercentage) / 100;
            return totalPrice;
        }
    }
}

const myUberJourney = new Uber(5, 'UBER GO SEDAN', 'RIDE30');
const totalPrice = myUberJourney.getPrice();

console.log('Total price for my journey: ', totalPrice);