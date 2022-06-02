function start(){
   
    let mails = getNewMessages();

    let publishedArray: Array<string|boolean> = [];

    mails.forEach(mail=>{
        let body = mail.getPlainBody();
        let id = mail.getId();
        let messageInfo: Array<string|boolean> = parseEmailText(body);
        messageInfo[0] = createUUID();
        messageInfo[6] = id;
        messageInfo[7] = checkByMessageID(id);
        publishedArray.push(messageInfo);
        mail.markRead();
    })

    publishedArray.filter(array => !array[7])
                .forEach(array => {
                    addDBLead(array); 
                    createCRMLead(array)
                });

}

function addDBLead(arr: Array<string|boolean>){
    arr[7] = true;
    mainDBSheet?.getRange(mainDBSheet.getLastRow()+1, 1, 1, 8).setValues([arr]);
}

function createUUID(){
    return checkByUUID();
}

function checkByMessageID(id: string){
    let ids = mainDBSheet?.getRange(2, 7, mainDBSheet.getLastRow()-1, 1).getValues().map(ids=>ids[0]);
    if(ids?.indexOf(id)>0)
    {
        return true;
    } else {
        return false;
    }    
}

function checkByUUID(){
    let ids = mainDBSheet?.getRange(2, 1, mainDBSheet.getLastRow()-1, 1).getValues().map(ids=>ids[0]);
    do{
        var uuid = Utilities.getUuid();
    } while(ids?.indexOf(uuid)>0)
    return uuid;
}