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
          $(this).val(checkMax(value));
        } else {
          $(this).val(buffer);
        }
        if (typeof options.afterKeyup === 'function') {
          return (options.afterKeyup || K).apply(this, arguments);
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
        focus: focus,
        blur: blur,
        keyup: keyup
      });
    };
  })(jQuery);
}).call(this);
