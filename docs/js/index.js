// Get the modal
var modal = document.getElementById("mobile-filter__modal");
// Get the button that opens the modal
var openFilterBtn = document.getElementById("mobile-filter__btn");
// Get the btn that closes the modal
var closeBtn = document.getElementById("mobile-filter__modal--submit-btn");

// When the user clicks on the button, open the modal
openFilterBtn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks on the closeBtn, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == addBrandModal) {
    this.addBrandModal.style.display = 'none'
  }
}


// Orientation Switch (mobile)
var orientSwitch = document.getElementById('mobile-filter__orientation-switch--icon');
var orientSwitchText = document.getElementById('mobile-filter__orientation-switch--text')

orientSwitch.onclick = function () {
  orientSwitch.classList.toggle('rotated');
  if (orientSwitch.classList.contains('rotated')) {
    orientSwitchText.innerText = 'Row Tabs'
  } else {
    orientSwitchText.innerText = 'Column Tabs'
  }
}

// Orientation Switch (desktop)
var orientSwitchD = document.getElementById('desktop-filter__orientation-switch');
var orientSwitchDIcon = document.getElementById('desktop-filter__orientation-switch--icon');
var orientSwitchTextD = document.getElementById('desktop-filter__orientation-switch--text')
var brandsDiv = document.getElementById('brands');
// var brandCanvasContainer = document.getElementById('brand--canvas-container');

orientSwitchD.onclick = function () {
  orientSwitchDIcon.classList.toggle('rotated');
  if (orientSwitchDIcon.classList.contains('rotated')) {
    // switch flex direction of #brands to row
    brandsDiv.style.flexDirection = 'row';
    brandsDiv.classList.add('rotatedDivContainer')
    orientSwitchTextD.innerText = 'Row Tabs'
    // brandCanvasContainer.classList.add('inColumn');
    document.querySelectorAll('.brand').forEach(function (el) { el.classList.add('rotatedChild') })
    document.querySelectorAll('.brand--canvas-container').forEach(function (el) { el.classList.add('inColumn') })
  } else {
    brandsDiv.classList.remove('rotatedDivContainer')
    // brandCanvasContainer.classList.remove('inColumn');
    document.querySelectorAll('.brand--canvas-container').forEach(function (el) { el.classList.remove('inColumn') })
    document.querySelectorAll('.brand').forEach(function (el) { el.classList.remove('rotatedChild') })
    // switch flex direction of #brands to column
    brandsDiv.style.flexDirection = 'column';
    orientSwitchTextD.innerText = 'Column Tabs'
  }
}


function openNav() {
  document.getElementById("sideNav").style.width = "300px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


// Add brand Modal
var addBrandModal = document.getElementById('addBrand-modal')
var addBrandModalCloseBtn = document.getElementById('addBrand-modal--add-btn')
// for closing add brand modal
addBrandModalCloseBtn.onclick = function () { addBrandModal.style.display = 'none' }
// for opening add brand modal
var addBrandModalOpenBtn = document.getElementById('desktop-filter__add-brand');
addBrandModalOpenBtn.onclick = function () { addBrandModal.style.display = 'flex' }
var addBrandModalOpenBtnMobile = document.getElementById('mobile-filter__add-brand');
addBrandModalOpenBtnMobile.onclick = function () { addBrandModal.style.display = 'flex' }

// Sortable.create(brands, { /* options */ });
Sortable.create(brands, { handle: ".brand-grip" });

/**
 * Date Range Picker jQuery Plugin
 * @author: Joshua Commey edited by Eric Adjei
 */
var start = moment();
var startFormatted = start.subtract(29, 'days')
var end = moment();

document.querySelectorAll(".datepicker").forEach(function (element) {
  $(element).daterangepicker({
    showDropdowns: true,
    startDate: startFormatted,
    endDate: end,
    locale: {
      format: 'DD MMMM YYYY',
    }
  },
    function () {
      var currentDateRange = $(element).val()
      console.log(currentDateRange)
      $('#main-content--current-date strong').text(currentDateRange)
    }
  );
})



// Charts
var brand1Chart = new Chart($("#brand1"), {
  type: 'bar',
  data: {
    labels: ['2019-10-09', '2019-10-10', '2019-10-11'],
    datasets: [
      {
        label: 'Brand One Chart Data',
        fill: false,
        borderWidth: 0.5,
        weight: 0.1,
        data: [40, 57, 34],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"]
      }
    ]
  }, options: {
    legend: {
      display: true
    }
  }
});
var brand1Doughnut = new Chart($("#brand1--doughnut"), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"]
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],

  }
})

var brand2Chart = new Chart($("#brand2"), {
  type: 'bar',
  data: {
    labels: ['2019-10-09', '2019-10-10', '2019-10-11'],
    datasets: [
      {
        label: 'Brand Two Chart Data',
        fill: false,
        borderWidth: 0.5,
        weight: 0.1,
        data: [24, 40, 34],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"]
      }
    ]
  }, options: {
    legend: {
      display: true
    }
  }
});
var brand2Doughnut = new Chart($("#brand2--doughnut"), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40, 20, 10],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"]
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],

  }
})

var brand3Chart = new Chart($("#brand3"), {
  type: 'bar',
  data: {
    labels: ['2019-10-09', '2019-10-10', '2019-10-11'],
    datasets: [
      {
        label: 'Brand Two Chart Data',
        fill: false,
        borderWidth: 0.5,
        weight: 0.1,
        data: [57, 100, 34],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"]
      }
    ]
  }, options: {
    legend: {
      display: true
    }
  }
});
var brand3Doughnut = new Chart($("#brand3--doughnut"), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [20, 10, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"]
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],

  }
})

// $('.brand--canvas-container').slick({
//   dots: true,
//   centerMode: true,
//   variableWidth: true
// });