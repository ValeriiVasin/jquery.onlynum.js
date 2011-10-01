(($) ->
  $.fn.onlynum = (options = {}) ->
    $this = this
    buffer = 0
    numRegExp = /^[\d]*$/

    K = ->
    focus = -> buffer = $(this).val()
    blur = -> $(this).val checkMin($(this).val())
    keyup = ->
      value = $(this).val()
      if numRegExp.test value
        value = checkMax(value)
        buffer = value
      else
        value = buffer
      $(this).val value
      (options.afterKeyup || K).apply(this, arguments) if typeof options.afterKeyup == 'function'
    checkMax = (value) ->
      if options.max? and value > options.max then options.max else value
    checkMin = (value) ->
      if options.min? and value < options.min then options.min else value
    @bind {focus, blur, keyup}
) jQuery
