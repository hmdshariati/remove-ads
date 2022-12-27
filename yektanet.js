// @todo: copy past bellow in browser debugger to remove yekta net ads

javascript: (function (){
    function l(u, i) {
        var d = document;
        if (!d.getElementById(i)) {
            var s = d.createElement('script');
            s.src = u;
            s.id = i;
            d.body.appendChild(s);
        }
    } l('//code.jquery.com/jquery-3.6.3.js', 'jquery')
})();


jQuery.expr.pseudos.regex = jQuery.expr.createPseudo(function (expression) {
    return function (elem) {
        var matchParams = expression.split(','),
            validLabels = /^(data|css):/,
            attr = {
                method: matchParams[0].match(validLabels) ?
                    matchParams[0].split(':')[0] : 'attr',
                property: matchParams.shift().replace(validLabels, '')
            },
            regexFlags = 'ig',
            regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g, ''), regexFlags);
        return regex.test(jQuery(elem)[attr.method](attr.property));
    }
});

$("a:regex(href, .*yektanet.*)").each(function(){
    $(this).parent().hide()
    })