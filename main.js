/*
Project: Cryptography


*/

let inputText, outputText;
let plainText, cipherText;

//get input
inputText = document.getElementById('inputText').value;

//write to innerHTML
outputText = document.getElementById('outputText');

 
function getInput()
{
	let inputText = document.getElementById('inputText').value;
	alert("From getInput(): " + inputText );
	return inputText;
}

function postOutput(inputText)
{
	//let outputText = document.getElementById("outputText").value;
	document.getElementById("outputText").innerHTML = inputText;
}


function encrypt(algo)
{
	let cipherText;
	//alert("Encrypting with algo: " + algo);
	let inputText = getInput();
	
	if (algo == "algo1")
	{
		cipherText = algo1Encrypt(inputText);
		alert(cipherText);
	}
	if (algo == "algo2")
	{
		
	}
	if (algo == "algo3")
	{
		
	}
	
	postOutput(cipherText);
}

function decrypt()
{
	//alert("Decrypting with algo: ");
	let inputText = document.getElementById('inputText').value;
	let outputText = document.getElementById("outputText").value;
	document.getElementById("outputText").innerHTML = inputText;

		algo1Encrypt(inputText);
}

function algo1Encrypt(plainText)
{
	//alert("Algo1: " + plainText);
	
	const plainTextArray = plainText.split("");
	const cipherArray = [];
	//swap every second letter
	for (let x = 0; x <= plainTextArray.length; x += 2)
	{
		//console.log(plainTextArray[x]);
		cipherArray.push(plainTextArray[x + 1]);
		cipherArray.push(plainTextArray[x]);

		
	}
	
	let outputText = document.getElementById("outputText").value;
	alert(cipherArray.join());
	cipherString = cipherArray.toString();
	//alert(cipherString.join(""));
	console.log("Plain Text: " + plainTextArray.toString());
	console.log("Cipher Text: " + cipherArray.toString());

}

function algo1Decrypt(cipherText)
{
	//alert("Algo1 Decrypting: " + cipherText);
	 
}