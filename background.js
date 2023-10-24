chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && (tab.url.includes("youtube.com") || tab.url.includes("twitter.com") || tab.url.includes("x.com") || tab.url.includes("instagram.com") || tab.url.includes("facebook.com"))) {
        chrome.tabs.remove(tabId);
    }
});