// Get the modal
var modal = document.getElementById("mobile-filter__modal");
// Get the button that opens the modal
var openFilterBtn = document.getElementById("mobile-filter__btn");
// Get the btn that closes the modal
var closeBtn = document.getElementById("mobile-filter__modal--submit-btn");
// When the user clicks on the button, open the modal
openFilterBtn.onclick = function() {
  modal.style.display = "flex";
}
// When the user clicks on the closeBtn, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // console.log('yes')
  }
}


function openNav() {
  document.getElementById("sideNav").style.width = "300px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


// $('#brands').sortable({
//   containment: 'parent',
//   cursor: 'grabbing'
// });

// Sortable.create(brands, { /* options */ });
Sortable.create(brands);

/**
 * Date Range Picker jQuery Plugin
 * @author: Joshua Commey
 */
document.querySelectorAll(".datepicker").forEach((element, index) => {
	$(element).daterangepicker({
		showDropdowns: true
	});
})