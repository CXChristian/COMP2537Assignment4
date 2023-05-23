let firstCard = undefined
    let secondCard = undefined
    let pairsTotal = 3;
    let clickCount = 0;
    let pairsMade = 0;
    let pairsLeft = pairsTotal;
    let startGame = false;
    let seconds = 0;
    let minutes = 0;

const setup = () => {
    let power = 0;
    document.getElementById("clickCount").innerHTML = "Clicks made: " + clickCount;
    document.getElementById("pairsTotal").innerHTML = "Total pairs: " + pairsTotal;
    document.getElementById("pairsMade").innerHTML = "Pairs made: " + pairsMade;
    document.getElementById("pairsLeft").innerHTML = "Pairs left: " + pairsLeft;
    document.getElementById("timer").innerHTML = "Timer: (" + minutes + ":" + seconds + ")";

    document.getElementById("startButton").addEventListener("click", function() {
        console.log("Start button clicked");
        startGame = true
        timer()
    });


    function timer() {
    setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (!(pairsMade == pairsTotal)){
        document.getElementById("timer").innerHTML = "Timer: (" + minutes + ":" + seconds + ")";
        }
    }, 1000);
        
  }

    $(".card").on(("click"), function () {
        if (!startGame || $(this).hasClass("flip")) {
            return
        };

      $(this).toggleClass("flip");  
      console.log("This: ", this)
      clickCount++

      if (firstCard == undefined) {
        firstCard = $(this).find(".front_face")[0]
      } else if (secondCard == undefined) {
        secondCard = $(this).find(".front_face")[0]
      }

      if (!(firstCard == undefined) && !(secondCard == undefined)) {
        if (firstCard.src == secondCard.src) {
            console.log("match");
            $(`#${firstCard.id}`).parent().off("click")
            $(`#${secondCard.id}`).parent().off("click")
            firstCard = undefined
            secondCard = undefined
            pairsMade++
            pairsLeft--
        } else {
            console.log("no match")
            power++
            setTimeout(() => {
                $(`#${firstCard.id}`).parent().toggleClass("flip")
                $(`#${secondCard.id}`).parent().toggleClass("flip")
                firstCard = undefined
                secondCard = undefined
            }, 1000)

            if (power == 3) {
                console.log("power up!")
                power = 0;
   
                setTimeout(() => {
                    $(`.card`).toggleClass("flip")
                }, 1000)

                setTimeout(() => {
                    $(`.card`).toggleClass("flip")
                }, 2000)
            }
        }
      }
      
    if(pairsMade == pairsTotal){
        setTimeout(() => {
            alert("You Won!")
        }, 1000)
    }

    document.getElementById("clickCount").innerHTML = "Clicks made: " + clickCount;
    document.getElementById("pairsTotal").innerHTML = "Total pairs: " + pairsTotal;
    document.getElementById("pairsMade").innerHTML = "Pairs made: " + pairsMade;
    document.getElementById("pairsLeft").innerHTML = "Pairs left: " + pairsLeft;
    });
}

  function easy() {
    pairsTotal = 3;
    clickCount = 0;
    pairsMade = 0;
    pairsLeft = pairsTotal;

    document.getElementById('difficulty').style.visibility = 'hidden';
    $('#game').append(`
        <div id="game_grid">
            <div class="card">
                <img id="img1" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img2" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img3" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img4" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img5" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img6" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
        </div>
    
        `)
        document.getElementById("game_grid").style.width = "600px";
        document.getElementById("game_grid").style.height = "400px";
        $(".card").css("width", "33.3%");
    $(document).ready(setup)
}

function medium() {
    pairsTotal = 6;
    clickCount = 0;
    pairsMade = 0;
    pairsLeft = pairsTotal;

    document.getElementById('difficulty').style.visibility = 'hidden';
    $('#game').append(`
        <div id="game_grid">
            <div class="card">
                <img id="img1" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img2" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img3" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img4" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img5" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img6" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img7" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img8" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img9" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img10" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img11" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img12" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
        </div>
    
        `)
        document.getElementById("game_grid").style.width = "600px";
        document.getElementById("game_grid").style.height = "800px";
        $(".card").css("width", "33.3%");

    $(document).ready(setup)
}

function hard() {
    pairsTotal = 9;
    clickCount = 0;
    pairsMade = 0;
    pairsLeft = pairsTotal;

    document.getElementById('difficulty').style.visibility = 'hidden';
    $('#game').append(`
        <div id="game_grid">
            <div class="card">
                <img id="img1" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img2" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img3" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img4" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img5" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img6" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img7" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img8" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img9" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img10" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img11" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img12" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img13" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img14" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img15" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img16" class="front_face" src="images/002.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img17" class="front_face" src="images/003.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
            <div class="card">
                <img id="img18" class="front_face" src="images/001.png" alt="">
                <img class="back_face" src="images/back.webp" alt="">
            </div>
        </div>
    
        `)
        document.getElementById("game_grid").style.width = "1000px";
        document.getElementById("game_grid").style.height = "900px";
        $(".card").css("width", "25%");

    $(document).ready(setup)
}


function dark() {
    var element = document.getElementById("game_grid");
        element.style.backgroundColor = "black";
}

function light() {
    var element = document.getElementById("game_grid");
        element.style.backgroundColor = "white";
}