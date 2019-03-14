 /**
  * Class To get the discount rules based on user
  */
 const C = require('../Config/constant');

 class DiscountRules {

    /**
     * 
     * @param {string} userType User type (role)
     * @param {integer} itemType Item type of cart
     * @param {double} amount Total bill amount
     */
    constructor(userType,itemType, amount){
        this.userType = userType;
        this.itemType = itemType;
        this.amount = amount;
        this.finalBillAmount = 0;
    }

   get discountPercentage(){
        if(this.itemType == C.grocery){
        return 0;
        }else{
           return  this.discountByUserType(this.userType);
        }
    }

    get finalBill(){
       return  this.calculateFinalBill(this.finalBillAmount);
    }

    set totalAmount(amount){

        this.finalBillAmount = amount;
    }

    discountByUserType(userType){
        if(userType.is_employee){
            return  30;
        }else if(userType.is_affiliated){
            return  10;
        }else if(userType.joining_year){
           let diff = this.getYearDiff(userType.joining_year);
           return (diff > 2)?5:0;
        }
    }

    getYearDiff(year){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - year;
    }

    calculateFinalBill(amount){
        if(amount >= 100){
           amount -= (amount/100) * 5;
           
        } 
        return amount
    }

  }
  
  module.exports = DiscountRules;