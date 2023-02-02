/* Скрипт, выполняемый на сайте */

$("#nav-main").append(`<p>Мой Тест</p>`)

const re = new RegExp("react", "gi")
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage(matches.length) // Передача сообщения в фон

chrome.storage.local.set({ key: "Значение" }, () => {}) // Запись в хранилище
