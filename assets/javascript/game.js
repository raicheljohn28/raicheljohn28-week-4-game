<<<<<<< HEAD
window.onload = function () {

    //Setting up random number for user
    $(document).ready(function () {
        var crysCol = Math.floor(Math.random() * 101 + 19)
=======
window.onload = function() {
 
 //Setting up random number for user
 $(document).ready(function () {
    var crysCol = Math.floor(Math.random() * 101 + 19)
    console.log(crysCol);
    $('#number').text(crysCol);


    //Set  up four random number arrays 

    var randNumbers = [];
    var total = 0;
    var wins = 0;
    var lose = 0;
    $('#numWins').text(wins);
    $('#numLose').text(lose);
  
  var audio = new Audio("assets/music/Bgnd.mp3");
        audio.loop = true;
        audio.play();

    //Random number for crystals

    function crystalCollector() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            randNumbers.push(num);
        }
        console.log(randNumbers)
    }

    crystalCollector();

    //Reset the game

    function reset() {
        crysCol = Math.floor(Math.random() * 101 + 19)
>>>>>>> 13eae265ee4fb08a06feffce0d160234b9035bb1
        console.log(crysCol);
        $('#number').text(crysCol);


        //Set  up four random number arrays 

        var randNumbers = [];
        var total = 0;
        var wins = 0;
        var lose = 0;
        $('#numWins').text(wins);
        $('#numLose').text(lose);

        var audio = new Audio("assets/music/Bgnd.mp3");
        audio.loop = true;
        audio.play();

        //Random number for crystals

        function crystalCollector() {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 11 + 1);
                randNumbers.push(num);
            }
            console.log(randNumbers)
        }

        crystalCollector();

        //Reset the game

        function reset() {
            crysCol = Math.floor(Math.random() * 101 + 19)
            console.log(crysCol);
            $('#number').text(crysCol);
            randNumbers = [];
            crystalCollector();
            total = 0;
            $('#joined').text(total);
        }

        //User wins

        function winner() {
            alert("You won the game!!!");
            wins++;
            $('#numWins').text(wins);
            reset();
        }

        //User losses

        function loser() {
            alert("You lose!!");
            lose++;
            $('#numLose').text(lose);
            reset();
        }

        //Function the jewels

        $('#jone').on('click', function () {
            total = total + randNumbers[0];
            console.log("New score" + total);
            $('#joined').text(total);

            //Win or lose condition check
            if (total === crysCol) {
                winner();
            }
            else if (total > crysCol) {
                loser();
            }
        })

        $('#jtwo').on('click', function () {
            total = total + randNumbers[1];
            console.log("New score" + total);
            $('#joined').text(total);

            //Win or lose condition check
            if (total === crysCol) {
                winner();
            }
            else if (total > crysCol) {
                loser();
            }
        })

        $('#jthree').on('click', function () {
            total = total + randNumbers[2];
            console.log("New score" + total);
            $('#joined').text(total);

            //Win or lose condition check
            if (total === crysCol) {
                winner();
            }
            else if (total > crysCol) {
                loser();
            }
        })

        $('#jfour').on('click', function () {
            total = total + randNumbers[3];
            console.log("New score" + total);
            $('#joined').text(total);

            //Win or lose condition check
            if (total === crysCol) {
                winner();
            }
            else if (total > crysCol) {
                loser();
            }
        });
    });
}
