var calc = {
  $number1: $("#number1"),
  $number2: $("#number2"),
  $result: $("#result"),
  init() {
    this.$number1.focus();
    this.initBtns();
  },
  calculate() {
    this.$result.val((this.$number1.val() / this.$number2.val() * 100).toFixed(2) + '%');
    this.copy();
  },
  copy() {
    this.$result.select();
    document.execCommand("copy");
    this.sendMessage();
  },
  sendMessage() {
    chrome.runtime.sendMessage('已经复制到剪切板啦');
  },
  initBtns() {
    // 点击提交
    $(".wrapper").on("change", "#number1, #number2", () => {
      this.calculate();
    });
  }
};

$(function () {
  calc.init();
})