try {
    name;
    console.log("This is an error");

} catch (error) {
    console.log("Error caught: ");
    console.log(error.message);
}

/*
if any error in try block then catch block will 
catch the error and print the error message
*/