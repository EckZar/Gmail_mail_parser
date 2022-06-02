function parseEmailText(text: string){
    
  let arr: Array<string|boolean> = [ 
              "",         // 0_ID (UUID)            (gen)         string
              "Lamudi",   // 1_Content form name    (const)       string
              "",         // 2_Full name            (inMessage)   string
              "",         // 3_Email                (inMessage)   string
              "",         // 4_Phone                (inMessage)   string
              "Lamudi_PH",// 5_Source               (const)       string
              "",         // 6_messageId            (inMessage)   string
              false       // 7_isPublished          (gen)         boolean
            ];  

  text = text.slice(text.indexOf("Contact Details:"), text.indexOf("Lead Type:"));
  arr[2] = textParse(text, ">Name: ", 1);
  arr[3] = textParse(text, ">Email:");
  arr[4] = textParse(text, ">Phone:");
  return arr;
}

function textParse(text: string, textStart: string, shift = 0){  
  text = text.slice(text.indexOf(textStart), text.length);
  return text.slice(text.indexOf(":")+1, text.indexOf("<")-shift).replace(/\s/,"");
}