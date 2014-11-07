(($) ->
  console.log 'jQuery safely'
  $("#main-nav").menuzord
    align: "left"
    indicatorFirstLevel: "<i class='fa fa-angle-down'></i>"
  $('#width-slider').royalSlider
    arrowsNav: true,
    loop: false,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: "fill",
    arrowsNavAutoHide: false,
    autoScaleSlider: true,
    autoScaleSliderWidth: 960,
    autoScaleSliderHeight: 350,
    controlNavigation: "bullets",
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    autoPlay: false,
    transitionType: "move",
    globalCaption: true,
    deeplinking: {
      enabled: true,
      change: false
    },
    imgWidth: 1200,
    imgHeight: 400
  $("#featured_slider").everslider
    mode: "circular"
    itemKeepRatio: false
    pagination: false
    mouseWheel: true
    navigation: true
    keyboard: true
    nextNav: '<span class="alt-arrow"><i class="fa fa-angle-right"></i></span>'
    prevNav: '<span class="alt-arrow"><i class="fa fa-angle-left"></i></span>'
  return
) jQuery
