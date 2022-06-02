function getNewMessages(){
    return GmailApp.getUserLabelByName("OneSierra")
                        .getThreads()[0]
                        .getMessages()
                        .filter(mail=>mail.isUnread());
}