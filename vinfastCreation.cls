public class vinfastCreation {
    @AuraEnabled
    public static String createVinfastRecord(vinfast__c vfc) {
        system.debug('vfc'+ vfc);
        insert vfc;
        return vfc.id;
    }
}