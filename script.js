function main() {

    let confirm = document.getElementById('result').innerHTML;
    // To check the 
    if (confirm > 21){
        alert("Game Over 🫢! Please Restart the Game.");
    }else{
        let x;
        // To remove the error shows '0' 
        do {
            // To get 13 cards randomly
            x = Math.floor(Math.random() * 100 / 7.69);
         }while(x == 0)

        // To show the current total on display
        let currentTT = parseInt(document.getElementById("result").innerHTML);
        let total = currentTT + x;
        document.getElementById("result").innerHTML = total;

        // Conditions
        if(total < 21) {
            document.getElementById("main-result").innerHTML = "Generate another Card ?";
        }else if (total == 21) {
            document.getElementById("main-result").innerHTML = "You've Won!🤩"
            alert("Congratulations! 🏆");
            document.getElementById('btn-res').style.display="Block";
        }else if (total > 21) {
            document.getElementById("main-result").innerHTML = "You've Lost!"
            alert("Lost 🙁! Click 'Restart' to play again.");
            document.getElementById('btn-res').style.display="Block";
        }

        // To get randomly card images
        var img = document.createElement("img");
        img.src = "images/" + x + ".png";
        img.height = 265;

        document.body.appendChild(img);
    }
}

function restart() {
    location.reload();
}