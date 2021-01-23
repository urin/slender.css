/* global Vue, hljs */
document.location.hash = document.location.hash || '#overview'

document.addEventListener('DOMContentLoaded', function () {
  const vm = new Vue({
    el: 'main',
    data: {
      hash: null,
      color: {
        h: +cssvar('--h'),
        s: +cssvar('--s'),
        l: +cssvar('--l')
      },
      bg: {
        h: +cssvar('--bg-h'),
        s: +cssvar('--bg-s'),
        l: +cssvar('--bg-l')
      }
    },
    watch: {
      'color.h': val => cssvar('--h', val),
      'color.s': val => cssvar('--s', val),
      'color.l': val => cssvar('--l', val),
      'bg.h': val => cssvar('--bg-h', val),
      'bg.s': val => cssvar('--bg-s', val),
      'bg.l': val => cssvar('--bg-l', val)
    },
    methods: {
      hashchange: function () {
        this.hash = document.location.hash
      }
    }
  })
  window.addEventListener('hashchange', function () { vm.hashchange() })
  hljs.initHighlighting()
  vm.hashchange()

  function cssvar (name, value) {
    if (value == null) {
      return window.getComputedStyle(document.documentElement).getPropertyValue(name)
    }
    document.documentElement.style.setProperty(name, value)
    return document.documentElement.style
  }
})
