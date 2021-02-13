/* global Vue, hljs, IntersectionObserver */
const store = {
  hash: null,
  topic: null,
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
}

function cssvar (name, value) {
  if (value == null) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(name)
  }
  document.documentElement.style.setProperty(name, value)
  return document.documentElement.style
}

document.addEventListener('DOMContentLoaded', function () {
  hljs.initHighlighting()
  ;(
    new Vue({
      data: store,
      watch: {
        'color.h': val => cssvar('--h', val),
        'color.s': val => cssvar('--s', val),
        'color.l': val => cssvar('--l', val),
        'bg.h': val => cssvar('--bg-h', val),
        'bg.s': val => cssvar('--bg-s', val),
        'bg.l': val => cssvar('--bg-l', val)
      }
    })
  ).$mount('main')

  const menuObserver = new IntersectionObserver(
    entries => {
      if (!entries.length) { return }
      store.topic = entries.reduce(
        (topic, e) => e.isIntersecting ? e.target.id : topic,
        store.topic
      )
    },
    { rootMargin: '-40% 0px -60%' }
  )
  document.querySelectorAll('section').forEach(target => {
    menuObserver.observe(target)
  })
})
