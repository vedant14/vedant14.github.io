var slider = $('#biography-length-slider');

function updateSlider () {

  var bioNumber = slider.val();
  var bioToShow = $('#biography-length-' + bioNumber);

  for (var i = 1; i < 6; i++) {
    $('#biography-length-' + i).addClass('hide');
  }
  bioToShow.removeClass('hide');
}

