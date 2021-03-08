var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput; // Need extra type check to assign a value to type Unknown
}
// userName = userInput; //Unknown is different than 'any'
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
