abstract class payment {
    paymentStarted(): void {
        console.log("Payment processing")
    }

// abstract method:
abstract pay(amount: number): void; 
}

class creditCardPayment extends payment {
    pay(amount: number): void {
        console.log(`paid ${amount} via credit card`);
    }
}

class UPI extends payment {
    pay(amount: number): void {
        console.log(`paid ${amount} via UPI`);
    }
}

class DebitCard extends payment {
    pay(amount: number): void {
        console.log(`paid ${amount} via UPI`);
    }
}

const credit = new creditCardPayment();
credit.paymentStarted();
credit.pay(2000);

console.log("-----------------------------");

const upi = new UPI();
upi.paymentStarted();
upi.pay(900);

console.log("-------------------------------");

const Debit = new DebitCard();
Debit.paymentStarted();
credit.pay(3000);

console.log("---------------------------------")