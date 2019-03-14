const C = require('../Config/constant');

/**
  * @desc Class To get the discount rules based on user
  */
class DiscountRules {

    /**
     * 
     * @param {string} userType User type (role)
     * @param {integer} itemType Item type of cart
     * @param {double} amount Total bill amount
     */
    constructor(userType, itemType, amount) {
        this.userType = userType;
        this.itemType = itemType;
        this.amount = amount;
        this.finalBillAmount = 0;
    }

    /**
     * @desc Calculate User discount percentage
     */
    get discountPercentage() {
        if (this.itemType == C.grocery) {
            return 0;
        } else {
            return this.discountByUserType(this.userType);
        }
    }

    /**
     * @desc Getter method to get the final bill
     */
    get finalBill() {
        return this.calculateFinalBill(this.finalBillAmount);
    }

    /**
     * @desc Setter method to set the final bill amount
     */
    set totalAmount(amount) {

        this.finalBillAmount = amount;
    }

    /**
     * 
     * @param {object} userType User object
     * @desc Get the discount percentage value by user certain rules
     */
    discountByUserType(userType) {
        if (userType.is_employee) {
            return 30;
        } else if (userType.is_affiliated) {
            return 10;
        } else if (userType.joining_year) {
            let diff = this.getYearDiff(userType.joining_year);
            return (diff > 2) ? 5 : 0;
        }
    }

    /**
     * 
     * @param {int} year 
     * @desc Get the difference of the user current and the joining year 
     */
    getYearDiff(year) {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        return currentYear - year;
    }

    /**
     * 
     * @param {double} amount 
     * @desc Calculate the final amount after all tghe calculation
     */
    calculateFinalBill(amount) {
        if (amount >= 100) {
            amount -= (amount / 100) * 5;

        }
        return amount
    }

}

module.exports = DiscountRules;