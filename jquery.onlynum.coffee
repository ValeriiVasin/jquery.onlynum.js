(($) ->
  $.fn.onlynum = (options = {}) ->
    $this = this
    buffer = 0
    numRegExp = /^[\d]*$/

    focus = -> buffer = $(this).val()
    blur = -> $(this).val checkMin($(this).val())
    keyup = ->
      value = $(this).val()
      if numRegExp.test value
        $(this).val checkMax(value)
      else
        $(this).val buffer
    checkMax = (value) ->
      value = if value > options.max then options.max else value if options.max?
      value
    checkMin = (value) ->
      if options.min?
        value = if value < options.min then options.min else value
        $(this).val value
      value
    @bind {focus, blur, keyup}
) jQuery
