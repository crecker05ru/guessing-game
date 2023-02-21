class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min
      this.max = max
      this.mid 
    }

    guess() {
      //this.guess = Math.random() * min + max 
      // this.mid =  this.mid / 2
      return this.mid =  Math.ceil(( this.min + this.max )/2)
    }

    lower() {
      this.max = this.mid
    }

    greater() {
      this.min = this.mid
    }
}

module.exports = GuessingGame;
