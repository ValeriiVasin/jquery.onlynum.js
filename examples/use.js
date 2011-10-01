(function() {
  $(function() {
    $('#ex1').onlynum({
      min: 0,
      max: 25,
      afterKeyup: function() {
        return console.log($(this).val());
      }
    });
    $('#ex2').onlynum({
      min: 2010,
      max: 2015
    });
    return $('#ex3').onlynum({
      min: 15
    });
  });
}).call(this);
