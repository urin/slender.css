location.hash = location.hash || '#overview'

window.addEventListener('hashchange', function() {
  vm.hashchange()
})

var vm
document.addEventListener('DOMContentLoaded', function() {
  vm = new Vue({
    el: 'main',
    data: {
      hash: null,
      color: {
        h: +cssvar('--h'),
        s: +cssvar('--s'),
        l: +cssvar('--l'),
      },
      bg: {
        h: +cssvar('--bg-h'),
        s: +cssvar('--bg-s'),
        l: +cssvar('--bg-l'),
      },
    },
    watch: {
      'color.h': function(val) { cssvar('--h', val) },
      'color.s': function(val) { cssvar('--s', val) },
      'color.l': function(val) { cssvar('--l', val) },
      'bg.h': function(val) { cssvar('--bg-h', val) },
      'bg.s': function(val) { cssvar('--bg-s', val) },
      'bg.l': function(val) { cssvar('--bg-l', val) },
    },
    methods: {
      hashchange: function() {
        this.hash = location.hash
      },
    },
  })
  function cssvar(name, value) {
    if (value == null) {
      return getComputedStyle(document.documentElement).getPropertyValue(name)
    }
    document.documentElement.style.setProperty(name, value)
    return document.documentElement.style
  }
  hljs.initHighlighting()
  vm.hashchange()
})

