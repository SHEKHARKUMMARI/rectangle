var fun = function(a, b) {
    var pos = -1;
    var neg = -1;
    var ttop = a.top - b.top;
    if (ttop < 0)
        neg = 1;
    else
        pos = 1;
    var tl = a.left - b.left;
    if (tl >= 0)
        pos = 1;
    else
        neg = 1;
    var th = a.height - b.height;
    if (th < 0)
        neg = 1;
    else
        pos = 1;
    var tw = a.width - b.width;
    if (tw < 0)
        neg = 1;
    else
        pos = 1;
    if (neg == 1 && pos == 1)
        return -1;
    if (pos == 1) {
        var x = {
            top: ttop,
            left: tl,
            height: th,
            width: tw
        }
        a.children = [x];
        return a;
    } else {
        var x = {
            top: -1 * ttop,
            left: -1 * tl,
            height: -1 * th,
            width: -1 * tw
        }
        b.children = [x];
        return b;
    }
}