class employee {
    name : string;
    id : number;
    salary : number;
    department : string;
constructor (name: string, id: number, salary: number, department: string) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.department = department;
}
calculateSalary() : number {
    const bonus = this.salary * 0.1;
    const totalsalary = this.salary + bonus;
    return totalsalary;
}
displayDetails() : void {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee ID: ${this.id}`);
    console.log(`Employee Salary: ${this.salary}`);
    console.log(`Employee Department: ${this.salary}`);
    console.log(`Total Salary (with bonus): ${this.calculateSalary()}`);
    console.log('\n---------------------------------------------')
    console.log(`salary > 80000: ${this.salary > 80000}`);
    console.log(`salary == 75000: ${this.salary == 75000}`);
}
}

const emp1 = new employee("Mani", 101, 80000, "Commerce");
const emp2 = new employee("Savi", 102, 100000, "Engineering");
const emp3 = new employee("Gopal", 103, 85000, "Sales");

emp1.displayDetails();
emp2.displayDetails();
emp3.displayDetails();