console.log("test")
$(function() {
  $('.tablist a').click(function() {

    // Check for active
    $('.tablist li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div').hide();
    $(currentTab).show();

    return false;
  });
});
