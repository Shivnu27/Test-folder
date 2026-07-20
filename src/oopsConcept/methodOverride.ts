class payment {
    pay(): void{
        console.log("Payment Started")
    }
}

// Child class 1

class creditCard extends payment{
    override pay(): void {
        console.log("Paid using Credit Card");
    }
}

// Child class 2

class UPI extends payment{
    override pay(): void {
        console.log("paid using UPI");
    }
}

// Child class 3

class NetBanking extends payment{
    override pay(): void {
        console.log("Paid using Net banking");
    }
}

const payments: payment[] = [new creditCard(), new UPI(), new NetBanking];

for(const payment of payments) {
    payment.pay();
}