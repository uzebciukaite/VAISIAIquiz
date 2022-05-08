"use strict"

var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
      text: "Kam naudingi obuoliai?",
      choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      answer: "Virškinimui"
    },
    {
      text: "Kokias ligas padeda gydyti agrastai?",
      choices:  ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
      answer:  "Cukrini diabetą"
    },
    {
      text: "Kokio vitamino gausu apelsinuose?",
      choices:  ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      answer: "Vitamino C"
    },
    {
      text: "Kokiais dalykais yra turtingi arbūzai?",
      choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      answer: "Visi teisingi"
    }
]

// Kintamieji
var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons, questionNumber, resultsNumber


// Paleidžia klausimyną
startQuiz.addEventListener("click", start)

function start(){
 
    quiz.innerHTML =
    `
        <!-- Pavadinimas -->
            <h1 id="header">Vaisiai</h1>

            <!-- Klausimas -->
            <p id="question">Aš norėčiau Jūsų paklausti...?</p>

            <!-- Atsakymai -->
            <div class="buttons">
                <button>Pirmas</button>
                <button>Antras</button>
                <button>Trečias</button>
                <button>Ketvirtas</button>
            </div>
            

            <!-- Progresas -->
            <footer>
                <p id="footer">Klausimas <span id="progress">1</span> iš 5</p>
            </footer>
    `
    
    loadSelectors()
    
}

// Pasižymi visus DOM elementus
function loadSelectors(){
    domQuestion = document.getElementById("question")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")
    questionNumber = 0
    resultsNumber = 0

    // Priskiria mygtukams eventus
    buttons.forEach((x, i) => {
            x.addEventListener("click", function(){
                // Skaičiuoja teisingus pasirinkimus
                if(this.innerText === questions[questionNumber - 1].answer){
                    resultsNumber++
                }
                
                // Atnaujina informaciją
                if(questionNumber <= buttons.length) {            
                    populate()
                } else {
                    quiz.innerHTML =
                    `
                    <h1 id="rezultatas">Jūsų rezultatas: ${resultsNumber}</h1>
                    <div id="endAnimation"></div>
                    <button onClick="start()">Bandyti dar kartą</button>

                    `
                    var endAnimation = document.getElementById("endAnimation")
                    var rezultatas = document.getElementById("rezultatas")
                    setTimeout(function(){
                    endAnimation.style.transform = "rotate(360deg)"
                    endAnimation.style.transitionDuration = "0.8s"
                    },200)
                    setTimeout(function(){
                    endAnimation.style.transform = "scale(1.2)"
                    endAnimation.style.transitionDuration = "0.5s"
                    },1000)
                    setTimeout(function(){
                    rezultatas.style.transform = "scale(1.2)"
                    endAnimation.style.transitionDuration = "1.3s"
                    },1000)
                    
                }
        })
    })


    // Užkrauna turinį
    populate()
}

// Užkrauna ir atnaujina turinį
function populate(){
     domQuestion.innerText = questions[questionNumber].text
    
    buttons.forEach((x, i) => {
        x.innerText = questions[questionNumber].choices[i]
    })

    questionNumber++
    progress.innerText = questionNumber
}

//animacija start page'ui

var grid = document.getElementsByClassName("grid")[0]
grid.addEventListener("mousemove", function(){
var startAnimation = document.getElementById("startAnimation")
startAnimation.style.display = "block"
setInterval(function(){
    setTimeout(function(){
        startAnimation.style.transform = "translateY(50px)"
        startAnimation.style.transitionDuration = "1s"
        },10)
    setTimeout(function(){
        startAnimation.style.transform = "translateY(-50px)"
        startAnimation.style.transitionDuration = "1s"
        },1000)      
},2000)
}) 