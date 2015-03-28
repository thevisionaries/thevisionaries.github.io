(function()
{
  var app = angular.module('EyeSite', ['ngTouch', 'visionTest']); // declares test module
  app.controller('visionTest', function(){
// FONT WEIGHT
    this.font_weight_l = false; // left counter
    this.font_weight_r = false; // right counter
    this.iter_weight = 5;
// FONT SPACING
    this.font_spacing_l = false; // left counter
    this.font_spacing_r = false; // right counter
    this.iter_spacing = 3;
    while(!font_weight_l || !font_weight_r)
    {
      this.show_weight = true;
      this.show_spacing = false;
    }
    this.iter_weight *= 100;
    while(!font_spacing_l || !font_spacing_r)
    {
      this.show_weight = false;
      this.show_spacing = true;
    }
  });
})();