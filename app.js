import { LightningElement, track, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class App extends LightningElement {

    @track Salutation
    @track FName
    @track LName
    @track Email
    @track Phone
    @track Dob
    @track ApplicationSubmitDate
    UserSalutation
    FirstName
    LastName
    UserEmail
    UserPhone
    UserDob
    UserApplicationSubmitDate
    isChildVisible = false;
    show = true;
    isVisible = true;

    closeHandler(){
        console.log('closeHandler');
        this.isVisible = true;
        this.isChildVisible = false;
    }

    handleSalutationChange(event) {
        this.Salutation = event.target.value;
    }
    handleFirstNameChange(event) {
        this.FName = event.target.value;
    }
    handleLastNameChange(event) {
        this.LName = event.target.value;
    }
    handleEmailChange(event) {
        this.Email = event.target.value;
    }
    handlePhoneChange(event) {
        this.Phone = event.target.value;
    }
    handleBirthDateChange(event) {
        this.Dob = event.target.value;
    }
    handleApplicationSubmitDateChange(event) {
        this.ApplicationSubmitDate = event.target.value;
    }
    handleAddValueClick(event){
        console.log(this.Salutation);
        console.log(this.FName);
        console.log(this.LName);
        console.log(this.Email);
        console.log(this.Phone);
        console.log(this.Dob);
        console.log(this.ApplicationSubmitDate);
        console.log(this.LName != null && this.Email != null && this.Phone != null && this.Dob != null);
        if(this.LName != null && this.Email != null && this.Phone != null && this.Dob != null){
            this.UserSalutation = this.Salutation;
            this.FirstName = this.FName;
            this.LastName = this.LName;
            this.UserEmail = this.Email;
            this.UserPhone = this.Phone;
            this.UserDob = this.Dob;
            this.UserApplicationSubmitDate= this.ApplicationSubmitDate;
            this.isChildVisible = true;
            this.isVisible = false;
        }
        else{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Failed',
                    message: 'Fill the Required Fields',
                    variant: 'Error',
                }),
            );
        }
  }
}