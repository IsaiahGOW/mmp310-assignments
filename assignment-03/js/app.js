/*jslint browser, es6, single, for, devel, this */
/*global window */

var enlargeButton = document.getElementById('enlarge-div');

var shrinkButton = document.getElementById('shrink-div');

function showEnlargeAlert() {
'use strict';
    alert('enlarge-div');
}

function showShrinkAlert() {
'use strict';
    alert('shrink-div');
}

//function showAlert() {
//'use strict';
//    alert('clicked');
//}

if(null !== enlargeButton ){
enlargeButton.addEventListener('click', showEnlargeAlert, false); 
    
} else { 
    console.error('No reference to ID enlarge-div established');
}

if(null !== shrinkButton ){
shrinkButton.addEventListener('click', showShrinkAlert, false);
} else { 
    console.error('No reference to ID shrink-div established');
}