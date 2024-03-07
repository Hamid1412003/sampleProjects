// function toggleDiv(divId) {
//     var div = document.getElementById(divId);
//     if (div.style.display === 'none') {
//         div.style.display = 'block';
//     } else {
//         div.style.display = 'none';
//     }
// }
        
    // function myfun(){
    //     const showButton = document.getElementById('myBt1');
    //     const hideButton = document.getElementById('myBt2');
    //     const divs = document.querySelectorAll('.container1,.container2,.container3,.container4,.container5,.container6');

    //     showButton.addEventListener('click', function () {
    //         // Loop through divs and show them
    //         divs.forEach(function (div) {
    //             div.style.display = 'block';
    //         });
    //     });

    //     hideButton.addEventListener('click', function () {
    //         // Loop through divs and hide them
    //         divs.forEach(function (div) {
    //             div.style.display = 'none';
    //         });
    //     });
    // }
    function clickarabic() {
        const button = document.getElementById("bt1");
        const arabicCollection = document.getElementsByClassName("arabic-text");
        const englishCollection = document.getElementsByClassName("English-text");
      
        const currentText = button.innerHTML;
      
        if (currentText === "العربية") {
          button.innerHTML = "English";
          for (const element of arabicCollection) {
            element.style.display = "block";
          }
          for (const element of englishCollection) {
            element.style.display = "none";
          }
        } else {
          button.innerHTML = "العربية";
          for (const element of arabicCollection) {
            element.style.display = "none";
          }
          for (const element of englishCollection) {
            element.style.display = "block";
          }
        }
      
        // Return to English if the current language is English
        // if (currentText === "English") {
        //   button.innerHTML = "العربية";
        //   for (const element of arabicCollection) {
        //     element.style.display = "block";
        //   }
        //   for (const element of englishCollection) {
        //     element.style.display = "none";
        //   }
        // }
      }

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Show and Hide Divs</title>
//     <style>
//         .hidden {
//             display: none;
//         }
//     </style>
// </head>
// <body>
//     <button id="showButton">Show Divs</button>
//     <button id="hideButton">Hide Divs</button>

//     <div class="hidden" id="div1">Div 1</div>
//     <div class="hidden" id="div2">Div 2</div>
//     <div class="hidden" id="div3">Div 3</div>

//     <script>
//         // Get references to the buttons and divs
//         const showButton = document.getElementById('showButton');
//         const hideButton = document.getElementById('hideButton');
//         const divs = document.querySelectorAll('.hidden');

//         // Add click event listener to showButton
//         showButton.addEventListener('click', function () {
//             // Loop through divs and show them
//             divs.forEach(function (div) {
//                 div.style.display = 'block';
//             });
//         });

//         // Add click event listener to hideButton
//         hideButton.addEventListener('click', function () {
//             // Loop through divs and hide them
//             divs.forEach(function (div) {
//                 div.style.display = 'none';
//             });
//         });
//     </script>
// </body>
// </html>
