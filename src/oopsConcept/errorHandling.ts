// Every method follows the same pattern:

// try {
//     risky code
// }
// catch(error) {
//     handle the error
// }
// finally {
//     Always Runs
// }




class ErrorHandlingPractice {
    // 1. Division example:
    static divide(a:number, b: number): void {
        try {
            if(b === 0){
                throw new Error("Division by 0 is not possible.")
            }
            const result = a / b;
            console.log("Division Result :", result);
        }
        catch (error) {
            console.log("Error :", (error as Error).message);
        }
        finally {
            console.log("Divided Successfully");
            console.log("------------------------------------------------")
        }
    }

// Login Validation:

    static login(username: string, password: string): void{
        try {
            if (username.trim() === "") {
                throw new Error("Username Cannot be Empty");
            }
        if (password.trim() === "") {
            throw new Error ("Password Cannot Be Empty")
        }
        console.log("logged in successfully");
    }
    catch (error) {
        console.log("Login Error :", (error as Error).message);
    }
    finally{
        console.log("login validation Completed");
        console.log("--------------------------------------");
    }
}

// 3. Age Validation:

    static ValidateAge(Age: number): void {
        try {
            if (Age < 18) {
                throw new Error("Age should be 18 or above.");
            }
            console.log("Eligible for Registration")
        }
        catch (error) {
            console.log("Validation Error :", (error as Error).message);
        }
        finally {
            console.log("Age Validation Completed");
            console.log("------------------------------------")
        }

    }

//4. Array Validation:

    static arrayExample(): void {
        try {
            const number = [ 10, 20, 30];
            const index = 5;

            if(index >= number.length) {
                throw new Error("Array Index out of Range.")
            }
        console.log(number[index]);
        }

        catch (error) {
            console.log("Array Error:", (error as Error).message);
        }
        finally {
            console.log("Array Operation completed")
            console.log("------------------------------------------")
        }
    }

//5. Bank Withdrawal:

static withdraw(MinimumBalance: number, amount: number): void {
    try {
        if(amount > MinimumBalance) {
            throw new Error("Insufficient Balance");
        }
        MinimumBalance = MinimumBalance - amount;
        console.log("Withdraw Success");
        console.log("Remaining Balance :", MinimumBalance);

    }
    catch (error) {
        console.log("Bank Error :", (error as Error).message);
    }
    finally {
        console.log("Transaction Completed");
        console.log("-------------------------------------------");
    }
}
}

console.log("============== Type Script Error Handling Demo =================");
console.log();


// Division
ErrorHandlingPractice.divide(100,50);
ErrorHandlingPractice.divide(100,0);

// Login:
ErrorHandlingPractice.login("Admin", "Admin2710");
ErrorHandlingPractice.login("", "admin8907");

// Age:
ErrorHandlingPractice.ValidateAge(25);
ErrorHandlingPractice.ValidateAge(12);

// Array:
ErrorHandlingPractice.arrayExample();

//Bank:
ErrorHandlingPractice.withdraw(4000, 8000);
ErrorHandlingPractice.withdraw(2000, 9000);

console.log("======== Program Finished =======");






