/* Всплывающее окно в заголовке */

import "../lib/jquery.js"

// Подключение Bootstrap
$("head").append(
  `
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
  `
)

function update() {
  const data = chrome.extension.getBackgroundPage().myData // Получение фоновых данных

  $("#content").children().remove()
  $("#content").append(
    `
    <div class="flex">
      <div class="col1">Пример</div>
      <div class="col2">${data}</div>
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 50%"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    `
  )
}

update()

$("#clear").click(function () {
  chrome.runtime.sendMessage(0, update) // Передача сообщения в фон
})
