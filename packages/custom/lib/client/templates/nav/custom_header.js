Template.header.events({
  'mouseenter header': function(e){
    $('.zone-wrapper.top').toggleClass('animate');
  },
  'mouseleave .zone-wrapper.top': function(e){
    $('.zone-wrapper.top').removeClass('animate');
  }
});

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
});