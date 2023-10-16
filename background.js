chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // YouTube Blocker
    if (changeInfo.status === "complete" && tab.url.includes("youtube.com")) {
        chrome.tabs.remove(tabId);
    }
});