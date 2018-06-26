/**
 * 特定网站运行js
 * 可以访问页面dom--不可访问extensiondom
 * 可以和extension后台js通信
 */

// console.log(document.getElementsByTagName("body"));

chrome.runtime.sendMessage('指定页面发送消息');
