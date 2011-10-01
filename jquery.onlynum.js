(function() {
  (function($) {
    return $.fn.onlynum = function(options) {
      var $this, K, blur, buffer, checkMax, checkMin, focus, keyup, numRegExp;
      if (options == null) {
        options = {};
      }
      $this = this;
      buffer = 0;
      numRegExp = /^[\d]*$/;
      K = function() {};
      focus = function() {
        return buffer = $(this).val();
      };
      blur = function() {
        return $(this).val(checkMin($(this).val()));
      };
      keyup = function() {
        var value;
        value = $(this).val();
        if (numRegExp.test(value)) {
          value = checkMax(value);
          buffer = value;
        } else {
          value = buffer;
        }
        $(this).val(value);
        if (typeof options.afterKeyup === 'function') {
          return (options.afterKeyup || K).apply(this, arguments);
        }
      };
      checkMax = function(value) {
        if ((options.max != null) && value > options.max) {
          return options.max;
        } else {
          return value;
        }
      };
      checkMin = function(value) {
        if ((options.min != null) && value < options.min) {
          return options.min;
        } else {
          return value;
        }
      };
      return this.bind({
        focus: focus,
        blur: blur,
        keyup: keyup
      });
    };
  })(jQuery);
}).call(this);
