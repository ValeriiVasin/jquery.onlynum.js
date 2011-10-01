$(->
  $('#ex1').onlynum
    min: 0
    max: 25
    afterKeyup: ->
      console.log $(this).val()
  $('#ex2').onlynum
    min: 2010
    max: 2015
  $('#ex3').onlynum
    min: 15
)
