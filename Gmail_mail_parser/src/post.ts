function createCRMLead(optionsArray: Array<string|boolean>){
    let raw = JSON.stringify({
        "content": {
            "id": optionsArray[0],
            "form_name": optionsArray[1],
            "full_name": optionsArray[2],
            "email": optionsArray[3],
            "phone": optionsArray[4]
        },
        "source": optionsArray[5]
    });

    Logger.log(raw)

    let requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        payload: raw
    };
    let request = UrlFetchApp.fetch(leadPostURL, requestOptions);
    Logger.log(request.getResponseCode());
    Logger.log(raw);
    Logger.log("=====================================");
}

