// let getDate
//can get rid of a module key word if necessary
module.exports=()=>{
    const date = new Date();
    // let day = date.getDay();
    const options = {
        weekday : "long",
        // year : "numeric",
        month : "long",
        day : "numeric"
    };
    return date.toLocaleDateString("en-US",options);
    // return day;
}
// module.exports = getDate;
// module.exports.getDate = getDate;//if multiple function to send