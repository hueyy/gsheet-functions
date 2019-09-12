function ImportText(url){
  var resp = UrlFetchApp.fetch(url)
  return resp.getContentText()
}

function byString(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

// only 1 level deep at the moment
function GetAttribute(jsonString, attribute){
  var obj = JSON.parse(jsonString)
  return byString(obj, attribute)
}
