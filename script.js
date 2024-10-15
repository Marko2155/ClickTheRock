document.addEventListener('DOMContentLoaded', function() {
    var rock = document.getElementById("rock")
    var score = document.getElementById("score")
    var scoreValue = Number(score.innerText)
    rock.addEventListener("click", function() {
        scoreValue += 1
        score.innerText = scoreValue
    })
})