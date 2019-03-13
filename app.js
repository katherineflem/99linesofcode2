
let friends = ['George', 'Audrey', 'Emily', 'MM', 'Conrad']

let btn = document.createElement("button");
let btntxt = document.createTextNode("Sing!");
btn.appendChild(btntxt);
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    for (var i = 0; i < friends.length; i++) { //all of the following will run on a loop
        div = document.createElement("div"); //created a div that will hold each friend
        div.className = "friend"; //created classname for the div
        let friendName = document.createElement("h3"); //defined a heading called friend name
        let friendtxt = document.createTextNode(friends[i]);//gave the heading some inner text of each friend in the array
        friendName.appendChild(friendtxt);
        div.appendChild(friendName);
        document.body.appendChild(div); //added the whole thing to the document
        for (var a = 99; a > 0; a--) { // start variable at 99 and count down in the loop-- nested loop within a loop
            let paragraph = document.createElement("p");//create a paragraph and give it text of each line in the song
            paragraph.innerText = [a] + "lines of code in the file , " + [a] + " lines of code. " + friends[i] + " strikes one out,clears it all out " + [a - 1] + " lines of code in the file. "
            div.appendChild(paragraph);


        }
    }
})






