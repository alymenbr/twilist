Template.layout.rendered = ->
  // hack: these third party header animation scripts must be inserted at the bottom of body
  $('body').append('<script type="text/javascript" src="scripts/custom.js"></script>')
