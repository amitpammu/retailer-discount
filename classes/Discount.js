 /**
  * Class To calculate discount for the user
  */
const rules = require('../businessLayer/DiscountRules');

class Discount {

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
    }

   get discount(){

    let bRule =  new rules(this.userType, this.itemType);
    let dPercentage =  bRule.discountPercentage;

    bRule.totalAmount = this.calculateAmount(dPercentage);

    return bRule.finalBill;
    }

    calculateAmount(percentage){
        if(Number.isInteger(percentage) && percentage !== 0){
            return this.amount -= (this.amount * percentage)/100;
        }

        return this.amount;
    }


  }
  
  module.exports = Discount;