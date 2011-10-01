(function() {
  $(function() {
    return $('#ex1').onlynum({
      min: 0,
      max: 25,
      afterKeyup: function() {
        return alert($(this).val());
      }
    });
  });
}).call(this);
