/*function til at beskrive hvor længe der skal ventes mellem hvert bogstav bliver skrevet, i millisekunder.
        Promise repræsenterer en eventual færdiggørelse af funktionen, når promise er blevet resolved*/
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms))
          }
          /*array med de ord, der kommer til at køre i loopet*/
          const phrases = [' min base', ' mit fristed', ' bare IKEA']
          
          /* en const til at hente typewriter*/
          const el = document.getElementById('typewriter')
          
          /* hjælpe-variabel, brugt til tiden der bliver ventet mellem steps*/
          let sleepTime = 100
          
          /*det nummer i array'et, som loop kommer til at starte på */
          let curPhraseIndex = 0
          
          /*async gør det muligt at pause funktionens udførelse, ved hjælp af
                  funktionen sleep. Det gør desuden denne funktion uafhængig af hvad der sker på resten af siden*/
          const writeLoop = async function () {
            while (true) {
              let curWord = phrases[curPhraseIndex]
          
              /*så længe i er mindre end længden på ordet, læg 1 til */
              for (let i = 0; i < curWord.length; i++) {
                /*udskriver text i variablen el, der var lig med span med id "typewriter" i html */
                el.innerText = curWord.substring(0, i + 1)
                /*sætter delay mellem hvert bogstav bliver udskrevet sleepTime er defineret længere oppe*/
                await sleep(sleepTime)
              }
          
              /*pause mellem et ord bliver skrevet og slettet*/
              await sleep(sleepTime * 10)
          
              /*sletter ordet der lige er blevet skrevet, ved at gøre det samme men modsat */
              for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i - 1)
                await sleep(sleepTime)
              }
          
              await sleep(sleepTime * 10)
          
              /*tjekker hvor vi er i index, hvis det er det sidste ord går den tilbage til 0, ellers lægger en til for at gå videre til det næste ord*/
              if (curPhraseIndex === phrases.length - 1) {
                curPhraseIndex = 0
              } else {
                curPhraseIndex++
              }
            }
          }
          writeLoop()
          