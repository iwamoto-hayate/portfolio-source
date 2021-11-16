
$(function(){
  const toggleTarget = $('body');
  const toggleTrigger = $('.ham-menu_btn');
  toggleTrigger.click(function(){
    toggleTarget.toggleClass('show');
    return false;
  });
  toggleTarget.click(function() {
    toggleTarget.removeClass('show');
  })
});

// function ToggleAnimation() {
  
// }