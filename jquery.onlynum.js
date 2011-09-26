(function() {
  (function($) {
    return $.fn.onlynum = function(options) {
      var $this, buffer, checkMax, checkMin, numRegExp, onBlur, onFocus, onKeyUp;
      if (options == null) {
        options = {};
      }
      $this = this;
      buffer = 0;
      numRegExp = /^[\d]*$/;
      onFocus = function() {
        return buffer = $(this).val();
      };
      onBlur = function() {
        return $(this).val(checkMin($(this).val()));
      };
      onKeyUp = function() {
        var value;
        value = $(this).val();
        if (numRegExp.test(value)) {
          return $(this).val(checkMax(value));
        } else {
          return $(this).val(buffer);
        }
      };
      checkMax = function(value) {
        value = value > options.max ? options.max : options.max != null ? value : void 0;
        return value;
      };
      checkMin = function(value) {
        if (options.min != null) {
          value = value < options.min ? options.min : value;
          $(this).val(value);
        }
        return value;
      };
      return this.bind({
        focus: onFocus,
        blur: onBlur,
        keyup: onKeyUp
      });
    };
  })(jQuery);
}).call(this);
