/* Фоновый скрипт */

window.myData = 0

// Прием сообщения из контента
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.myData = request
})

// Слушатель хранилища https://developer.chrome.com/docs/extensions/reference/storage/
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace == "local") {
    console.log(changes)
  }
})
