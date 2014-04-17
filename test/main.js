var $ = require('../')
var test = require('tape').test

test('jQuery', function(t) {
  var elem, i,
    obj = $('div'),
    code = $('<code/>'),
    img = $('<img/>'),
    div = $('<div/><hr/><code/><b/>'),
    exec = false,
    lng = '',
    expected = 0,
    attrObj = {
      'text': 'test',
      'class': 'test2',
      'id': 'test3'
    }

  test('click', function(t) {
    t.ok($.fn.click, 'click should exist')
    expected++
    t.end()
  })

  test('width', function(t) {
    t.ok($.fn.width, 'width should exist')
    expected++
    t.end()
  })

  test('offset', function(t) {
    t.ok($.fn.offset, 'offset should exist')
    expected++
    t.end()
  })

  test('css', function(t) {
    t.ok($.fn.css, 'css should exist')
    expected++
    t.end()
  })

  test('attr', function(t) {
    t.ok($.fn.attr, 'attr should exist')
    expected++
    t.end()
  })

  test('expected', function(t) {
    t.equal(expected, 5)
    t.end()
  })

  t.equal($().length, 0, '$() === $([])')
  t.equal($(undefined).length, 0, '$(undefined) === $([])')
  t.equal($(null).length, 0, '$(null) === $([])')
  t.equal($('').length, 0, '$("") === $([])')
  t.equal($('#').length, 0, '$("#") === $([])')
  t.equal($(obj).selector, 'div', '$(obj) === obj)')
  t.equal($(window).length, 1, 'should only be 1 window')
  t.end()
})
