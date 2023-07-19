export class CodeError  {

message(code:any,keyValue:any){
  var key =  Object.keys(keyValue)
  var value =  Object.values(keyValue)
let messageError;
  switch (code) {
    case 11000:
      messageError =  `${value} is already in use. Please choose a different ${key}.`;;
      break;
    default:
      messageError=  `error in ${key}`;
      break;
  }
  return messageError

}

}
