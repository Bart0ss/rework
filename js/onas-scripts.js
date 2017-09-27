$("#counter").counter({
autoStart: true, // true/false, default: true
duration: 5000, // milliseconds, default: 1500
countFrom: 0,// start counting at this number, default: 0
countTo: 100,// count to this number, default: 0
runOnce: true,// only run the counter once, default: false
placeholder: "?", // replace the number with this before counting,
easing: "easeOutCubic", // easing effects
onStart: function() {}, // callback on start of the counting
onComplete: function() {}, // callback on completion of the counting
numberFormatter: // function used to format the displayed numbers.
function(number) {
     var liczba1 = parseInt(number);
     return liczba1 + " %";
    }
});

$("#counter1").counter({
autoStart: true, // true/false, default: true
duration: 5000, // milliseconds, default: 1500
countFrom: 0,// start counting at this number, default: 0
countTo: 1000,// count to this number, default: 0
runOnce: true,// only run the counter once, default: false
placeholder: "?", // replace the number with this before counting,
easing: "easeOutCubic", // easing effects
onStart: function() {}, // callback on start of the counting
onComplete: function() {}, // callback on completion of the counting
numberFormatter: // function used to format the displayed numbers.
function(number) {
     var liczba1 = parseInt(number);
     return liczba1;
    }
});

$("#counter2").counter({
autoStart: true, // true/false, default: true
duration: 5000, // milliseconds, default: 1500
countFrom: 0,// start counting at this number, default: 0
countTo: 100,// count to this number, default: 0
runOnce: true,// only run the counter once, default: false
placeholder: "?", // replace the number with this before counting,
easing: "easeOutCubic", // easing effects
onStart: function() {}, // callback on start of the counting
onComplete: function() {}, // callback on completion of the counting
numberFormatter: // function used to format the displayed numbers.
function(number) {
     var liczba1 = parseInt(number);
     return liczba1 + " %";
    }
});

$("#counter3").counter({
autoStart: true, // true/false, default: true
duration: 5000, // milliseconds, default: 1500
countFrom: 0,// start counting at this number, default: 0
countTo: 100,// count to this number, default: 0
runOnce: true,// only run the counter once, default: false
placeholder: "?", // replace the number with this before counting,
easing: "easeOutCubic", // easing effects
onStart: function() {}, // callback on start of the counting
onComplete: function() {}, // callback on completion of the counting
numberFormatter: // function used to format the displayed numbers.
function(number) {
     var liczba1 = parseInt(number);
     return liczba1 + " %";
    }
});