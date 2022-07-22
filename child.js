import { api, track, LightningElement } from 'lwc';
import createRecord from '@salesforce/apex/vinfastCreation.createVinfastRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class LwcChild extends LightningElement {
@api salu
@api firstname;
@api lastname;
@api email;
@api phn;
@api birthdate;
@api applicationsubmission;
isSaveVisible = false;
isCancelVisible = false;
isCheckboxVisible = true;

@track recordId;
@track error;

handleCheck(event) {
this.isSaveVisible = event.target.checked;
}
handleSaveClick(event) {
    let vnfst = {'sobjectType': 'vinfast__c'};
    vnfst.Salutation__c = this.salu;
    vnfst.First_Name__c = this.firstname;
    vnfst.Last_Name__c = this.lastname;
    vnfst.WebEmail__c = this.email;
    vnfst.Phone__c = this.phn;
    vnfst.Date_of_Birth__c = this.birthdate;
    vnfst.Application_Submission_Date__c = this.applicationsubmission;
    console.log('vnfst',vnfst);
    createRecord({vfc: vnfst})
    .then(result => {
        this.recordId = result;
        console.log(result);
        if(this.recordId !== undefined) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record created',
                    variant: 'success',
                }),
            );
            this.isSaveVisible = false;
            this.isCheckboxVisible = false;
        }
        this.dispatchEvent(event);
        this.dispatchEvent(new CloseActionScreenEvent())
    })
    
    .catch(error => {
        this.error = error;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: 'Record Creation Failed',
                variant: 'error',
            }),
        );
        console.log("error", JSON.stringify(this.error));
        this.dispatchEvent(event);
        this.dispatchEvent(new CloseActionScreenEvent())
    });

}
    
                       
    handleCancelClick(){
        console.log('closeEvent');
        const closeEvent = new CustomEvent('close')
        this.dispatchEvent(closeEvent);
    }
}