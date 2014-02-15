var info = {
    poke:3,
    width:1,
    height:1,
    path:"widget.html",
    "v2":{
        "resize":true,
        "min_height":1,
        "max_height":3,
        "min_width":1,
        "max_width":3
    },
    "v3":{
        "multi_placement":false
    }
};

chrome.extension.onMessageExternal.addListener(function (request, sender, sendResponse) {
    if (request === "mgmiemnjjchgkmgbeljfocdjjnpjnmcg-poke") {
        chrome.extension.sendMessage(
            sender.id, {
                head:"mgmiemnjjchgkmgbeljfocdjjnpjnmcg-pokeback",
                body:info,
            });
    }
});


function retrieveItems(query, sendResponse) {
    var amazonSearchUrl = 'http://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q={query}';
    var xhr = new XMLHttpRequest();

    //todo error handling
    xhr.onload = function () {
        var result = JSON.parse(this.responseText);
        var items = result[1];

        sendResponse(items);
    };

    xhr.open("get", amazonSearchUrl.replace('{query}', query), true);
    xhr.send();
}


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.purpose === "get") {
        retrieveItems(request.query, sendResponse);
    }

    return true;
});
