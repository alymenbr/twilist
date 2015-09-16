@Swiper = new Swipe(['page1', 'page2'])

Template.layout.helpers
  Swiper: -> Swiper

Template.layout.rendered = ->
  # initial page
  Swiper.setInitialPage 'page1'

  # page control
  Tracker.autorun ->
    if Swiper.pageIs('page1')
      Router.go 'page1'
      Swiper.leftRight(null, 'page2')

  Tracker.autorun ->
    if Swiper.pageIs('page2')
      Router.go 'page2'    	
      Swiper.leftRight('page1', null)