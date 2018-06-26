/**
 * 插件运行后台js 
 * 该页面输出值可以在插件控制台查看
 * 访问dom是插件的dom
 */
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    color: '#3aa757'
  }, function () {
    console.log("The color is green.");
  });
});

// console.log(document.getElementsByTagName("input"));
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert(message, sender, sendResponse);
});
