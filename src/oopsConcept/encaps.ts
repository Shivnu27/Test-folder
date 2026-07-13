class Bank {
    public name: string;
    public IFSC: any;
    public branch: string;
    public emailId: string;
    private customerName: string;
    private customerAccountNumber: number;

    constructor(name: string, IFSC: any, branch: string, emailId: string, customerName: string, customerAccountNumber: number)
    
    {
        this.name = name;
        this.IFSC = IFSC;
        this.branch = branch;
        this.emailId = emailId;
        this.customerName = customerName;
        this.customerAccountNumber = customerAccountNumber;

    }

    public display(): void {
        console.log(`Bank Name: ${this.name}`);
        console.log(`IFSC code: ${this.IFSC}`);
        console.log(`Branch: ${this.branch}`);
        console.log(`EmailID: ${this.emailId}`);
        console.log(`customerName: ${this.customerName}`);
        console.log(`Customer Account Number: ${this.customerAccountNumber}`);
        
        console.log("---------------------------------------------------")
    }

}

const cust1 = new Bank("Indian Bank", "IBI23749", "Anna Nagar", "Mani@gmail,com", "Mani", 2384895);
const cust2 = new Bank("ICICI Bank", "ICIC23749", "T.Nagar","Savi@gmail,com", "Savi", 2384895);

cust1.display();
cust2.display();