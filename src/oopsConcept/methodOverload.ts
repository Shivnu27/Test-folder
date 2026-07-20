class PaymentService {
    pay(amount: number): void;
    pay(amount: number, paymentMode: string): void;
    pay(amount: number, paymentMode: string, accountNumber: string): void;

    pay(amount:number, paymentMode?: string, accountNumber?: string): void {

        if(paymentMode && accountNumber) {
            console.log(`Amount: ${amount}`);
            console.log(`Payment Mode: ${paymentMode}`);
            console.log(`Account Number: ${accountNumber} `);

        } else if (paymentMode) {
            console.log(`Amount: ${amount}`);
            console.log(`payment Method: ${paymentMode}`);

        } else  {
            console.log(`Amount: ${amount}`);
            console.log(`Default Payment`);
        }
    }

}

const payment = new PaymentService();
payment.pay(500);
console.log("-----------------");
payment.pay(1477, "UPI");
console.log("-----------------");
payment.pay(9000, "Net banking", "IND2341");