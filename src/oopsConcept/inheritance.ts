class BaseTest{
    startTest(): void {
        console.log("Browser launched");
    }
    endTest(): void {
        console.log("Browser closed");
    }
}

// Child class
class loginTest extends BaseTest {
    testValidLogin(): void {
        this.startTest(); // Inherited
        console.log("Entering username and password");
        console.log("Clicked login button");
        console.log("Login successful");
        this.endTest(); // Inherited
        }
    testInvalidLogin(): void {
        this.startTest();
        console.log("Invalid data try again");
        console.log("Login Error");
        this.endTest();
    }

}
const login = new loginTest();
login.testValidLogin();
login.testInvalidLogin();
