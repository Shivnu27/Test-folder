class Hospital{
    generateReport() {
        console.log("Generate report of hospital");

    }
}
class Doctor extends Hospital{
    generateReport() {
        console.log("Doctor generating report");
    }
    
}
class laboratory extends Hospital{
    generateReport() {
        console.log("Laboratory generating report");
    }
}
class Pharmacy extends Hospital{
    generateReport() {
        console.log("Pharmacy generating repo")
    }
}
const doctor = new Doctor
const lab = new laboratory;
const pharmacy = new Pharmacy;

doctor.generateReport();
lab.generateReport();
pharmacy.generateReport();