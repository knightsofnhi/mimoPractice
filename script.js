// class BitcoinWallet {
//     constructor(bitcoin) {
//         this.bitcoin = bitcoin;
//     }
//     addBitcoins(bitcoin) {
//         this.bitcoin = this.bitcoin + bitcoin;
//         console.log(bitcoin + "bc add");
//     }
// }

// var wallet = new itcoinWallet(0);
//     wallet.addBitcoins(1);

///////////////////////

class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hey, I'm using Mimo";
    }
}

var user1 = new User("Arya");
user1.sayHi();
user1.isOnline = false;
console.log(user1);

var user2 = new User("Bran");

console.log(user2);