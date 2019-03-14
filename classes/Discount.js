
const rules = require('../businessLayer/DiscountRules');
 /**
  * @desc Class To calculate discount for the user
  */
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
    /**
     * @desc Getter method to fetch the discount
     */
   get discount(){

    // Calling Business Rule class
    let bRule =  new rules(this.userType, this.itemType);

    // get the percentage value of the user discount
    let dPercentage =  bRule.discountPercentage;

    // set total amount by calculating amount
    bRule.totalAmount = this.calculateAmount(dPercentage);

    // get the final bill after all the calculation and criteria check
    return bRule.finalBill;
    }

    /**
     * 
     * @param {int} percentage percentage value 
     * @desc Calculate total bill amount by getting discount value
     */
    calculateAmount(percentage){
        if(Number.isInteger(percentage) && percentage !== 0){
            return this.amount -= (this.amount * percentage)/100;
        }

        return this.amount;
    }


  }
  
  module.exports = Discount;