const byteSize = (str) => {
  // write your code here
	 // Create a Blob from the string
    const blob = new Blob([str]);
    // Return the size of the Blob
    return blob.size;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
