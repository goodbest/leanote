ace.define("ace/mode/cirru_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,r){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"comment.line.double-dash",regex:/--/,next:"comment"},{token:"storage.modifier",regex:/\(/},{token:"storage.modifier",regex:/\,/,next:"line"},{token:"support.function",regex:/[^\(\)\"\s]+/,next:"line"},{token:"string.quoted.double",regex:/"/,next:"string"},{token:"storage.modifier",regex:/\)/}],comment:[{token:"comment.line.double-dash",regex:/\ +[^\n]+/,next:"start"}],string:[{token:"string.quoted.double",regex:/"/,next:"line"},{token:"constant.character.escape",regex:/\\/,next:"escape"},{token:"string.quoted.double",regex:/[^\\\"]+/}],escape:[{token:"constant.character.escape",regex:/./,next:"string"}],line:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"markup.raw",regex:/^\s*/,next:"start"},{token:"storage.modifier",regex:/\$/,next:"start"},{token:"variable.parameter",regex:/[^\(\)\"\s]+/},{token:"storage.modifier",regex:/\(/,next:"start"},{token:"storage.modifier",regex:/\)/},{token:"markup.raw",regex:/^\ */,next:"start"},{token:"string.quoted.double",regex:/"/,next:"string"}]}};i.inherits(n,o),t.CirruHighlightRules=n}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,r){"use strict";var i=e("../../lib/oop"),o=e("./fold_mode").FoldMode,n=e("../../range").Range,s=t.FoldMode=function(){};i.inherits(s,o),function(){this.getFoldWidgetRange=function(e,t,r){var i=this.indentationBlock(e,r);if(i)return i;var o=/\S/,s=e.getLine(r),g=s.search(o);if(-1!=g&&"#"==s[g]){for(var a=s.length,d=e.getLength(),l=r,c=r;++r<d;){s=e.getLine(r);var u=s.search(o);if(-1!=u){if("#"!=s[u])break;c=r}}if(c>l){var f=e.getLine(c).length;return new n(l,a,c,f)}}},this.getFoldWidget=function(e,t,r){var i=e.getLine(r),o=i.search(/\S/),n=e.getLine(r+1),s=e.getLine(r-1),g=s.search(/\S/),a=n.search(/\S/);if(-1==o)return e.foldWidgets[r-1]=-1!=g&&a>g?"start":"","";if(-1==g){if(o==a&&"#"==i[o]&&"#"==n[o])return e.foldWidgets[r-1]="",e.foldWidgets[r+1]="","start"}else if(g==o&&"#"==i[o]&&"#"==s[o]&&-1==e.getLine(r-2).search(/\S/))return e.foldWidgets[r-1]="start",e.foldWidgets[r+1]="","";return e.foldWidgets[r-1]=-1!=g&&o>g?"start":"",a>o?"start":""}}.call(s.prototype)}),ace.define("ace/mode/cirru",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cirru_highlight_rules","ace/mode/folding/coffee"],function(e,t,r){"use strict";var i=e("../lib/oop"),o=e("./text").Mode,n=e("./cirru_highlight_rules").CirruHighlightRules,s=e("./folding/coffee").FoldMode,g=function(){this.HighlightRules=n,this.foldingRules=new s};i.inherits(g,o),function(){this.lineCommentStart="--",this.$id="ace/mode/cirru"}.call(g.prototype),t.Mode=g});