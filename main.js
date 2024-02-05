function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
    c = "";
  }
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], "show");
    }
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function openModal() {
  document.getElementById("webModal").classList.add("active");
}

function closeModal() {
  document.getElementById("webModal").classList.remove("active");
}

// スピナーアイコンを表示
function showSpinner() {
  document.getElementById('spinner').style.display = 'block';
}

// スピナーアイコンを非表示
function hideSpinner() {
  document.getElementById('spinner').style.display = 'none';
}

// 画像ポートフォリオのモーダルを開く
function openImgModal() {
  document.getElementById("imgModal").classList.add("active");
}

// 画像ポートフォリオのモーダルを閉じる
function closeImgModal() {
  document.getElementById("imgModal").classList.remove("active");
}
