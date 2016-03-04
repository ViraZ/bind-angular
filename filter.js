/**
 * Created by Vira on 09.12.2015.
 */
var app=angular.module('test', []);
app.filter('makeUppercase',function(){
    return function(item, a,b){
        return item.toUpperCase();
        var st = "*"+item+"**";
        return st;
    }
});

/*in html fail
{{st|makeUppercse: "uan":false}}*/