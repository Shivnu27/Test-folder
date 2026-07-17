class logintest {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    // Encapsulated access using getters/setters
    
    public setUsername(name: string) {
        this.username = name;
    }
    public getUsername(): string{
        return this.username
    }
    public perfromLogin(): void {
        console.log(`Logging in with ${this.username} and ******`);
    }
}

const test = new logintest("Admin", "Adm&231");
test.perfromLogin();
test.setUsername("test_user");
console.log("Updated Username:" , test.getUsername());