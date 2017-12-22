// Generated from potigol.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var potigolListener = require('./potigolListener').potigolListener;
var grammarFileName = "potigol.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003H\u0234\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002\u0007\u0002",
    "T\n\u0002\f\u0002\u000e\u0002W\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003]\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0006\u0004p\n\u0004\r\u0004\u000e\u0004",
    "q\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004w\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005}\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0091\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0099\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u00a4\n\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u00a8\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00ac\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u00b8\n\b\f\b\u000e\b\u00bb\u000b\b\u0003\b\u0005",
    "\b\u00be\n\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r\u00d2\n\r\f\r\u000e\r\u00d5",
    "\u000b\r\u0005\r\u00d7\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00e2\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00ef\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00f4\n\u000f\f\u000f\u000e\u000f\u00f7\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u010f\n",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0114\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0135\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u013a\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0142\n\u0010\f\u0010",
    "\u000e\u0010\u0145\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u014d\n\u0011\f\u0011\u000e",
    "\u0011\u0150\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u0158\n\u0011\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u015c\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u0162\n\u0013\f\u0013\u000e\u0013\u0165\u000b",
    "\u0013\u0003\u0013\u0005\u0013\u0168\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0005\u0014\u016d\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0006\u0017\u017b\n\u0017",
    "\r\u0017\u000e\u0017\u017c\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0185\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0006\u0019\u0195\n\u0019\r\u0019\u000e\u0019\u0196\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u019d\n\u0019",
    "\u0003\u0019\u0005\u0019\u01a0\n\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0006\u0019\u01a5\n\u0019\r\u0019\u000e\u0019\u01a6\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0006\u0019\u01ac\n\u0019\r\u0019\u000e\u0019",
    "\u01ad\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u01b3\n\u0019",
    "\r\u0019\u000e\u0019\u01b4\u0007\u0019\u01b7\n\u0019\f\u0019\u000e\u0019",
    "\u01ba\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u01bf",
    "\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u01c5\n\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u01cd\n\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u01e1\n",
    "\u001e\u0005\u001e\u01e3\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u01e8\n\u001f\f\u001f\u000e\u001f\u01eb\u000b\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0007!\u01f4\n!\f!\u000e",
    "!\u01f7\u000b!\u0003\"\u0003\"\u0003\"\u0006\"\u01fc\n\"\r\"\u000e\"",
    "\u01fd\u0003#\u0003#\u0003#\u0007#\u0203\n#\f#\u000e#\u0206\u000b#\u0003",
    "$\u0003$\u0003$\u0006$\u020b\n$\r$\u000e$\u020c\u0003%\u0003%\u0007",
    "%\u0211\n%\f%\u000e%\u0214\u000b%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0007&\u021b\n&\f&\u000e&\u021e\u000b&\u0003\'\u0003\'\u0003\'\u0006",
    "\'\u0223\n\'\r\'\u000e\'\u0224\u0003(\u0003(\u0003(\u0006(\u022a\n(",
    "\r(\u000e(\u022b\u0003)\u0007)\u022f\n)\f)\u000e)\u0232\u000b)\u0003",
    ")\u0002\u0005\u001c\u001e0*\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNP\u0002",
    "\f\u0004\u0002\u0005\u0005\b\b\u0003\u0002\u0016\u0017\u0003\u0002#",
    "$\u0003\u0002\u0018\u001b\u0003\u0002\u001d\"\u0003\u0002*+\u0003\u0002",
    ",-\u0003\u0002./\u0003\u000289\u0003\u0002;<\u026c\u0002U\u0003\u0002",
    "\u0002\u0002\u0004\\\u0003\u0002\u0002\u0002\u0006v\u0003\u0002\u0002",
    "\u0002\b|\u0003\u0002\u0002\u0002\n\u0090\u0003\u0002\u0002\u0002\f",
    "\u00ab\u0003\u0002\u0002\u0002\u000e\u00bd\u0003\u0002\u0002\u0002\u0010",
    "\u00bf\u0003\u0002\u0002\u0002\u0012\u00c2\u0003\u0002\u0002\u0002\u0014",
    "\u00c5\u0003\u0002\u0002\u0002\u0016\u00c9\u0003\u0002\u0002\u0002\u0018",
    "\u00d6\u0003\u0002\u0002\u0002\u001a\u00e1\u0003\u0002\u0002\u0002\u001c",
    "\u00ee\u0003\u0002\u0002\u0002\u001e\u0113\u0003\u0002\u0002\u0002 ",
    "\u0157\u0003\u0002\u0002\u0002\"\u015b\u0003\u0002\u0002\u0002$\u015d",
    "\u0003\u0002\u0002\u0002&\u016c\u0003\u0002\u0002\u0002(\u0170\u0003",
    "\u0002\u0002\u0002*\u0174\u0003\u0002\u0002\u0002,\u0177\u0003\u0002",
    "\u0002\u0002.\u0180\u0003\u0002\u0002\u00020\u019f\u0003\u0002\u0002",
    "\u00022\u01be\u0003\u0002\u0002\u00024\u01c0\u0003\u0002\u0002\u0002",
    "6\u01c8\u0003\u0002\u0002\u00028\u01d2\u0003\u0002\u0002\u0002:\u01e2",
    "\u0003\u0002\u0002\u0002<\u01e4\u0003\u0002\u0002\u0002>\u01ec\u0003",
    "\u0002\u0002\u0002@\u01f0\u0003\u0002\u0002\u0002B\u01f8\u0003\u0002",
    "\u0002\u0002D\u01ff\u0003\u0002\u0002\u0002F\u0207\u0003\u0002\u0002",
    "\u0002H\u0212\u0003\u0002\u0002\u0002J\u0217\u0003\u0002\u0002\u0002",
    "L\u021f\u0003\u0002\u0002\u0002N\u0226\u0003\u0002\u0002\u0002P\u0230",
    "\u0003\u0002\u0002\u0002RT\u0005\u0004\u0003\u0002SR\u0003\u0002\u0002",
    "\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002",
    "\u0002\u0002V\u0003\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "X]\u0005\b\u0005\u0002Y]\u0005\u001e\u0010\u0002Z]\u0005> \u0002[]\u0005",
    "\u0006\u0004\u0002\\X\u0003\u0002\u0002\u0002\\Y\u0003\u0002\u0002\u0002",
    "\\Z\u0003\u0002\u0002\u0002\\[\u0003\u0002\u0002\u0002]\u0005\u0003",
    "\u0002\u0002\u0002^_\u0007\u0003\u0002\u0002_w\u0005\u001e\u0010\u0002",
    "`a\u0007\u0004\u0002\u0002aw\u0005\u001e\u0010\u0002bc\u0005J&\u0002",
    "cd\u0007\u0005\u0002\u0002de\u0005\u001e\u0010\u0002ew\u0003\u0002\u0002",
    "\u0002fg\u0005L\'\u0002gh\u0007\u0005\u0002\u0002hi\u0005B\"\u0002i",
    "w\u0003\u0002\u0002\u0002jo\u0005H%\u0002kl\u0007\u0006\u0002\u0002",
    "lm\u0005\u001e\u0010\u0002mn\u0007\u0007\u0002\u0002np\u0003\u0002\u0002",
    "\u0002ok\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qo\u0003\u0002",
    "\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0007",
    "\u0005\u0002\u0002tu\u0005\u001e\u0010\u0002uw\u0003\u0002\u0002\u0002",
    "v^\u0003\u0002\u0002\u0002v`\u0003\u0002\u0002\u0002vb\u0003\u0002\u0002",
    "\u0002vf\u0003\u0002\u0002\u0002vj\u0003\u0002\u0002\u0002w\u0007\u0003",
    "\u0002\u0002\u0002x}\u0005\n\u0006\u0002y}\u0005\f\u0007\u0002z}\u0005",
    "\u000e\b\u0002{}\u0005\u0010\t\u0002|x\u0003\u0002\u0002\u0002|y\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002",
    "}\t\u0003\u0002\u0002\u0002~\u007f\u0005D#\u0002\u007f\u0080\u0007\b",
    "\u0002\u0002\u0080\u0081\u0005\u001e\u0010\u0002\u0081\u0091\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0005F$\u0002\u0083\u0084\u0007\b\u0002\u0002",
    "\u0084\u0085\u0005B\"\u0002\u0085\u0091\u0003\u0002\u0002\u0002\u0086",
    "\u0087\u0007\t\u0002\u0002\u0087\u0088\u0005D#\u0002\u0088\u0089\t\u0002",
    "\u0002\u0002\u0089\u008a\u0005\u001e\u0010\u0002\u008a\u0091\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0007\t\u0002\u0002\u008c\u008d\u0005F$\u0002",
    "\u008d\u008e\t\u0002\u0002\u0002\u008e\u008f\u0005B\"\u0002\u008f\u0091",
    "\u0003\u0002\u0002\u0002\u0090~\u0003\u0002\u0002\u0002\u0090\u0082",
    "\u0003\u0002\u0002\u0002\u0090\u0086\u0003\u0002\u0002\u0002\u0090\u008b",
    "\u0003\u0002\u0002\u0002\u0091\u000b\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0007=\u0002\u0002\u0093\u0094\u0007\n\u0002\u0002\u0094\u0095\u0005",
    "\u0018\r\u0002\u0095\u0098\u0007\u000b\u0002\u0002\u0096\u0097\u0007",
    "\f\u0002\u0002\u0097\u0099\u0005\u001c\u000f\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0007\b\u0002\u0002\u009b\u009c\u0005",
    "\u001e\u0010\u0002\u009c\u00ac\u0003\u0002\u0002\u0002\u009d\u009e\u0007",
    "=\u0002\u0002\u009e\u009f\u0007\n\u0002\u0002\u009f\u00a0\u0005\u0018",
    "\r\u0002\u00a0\u00a3\u0007\u000b\u0002\u0002\u00a1\u00a2\u0007\f\u0002",
    "\u0002\u00a2\u00a4\u0005\u001c\u000f\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a7\u0005P)\u0002\u00a6\u00a8\u0005\u0012\n\u0002\u00a7",
    "\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007\r\u0002\u0002\u00aa",
    "\u00ac\u0003\u0002\u0002\u0002\u00ab\u0092\u0003\u0002\u0002\u0002\u00ab",
    "\u009d\u0003\u0002\u0002\u0002\u00ac\r\u0003\u0002\u0002\u0002\u00ad",
    "\u00ae\u0007\u000e\u0002\u0002\u00ae\u00af\u0007=\u0002\u0002\u00af",
    "\u00b0\u0007\b\u0002\u0002\u00b0\u00be\u0005\u001c\u000f\u0002\u00b1",
    "\u00b2\u0007\u000e\u0002\u0002\u00b2\u00b9\u0007=\u0002\u0002\u00b3",
    "\u00b8\u0005\u0014\u000b\u0002\u00b4\u00b8\u0005\u0016\f\u0002\u00b5",
    "\u00b8\u0005\f\u0007\u0002\u00b6\u00b8\u0005\n\u0006\u0002\u00b7\u00b3",
    "\u0003\u0002\u0002\u0002\u00b7\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00bb",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b9",
    "\u0003\u0002\u0002\u0002\u00bc\u00be\u0007\r\u0002\u0002\u00bd\u00ad",
    "\u0003\u0002\u0002\u0002\u00bd\u00b1\u0003\u0002\u0002\u0002\u00be\u000f",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u000f\u0002\u0002\u00c0\u00c1",
    "\u0007@\u0002\u0002\u00c1\u0011\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0007\u0010\u0002\u0002\u00c3\u00c4\u0005\u001e\u0010\u0002\u00c4\u0013",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0005D#\u0002\u00c6\u00c7\u0007",
    "\f\u0002\u0002\u00c7\u00c8\u0005\u001c\u000f\u0002\u00c8\u0015\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0007\t\u0002\u0002\u00ca\u00cb\u0005",
    "D#\u0002\u00cb\u00cc\u0007\f\u0002\u0002\u00cc\u00cd\u0005\u001c\u000f",
    "\u0002\u00cd\u0017\u0003\u0002\u0002\u0002\u00ce\u00d3\u0005\u0014\u000b",
    "\u0002\u00cf\u00d0\u0007\u0011\u0002\u0002\u00d0\u00d2\u0005\u0014\u000b",
    "\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002",
    "\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002",
    "\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002",
    "\u0002\u00d6\u00ce\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002",
    "\u0002\u00d7\u0019\u0003\u0002\u0002\u0002\u00d8\u00e2\u0007=\u0002",
    "\u0002\u00d9\u00da\u0007\n\u0002\u0002\u00da\u00db\u0005B\"\u0002\u00db",
    "\u00dc\u0007\u000b\u0002\u0002\u00dc\u00e2\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0007\n\u0002\u0002\u00de\u00df\u0005\u0018\r\u0002\u00df\u00e0",
    "\u0007\u000b\u0002\u0002\u00e0\u00e2\u0003\u0002\u0002\u0002\u00e1\u00d8",
    "\u0003\u0002\u0002\u0002\u00e1\u00d9\u0003\u0002\u0002\u0002\u00e1\u00dd",
    "\u0003\u0002\u0002\u0002\u00e2\u001b\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\b\u000f\u0001\u0002\u00e4\u00ef\u0007=\u0002\u0002\u00e5\u00e6\u0007",
    "\n\u0002\u0002\u00e6\u00e7\u0005N(\u0002\u00e7\u00e8\u0007\u000b\u0002",
    "\u0002\u00e8\u00ef\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007=\u0002",
    "\u0002\u00ea\u00eb\u0007\u0006\u0002\u0002\u00eb\u00ec\u0005\u001c\u000f",
    "\u0002\u00ec\u00ed\u0007\u0007\u0002\u0002\u00ed\u00ef\u0003\u0002\u0002",
    "\u0002\u00ee\u00e3\u0003\u0002\u0002\u0002\u00ee\u00e5\u0003\u0002\u0002",
    "\u0002\u00ee\u00e9\u0003\u0002\u0002\u0002\u00ef\u00f5\u0003\u0002\u0002",
    "\u0002\u00f0\u00f1\f\u0003\u0002\u0002\u00f1\u00f2\u0007\u0012\u0002",
    "\u0002\u00f2\u00f4\u0005\u001c\u000f\u0003\u00f3\u00f0\u0003\u0002\u0002",
    "\u0002\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u001d\u0003\u0002\u0002",
    "\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f9\b\u0010\u0001",
    "\u0002\u00f9\u00fa\t\u0003\u0002\u0002\u00fa\u0114\u0005\u001e\u0010",
    "\u0012\u00fb\u00fc\t\u0004\u0002\u0002\u00fc\u0114\u0005\u001e\u0010",
    "\r\u00fd\u0114\u0005 \u0011\u0002\u00fe\u00ff\u0005\u001a\u000e\u0002",
    "\u00ff\u0100\u0007\u0012\u0002\u0002\u0100\u0101\u0005\u0004\u0003\u0002",
    "\u0101\u0114\u0003\u0002\u0002\u0002\u0102\u0114\u0005\"\u0012\u0002",
    "\u0103\u0114\u00052\u001a\u0002\u0104\u0105\u0007\n\u0002\u0002\u0105",
    "\u0106\u0005B\"\u0002\u0106\u0107\u0007\u000b\u0002\u0002\u0107\u0114",
    "\u0003\u0002\u0002\u0002\u0108\u0109\u0007\n\u0002\u0002\u0109\u010a",
    "\u0005\u001e\u0010\u0002\u010a\u010b\u0007\u000b\u0002\u0002\u010b\u0114",
    "\u0003\u0002\u0002\u0002\u010c\u010e\u0007\u0006\u0002\u0002\u010d\u010f",
    "\u0005@!\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010e\u010f\u0003",
    "\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u0114\u0007",
    "\u0007\u0002\u0002\u0111\u0114\u0007\'\u0002\u0002\u0112\u0114\u0007",
    "(\u0002\u0002\u0113\u00f8\u0003\u0002\u0002\u0002\u0113\u00fb\u0003",
    "\u0002\u0002\u0002\u0113\u00fd\u0003\u0002\u0002\u0002\u0113\u00fe\u0003",
    "\u0002\u0002\u0002\u0113\u0102\u0003\u0002\u0002\u0002\u0113\u0103\u0003",
    "\u0002\u0002\u0002\u0113\u0104\u0003\u0002\u0002\u0002\u0113\u0108\u0003",
    "\u0002\u0002\u0002\u0113\u010c\u0003\u0002\u0002\u0002\u0113\u0111\u0003",
    "\u0002\u0002\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0114\u0143\u0003",
    "\u0002\u0002\u0002\u0115\u0116\f\u0014\u0002\u0002\u0116\u0117\u0007",
    "\u0014\u0002\u0002\u0117\u0142\u0005\u001e\u0010\u0014\u0118\u0119\f",
    "\u0013\u0002\u0002\u0119\u011a\u0007\u0015\u0002\u0002\u011a\u0142\u0005",
    "\u001e\u0010\u0013\u011b\u011c\f\u0011\u0002\u0002\u011c\u011d\t\u0005",
    "\u0002\u0002\u011d\u0142\u0005\u001e\u0010\u0012\u011e\u011f\f\u0010",
    "\u0002\u0002\u011f\u0120\t\u0003\u0002\u0002\u0120\u0142\u0005\u001e",
    "\u0010\u0011\u0121\u0122\f\u000f\u0002\u0002\u0122\u0123\u0007\u001c",
    "\u0002\u0002\u0123\u0142\u0005\u001e\u0010\u0010\u0124\u0125\f\u000e",
    "\u0002\u0002\u0125\u0126\t\u0006\u0002\u0002\u0126\u0142\u0005\u001e",
    "\u0010\u000f\u0127\u0128\f\f\u0002\u0002\u0128\u0129\u0007%\u0002\u0002",
    "\u0129\u0142\u0005\u001e\u0010\r\u012a\u012b\f\u000b\u0002\u0002\u012b",
    "\u012c\u0007&\u0002\u0002\u012c\u0142\u0005\u001e\u0010\f\u012d\u012e",
    "\f\u0017\u0002\u0002\u012e\u012f\u0007\u0013\u0002\u0002\u012f\u0134",
    "\u0007=\u0002\u0002\u0130\u0131\u0007\n\u0002\u0002\u0131\u0132\u0005",
    "@!\u0002\u0132\u0133\u0007\u000b\u0002\u0002\u0133\u0135\u0003\u0002",
    "\u0002\u0002\u0134\u0130\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002",
    "\u0002\u0002\u0135\u0142\u0003\u0002\u0002\u0002\u0136\u0137\f\u0016",
    "\u0002\u0002\u0137\u0139\u0007\n\u0002\u0002\u0138\u013a\u0005@!\u0002",
    "\u0139\u0138\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002",
    "\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u0142\u0007\u000b\u0002\u0002",
    "\u013c\u013d\f\u0015\u0002\u0002\u013d\u013e\u0007\u0006\u0002\u0002",
    "\u013e\u013f\u0005\u001e\u0010\u0002\u013f\u0140\u0007\u0007\u0002\u0002",
    "\u0140\u0142\u0003\u0002\u0002\u0002\u0141\u0115\u0003\u0002\u0002\u0002",
    "\u0141\u0118\u0003\u0002\u0002\u0002\u0141\u011b\u0003\u0002\u0002\u0002",
    "\u0141\u011e\u0003\u0002\u0002\u0002\u0141\u0121\u0003\u0002\u0002\u0002",
    "\u0141\u0124\u0003\u0002\u0002\u0002\u0141\u0127\u0003\u0002\u0002\u0002",
    "\u0141\u012a\u0003\u0002\u0002\u0002\u0141\u012d\u0003\u0002\u0002\u0002",
    "\u0141\u0136\u0003\u0002\u0002\u0002\u0141\u013c\u0003\u0002\u0002\u0002",
    "\u0142\u0145\u0003\u0002\u0002\u0002\u0143\u0141\u0003\u0002\u0002\u0002",
    "\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u001f\u0003\u0002\u0002\u0002",
    "\u0145\u0143\u0003\u0002\u0002\u0002\u0146\u0158\u0007E\u0002\u0002",
    "\u0147\u0158\u0007=\u0002\u0002\u0148\u0149\u0007A\u0002\u0002\u0149",
    "\u014e\u0005\u001e\u0010\u0002\u014a\u014b\u0007B\u0002\u0002\u014b",
    "\u014d\u0005\u001e\u0010\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014d",
    "\u0150\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014e",
    "\u014f\u0003\u0002\u0002\u0002\u014f\u0151\u0003\u0002\u0002\u0002\u0150",
    "\u014e\u0003\u0002\u0002\u0002\u0151\u0152\u0007C\u0002\u0002\u0152",
    "\u0158\u0003\u0002\u0002\u0002\u0153\u0158\u0007@\u0002\u0002\u0154",
    "\u0158\u0007>\u0002\u0002\u0155\u0158\u0007?\u0002\u0002\u0156\u0158",
    "\u0007D\u0002\u0002\u0157\u0146\u0003\u0002\u0002\u0002\u0157\u0147",
    "\u0003\u0002\u0002\u0002\u0157\u0148\u0003\u0002\u0002\u0002\u0157\u0153",
    "\u0003\u0002\u0002\u0002\u0157\u0154\u0003\u0002\u0002\u0002\u0157\u0155",
    "\u0003\u0002\u0002\u0002\u0157\u0156\u0003\u0002\u0002\u0002\u0158!",
    "\u0003\u0002\u0002\u0002\u0159\u015c\u0005$\u0013\u0002\u015a\u015c",
    "\u0005,\u0017\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015a",
    "\u0003\u0002\u0002\u0002\u015c#\u0003\u0002\u0002\u0002\u015d\u015e",
    "\u0007)\u0002\u0002\u015e\u015f\u0005\u001e\u0010\u0002\u015f\u0163",
    "\u0005&\u0014\u0002\u0160\u0162\u0005(\u0015\u0002\u0161\u0160\u0003",
    "\u0002\u0002\u0002\u0162\u0165\u0003\u0002\u0002\u0002\u0163\u0161\u0003",
    "\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0167\u0003",
    "\u0002\u0002\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0166\u0168\u0005",
    "*\u0016\u0002\u0167\u0166\u0003\u0002\u0002\u0002\u0167\u0168\u0003",
    "\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016a\u0007",
    "\r\u0002\u0002\u016a%\u0003\u0002\u0002\u0002\u016b\u016d\t\u0007\u0002",
    "\u0002\u016c\u016b\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002\u0002",
    "\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u016f\u0005P)\u0002",
    "\u016f\'\u0003\u0002\u0002\u0002\u0170\u0171\t\b\u0002\u0002\u0171\u0172",
    "\u0005\u001e\u0010\u0002\u0172\u0173\u0005&\u0014\u0002\u0173)\u0003",
    "\u0002\u0002\u0002\u0174\u0175\t\t\u0002\u0002\u0175\u0176\u0005P)\u0002",
    "\u0176+\u0003\u0002\u0002\u0002\u0177\u0178\u00070\u0002\u0002\u0178",
    "\u017a\u0005\u001e\u0010\u0002\u0179\u017b\u0005.\u0018\u0002\u017a",
    "\u0179\u0003\u0002\u0002\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c",
    "\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d",
    "\u017e\u0003\u0002\u0002\u0002\u017e\u017f\u0007\r\u0002\u0002\u017f",
    "-\u0003\u0002\u0002\u0002\u0180\u0181\u00071\u0002\u0002\u0181\u0184",
    "\u0005\u001e\u0010\u0002\u0182\u0183\u0007)\u0002\u0002\u0183\u0185",
    "\u0005\u001e\u0010\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0003\u0002\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187",
    "\u0007\u0012\u0002\u0002\u0187\u0188\u0005P)\u0002\u0188/\u0003\u0002",
    "\u0002\u0002\u0189\u018a\b\u0019\u0001\u0002\u018a\u01a0\u0007(\u0002",
    "\u0002\u018b\u01a0\u0007=\u0002\u0002\u018c\u01a0\u0005 \u0011\u0002",
    "\u018d\u018e\u0007=\u0002\u0002\u018e\u018f\u0007\n\u0002\u0002\u018f",
    "\u0190\u00050\u0019\u0002\u0190\u0191\u0007\u000b\u0002\u0002\u0191",
    "\u01a0\u0003\u0002\u0002\u0002\u0192\u0194\u0007\n\u0002\u0002\u0193",
    "\u0195\u00050\u0019\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195",
    "\u0196\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0007\u000b\u0002\u0002\u0199\u01a0\u0003\u0002\u0002\u0002\u019a",
    "\u019c\u0007\u0006\u0002\u0002\u019b\u019d\u00050\u0019\u0002\u019c",
    "\u019b\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d",
    "\u019e\u0003\u0002\u0002\u0002\u019e\u01a0\u0007\u0007\u0002\u0002\u019f",
    "\u0189\u0003\u0002\u0002\u0002\u019f\u018b\u0003\u0002\u0002\u0002\u019f",
    "\u018c\u0003\u0002\u0002\u0002\u019f\u018d\u0003\u0002\u0002\u0002\u019f",
    "\u0192\u0003\u0002\u0002\u0002\u019f\u019a\u0003\u0002\u0002\u0002\u01a0",
    "\u01b8\u0003\u0002\u0002\u0002\u01a1\u01a4\f\u0007\u0002\u0002\u01a2",
    "\u01a3\u0007\u0015\u0002\u0002\u01a3\u01a5\u00050\u0019\u0002\u01a4",
    "\u01a2\u0003\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6",
    "\u01a4\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7",
    "\u01b7\u0003\u0002\u0002\u0002\u01a8\u01ab\f\u0004\u0002\u0002\u01a9",
    "\u01aa\u00072\u0002\u0002\u01aa\u01ac\u00050\u0019\u0002\u01ab\u01a9",
    "\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01b7",
    "\u0003\u0002\u0002\u0002\u01af\u01b2\f\u0003\u0002\u0002\u01b0\u01b1",
    "\u0007\u0011\u0002\u0002\u01b1\u01b3\u00050\u0019\u0002\u01b2\u01b0",
    "\u0003\u0002\u0002\u0002\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4\u01b2",
    "\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b7",
    "\u0003\u0002\u0002\u0002\u01b6\u01a1\u0003\u0002\u0002\u0002\u01b6\u01a8",
    "\u0003\u0002\u0002\u0002\u01b6\u01af\u0003\u0002\u0002\u0002\u01b7\u01ba",
    "\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002\u0002\u0002\u01b8\u01b9",
    "\u0003\u0002\u0002\u0002\u01b91\u0003\u0002\u0002\u0002\u01ba\u01b8",
    "\u0003\u0002\u0002\u0002\u01bb\u01bf\u00054\u001b\u0002\u01bc\u01bf",
    "\u00056\u001c\u0002\u01bd\u01bf\u00058\u001d\u0002\u01be\u01bb\u0003",
    "\u0002\u0002\u0002\u01be\u01bc\u0003\u0002\u0002\u0002\u01be\u01bd\u0003",
    "\u0002\u0002\u0002\u01bf3\u0003\u0002\u0002\u0002\u01c0\u01c1\u0007",
    "3\u0002\u0002\u01c1\u01c4\u0005<\u001f\u0002\u01c2\u01c3\u0007)\u0002",
    "\u0002\u01c3\u01c5\u0005\u001e\u0010\u0002\u01c4\u01c2\u0003\u0002\u0002",
    "\u0002\u01c4\u01c5\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002",
    "\u0002\u01c6\u01c7\u0005> \u0002\u01c75\u0003\u0002\u0002\u0002\u01c8",
    "\u01c9\u00073\u0002\u0002\u01c9\u01cc\u0005<\u001f\u0002\u01ca\u01cb",
    "\u0007)\u0002\u0002\u01cb\u01cd\u0005\u001e\u0010\u0002\u01cc\u01ca",
    "\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cd\u01ce",
    "\u0003\u0002\u0002\u0002\u01ce\u01cf\u00074\u0002\u0002\u01cf\u01d0",
    "\u0005P)\u0002\u01d0\u01d1\u0007\r\u0002\u0002\u01d17\u0003\u0002\u0002",
    "\u0002\u01d2\u01d3\u00075\u0002\u0002\u01d3\u01d4\u0005\u001e\u0010",
    "\u0002\u01d4\u01d5\u0005> \u0002\u01d59\u0003\u0002\u0002\u0002\u01d6",
    "\u01d7\u0007=\u0002\u0002\u01d7\u01d8\u00076\u0002\u0002\u01d8\u01e3",
    "\u0005\u001e\u0010\u0002\u01d9\u01da\u0007=\u0002\u0002\u01da\u01db",
    "\u00077\u0002\u0002\u01db\u01dc\u0005\u001e\u0010\u0002\u01dc\u01dd",
    "\t\n\u0002\u0002\u01dd\u01e0\u0005\u001e\u0010\u0002\u01de\u01df\u0007",
    ":\u0002\u0002\u01df\u01e1\u0005\u001e\u0010\u0002\u01e0\u01de\u0003",
    "\u0002\u0002\u0002\u01e0\u01e1\u0003\u0002\u0002\u0002\u01e1\u01e3\u0003",
    "\u0002\u0002\u0002\u01e2\u01d6\u0003\u0002\u0002\u0002\u01e2\u01d9\u0003",
    "\u0002\u0002\u0002\u01e3;\u0003\u0002\u0002\u0002\u01e4\u01e9\u0005",
    ":\u001e\u0002\u01e5\u01e6\u0007\u0011\u0002\u0002\u01e6\u01e8\u0005",
    ":\u001e\u0002\u01e7\u01e5\u0003\u0002\u0002\u0002\u01e8\u01eb\u0003",
    "\u0002\u0002\u0002\u01e9\u01e7\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003",
    "\u0002\u0002\u0002\u01ea=\u0003\u0002\u0002\u0002\u01eb\u01e9\u0003",
    "\u0002\u0002\u0002\u01ec\u01ed\t\u000b\u0002\u0002\u01ed\u01ee\u0005",
    "P)\u0002\u01ee\u01ef\u0007\r\u0002\u0002\u01ef?\u0003\u0002\u0002\u0002",
    "\u01f0\u01f5\u0005\u001e\u0010\u0002\u01f1\u01f2\u0007\u0011\u0002\u0002",
    "\u01f2\u01f4\u0005\u001e\u0010\u0002\u01f3\u01f1\u0003\u0002\u0002\u0002",
    "\u01f4\u01f7\u0003\u0002\u0002\u0002\u01f5\u01f3\u0003\u0002\u0002\u0002",
    "\u01f5\u01f6\u0003\u0002\u0002\u0002\u01f6A\u0003\u0002\u0002\u0002",
    "\u01f7\u01f5\u0003\u0002\u0002\u0002\u01f8\u01fb\u0005\u001e\u0010\u0002",
    "\u01f9\u01fa\u0007\u0011\u0002\u0002\u01fa\u01fc\u0005\u001e\u0010\u0002",
    "\u01fb\u01f9\u0003\u0002\u0002\u0002\u01fc\u01fd\u0003\u0002\u0002\u0002",
    "\u01fd\u01fb\u0003\u0002\u0002\u0002\u01fd\u01fe\u0003\u0002\u0002\u0002",
    "\u01feC\u0003\u0002\u0002\u0002\u01ff\u0204\u0007=\u0002\u0002\u0200",
    "\u0201\u0007\u0011\u0002\u0002\u0201\u0203\u0007=\u0002\u0002\u0202",
    "\u0200\u0003\u0002\u0002\u0002\u0203\u0206\u0003\u0002\u0002\u0002\u0204",
    "\u0202\u0003\u0002\u0002\u0002\u0204\u0205\u0003\u0002\u0002\u0002\u0205",
    "E\u0003\u0002\u0002\u0002\u0206\u0204\u0003\u0002\u0002\u0002\u0207",
    "\u020a\u0007=\u0002\u0002\u0208\u0209\u0007\u0011\u0002\u0002\u0209",
    "\u020b\u0007=\u0002\u0002\u020a\u0208\u0003\u0002\u0002\u0002\u020b",
    "\u020c\u0003\u0002\u0002\u0002\u020c\u020a\u0003\u0002\u0002\u0002\u020c",
    "\u020d\u0003\u0002\u0002\u0002\u020dG\u0003\u0002\u0002\u0002\u020e",
    "\u020f\u0007=\u0002\u0002\u020f\u0211\u0007\u0013\u0002\u0002\u0210",
    "\u020e\u0003\u0002\u0002\u0002\u0211\u0214\u0003\u0002\u0002\u0002\u0212",
    "\u0210\u0003\u0002\u0002\u0002\u0212\u0213\u0003\u0002\u0002\u0002\u0213",
    "\u0215\u0003\u0002\u0002\u0002\u0214\u0212\u0003\u0002\u0002\u0002\u0215",
    "\u0216\u0007=\u0002\u0002\u0216I\u0003\u0002\u0002\u0002\u0217\u021c",
    "\u0005H%\u0002\u0218\u0219\u0007\u0011\u0002\u0002\u0219\u021b\u0005",
    "H%\u0002\u021a\u0218\u0003\u0002\u0002\u0002\u021b\u021e\u0003\u0002",
    "\u0002\u0002\u021c\u021a\u0003\u0002\u0002\u0002\u021c\u021d\u0003\u0002",
    "\u0002\u0002\u021dK\u0003\u0002\u0002\u0002\u021e\u021c\u0003\u0002",
    "\u0002\u0002\u021f\u0222\u0005H%\u0002\u0220\u0221\u0007\u0011\u0002",
    "\u0002\u0221\u0223\u0005H%\u0002\u0222\u0220\u0003\u0002\u0002\u0002",
    "\u0223\u0224\u0003\u0002\u0002\u0002\u0224\u0222\u0003\u0002\u0002\u0002",
    "\u0224\u0225\u0003\u0002\u0002\u0002\u0225M\u0003\u0002\u0002\u0002",
    "\u0226\u0229\u0005\u001c\u000f\u0002\u0227\u0228\u0007\u0011\u0002\u0002",
    "\u0228\u022a\u0005\u001c\u000f\u0002\u0229\u0227\u0003\u0002\u0002\u0002",
    "\u022a\u022b\u0003\u0002\u0002\u0002\u022b\u0229\u0003\u0002\u0002\u0002",
    "\u022b\u022c\u0003\u0002\u0002\u0002\u022cO\u0003\u0002\u0002\u0002",
    "\u022d\u022f\u0005\u0004\u0003\u0002\u022e\u022d\u0003\u0002\u0002\u0002",
    "\u022f\u0232\u0003\u0002\u0002\u0002\u0230\u022e\u0003\u0002\u0002\u0002",
    "\u0230\u0231\u0003\u0002\u0002\u0002\u0231Q\u0003\u0002\u0002\u0002",
    "\u0232\u0230\u0003\u0002\u0002\u00029U\\qv|\u0090\u0098\u00a3\u00a7",
    "\u00ab\u00b7\u00b9\u00bd\u00d3\u00d6\u00e1\u00ee\u00f5\u010e\u0113\u0134",
    "\u0139\u0141\u0143\u014e\u0157\u015b\u0163\u0167\u016c\u017c\u0184\u0196",
    "\u019c\u019f\u01a6\u01ad\u01b4\u01b6\u01b8\u01be\u01c4\u01cc\u01e0\u01e2",
    "\u01e9\u01f5\u01fd\u0204\u020c\u0212\u021c\u0224\u022b\u0230"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'escreva'", "'imprima'", "':='", "'['", "']'", 
                     "'='", "'var'", "'('", "')'", "':'", "'fim'", "'tipo'", 
                     "'use'", "'retorne'", "','", "'=>'", "'.'", "'^'", 
                     "'::'", "'+'", "'-'", "'*'", "'/'", "'div'", "'mod'", 
                     "'formato'", "'>'", "'>='", "'<'", "'<='", "'=='", 
                     "'<>'", "'nao'", "'n\\u00e3o'", "'e'", "'ou'", "'isto'", 
                     "'_'", "'se'", "'entao'", "'ent\\u00e3o'", "'senaose'", 
                     "'sen\\u00e3ose'", "'senao'", "'sen\\u00e3o'", "'escolha'", 
                     "'caso'", "'|'", "'para'", "'gere'", "'enquanto'", 
                     "'em'", "'de'", "'ate'", "'at\\u00e9'", "'passo'", 
                     "'faca'", "'fa\\u00e7a'", null, null, null, null, null, 
                     null, null, null, null, null, null, "'\n'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "ID", "INT", "FLOAT", 
                      "STRING", "BS", "MS", "ES", "CHAR", "BOOLEANO", "WS", 
                      "COMMENT", "NL" ];

var ruleNames =  [ "prog", "inst", "cmd", "decl", "decl_valor", "decl_funcao", 
                   "decl_tipo", "decl_uso", "retorne", "dcl", "dcl_var", 
                   "dcls", "dcl1", "tipo", "expr", "literal", "decisao", 
                   "se", "entao", "senaose", "senao", "escolha", "caso", 
                   "padrao", "repeticao", "para_faca", "para_gere", "enquanto", 
                   "faixa", "faixas", "bloco", "expr1", "expr2", "id1", 
                   "id2", "qualid", "qualid1", "qualid2", "tipo2", "exprlist" ];

function potigolParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

potigolParser.prototype = Object.create(antlr4.Parser.prototype);
potigolParser.prototype.constructor = potigolParser;

Object.defineProperty(potigolParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

potigolParser.EOF = antlr4.Token.EOF;
potigolParser.T__0 = 1;
potigolParser.T__1 = 2;
potigolParser.T__2 = 3;
potigolParser.T__3 = 4;
potigolParser.T__4 = 5;
potigolParser.T__5 = 6;
potigolParser.T__6 = 7;
potigolParser.T__7 = 8;
potigolParser.T__8 = 9;
potigolParser.T__9 = 10;
potigolParser.T__10 = 11;
potigolParser.T__11 = 12;
potigolParser.T__12 = 13;
potigolParser.T__13 = 14;
potigolParser.T__14 = 15;
potigolParser.T__15 = 16;
potigolParser.T__16 = 17;
potigolParser.T__17 = 18;
potigolParser.T__18 = 19;
potigolParser.T__19 = 20;
potigolParser.T__20 = 21;
potigolParser.T__21 = 22;
potigolParser.T__22 = 23;
potigolParser.T__23 = 24;
potigolParser.T__24 = 25;
potigolParser.T__25 = 26;
potigolParser.T__26 = 27;
potigolParser.T__27 = 28;
potigolParser.T__28 = 29;
potigolParser.T__29 = 30;
potigolParser.T__30 = 31;
potigolParser.T__31 = 32;
potigolParser.T__32 = 33;
potigolParser.T__33 = 34;
potigolParser.T__34 = 35;
potigolParser.T__35 = 36;
potigolParser.T__36 = 37;
potigolParser.T__37 = 38;
potigolParser.T__38 = 39;
potigolParser.T__39 = 40;
potigolParser.T__40 = 41;
potigolParser.T__41 = 42;
potigolParser.T__42 = 43;
potigolParser.T__43 = 44;
potigolParser.T__44 = 45;
potigolParser.T__45 = 46;
potigolParser.T__46 = 47;
potigolParser.T__47 = 48;
potigolParser.T__48 = 49;
potigolParser.T__49 = 50;
potigolParser.T__50 = 51;
potigolParser.T__51 = 52;
potigolParser.T__52 = 53;
potigolParser.T__53 = 54;
potigolParser.T__54 = 55;
potigolParser.T__55 = 56;
potigolParser.T__56 = 57;
potigolParser.T__57 = 58;
potigolParser.ID = 59;
potigolParser.INT = 60;
potigolParser.FLOAT = 61;
potigolParser.STRING = 62;
potigolParser.BS = 63;
potigolParser.MS = 64;
potigolParser.ES = 65;
potigolParser.CHAR = 66;
potigolParser.BOOLEANO = 67;
potigolParser.WS = 68;
potigolParser.COMMENT = 69;
potigolParser.NL = 70;

potigolParser.RULE_prog = 0;
potigolParser.RULE_inst = 1;
potigolParser.RULE_cmd = 2;
potigolParser.RULE_decl = 3;
potigolParser.RULE_decl_valor = 4;
potigolParser.RULE_decl_funcao = 5;
potigolParser.RULE_decl_tipo = 6;
potigolParser.RULE_decl_uso = 7;
potigolParser.RULE_retorne = 8;
potigolParser.RULE_dcl = 9;
potigolParser.RULE_dcl_var = 10;
potigolParser.RULE_dcls = 11;
potigolParser.RULE_dcl1 = 12;
potigolParser.RULE_tipo = 13;
potigolParser.RULE_expr = 14;
potigolParser.RULE_literal = 15;
potigolParser.RULE_decisao = 16;
potigolParser.RULE_se = 17;
potigolParser.RULE_entao = 18;
potigolParser.RULE_senaose = 19;
potigolParser.RULE_senao = 20;
potigolParser.RULE_escolha = 21;
potigolParser.RULE_caso = 22;
potigolParser.RULE_padrao = 23;
potigolParser.RULE_repeticao = 24;
potigolParser.RULE_para_faca = 25;
potigolParser.RULE_para_gere = 26;
potigolParser.RULE_enquanto = 27;
potigolParser.RULE_faixa = 28;
potigolParser.RULE_faixas = 29;
potigolParser.RULE_bloco = 30;
potigolParser.RULE_expr1 = 31;
potigolParser.RULE_expr2 = 32;
potigolParser.RULE_id1 = 33;
potigolParser.RULE_id2 = 34;
potigolParser.RULE_qualid = 35;
potigolParser.RULE_qualid1 = 36;
potigolParser.RULE_qualid2 = 37;
potigolParser.RULE_tipo2 = 38;
potigolParser.RULE_exprlist = 39;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.inst = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstContext);
    } else {
        return this.getTypedRuleContext(InstContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitProg(this);
	}
};




potigolParser.ProgContext = ProgContext;

potigolParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, potigolParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << potigolParser.T__0) | (1 << potigolParser.T__1) | (1 << potigolParser.T__3) | (1 << potigolParser.T__6) | (1 << potigolParser.T__7) | (1 << potigolParser.T__11) | (1 << potigolParser.T__12) | (1 << potigolParser.T__19) | (1 << potigolParser.T__20))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (potigolParser.T__32 - 33)) | (1 << (potigolParser.T__33 - 33)) | (1 << (potigolParser.T__36 - 33)) | (1 << (potigolParser.T__37 - 33)) | (1 << (potigolParser.T__38 - 33)) | (1 << (potigolParser.T__45 - 33)) | (1 << (potigolParser.T__48 - 33)) | (1 << (potigolParser.T__50 - 33)) | (1 << (potigolParser.T__56 - 33)) | (1 << (potigolParser.T__57 - 33)) | (1 << (potigolParser.ID - 33)) | (1 << (potigolParser.INT - 33)) | (1 << (potigolParser.FLOAT - 33)) | (1 << (potigolParser.STRING - 33)) | (1 << (potigolParser.BS - 33)))) !== 0) || _la===potigolParser.CHAR || _la===potigolParser.BOOLEANO) {
            this.state = 80;
            this.inst();
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_inst;
    return this;
}

InstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstContext.prototype.constructor = InstContext;

InstContext.prototype.decl = function() {
    return this.getTypedRuleContext(DeclContext,0);
};

InstContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InstContext.prototype.bloco = function() {
    return this.getTypedRuleContext(BlocoContext,0);
};

InstContext.prototype.cmd = function() {
    return this.getTypedRuleContext(CmdContext,0);
};

InstContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterInst(this);
	}
};

InstContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitInst(this);
	}
};




potigolParser.InstContext = InstContext;

potigolParser.prototype.inst = function() {

    var localctx = new InstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, potigolParser.RULE_inst);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.decl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.expr(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
            this.bloco();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 89;
            this.cmd();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CmdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_cmd;
    return this;
}

CmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CmdContext.prototype.constructor = CmdContext;


 
CmdContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Atrib_simplesContext(parser, ctx) {
	CmdContext.call(this, parser);
    CmdContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Atrib_simplesContext.prototype = Object.create(CmdContext.prototype);
Atrib_simplesContext.prototype.constructor = Atrib_simplesContext;

potigolParser.Atrib_simplesContext = Atrib_simplesContext;

Atrib_simplesContext.prototype.qualid1 = function() {
    return this.getTypedRuleContext(Qualid1Context,0);
};

Atrib_simplesContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
Atrib_simplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterAtrib_simples(this);
	}
};

Atrib_simplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitAtrib_simples(this);
	}
};


function EscrevaContext(parser, ctx) {
	CmdContext.call(this, parser);
    CmdContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EscrevaContext.prototype = Object.create(CmdContext.prototype);
EscrevaContext.prototype.constructor = EscrevaContext;

potigolParser.EscrevaContext = EscrevaContext;

EscrevaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
EscrevaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterEscreva(this);
	}
};

EscrevaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitEscreva(this);
	}
};


function ImprimaContext(parser, ctx) {
	CmdContext.call(this, parser);
    CmdContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImprimaContext.prototype = Object.create(CmdContext.prototype);
ImprimaContext.prototype.constructor = ImprimaContext;

potigolParser.ImprimaContext = ImprimaContext;

ImprimaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ImprimaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterImprima(this);
	}
};

ImprimaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitImprima(this);
	}
};


function Set_vetorContext(parser, ctx) {
	CmdContext.call(this, parser);
    CmdContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Set_vetorContext.prototype = Object.create(CmdContext.prototype);
Set_vetorContext.prototype.constructor = Set_vetorContext;

potigolParser.Set_vetorContext = Set_vetorContext;

Set_vetorContext.prototype.qualid = function() {
    return this.getTypedRuleContext(QualidContext,0);
};

Set_vetorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
Set_vetorContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterSet_vetor(this);
	}
};

Set_vetorContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitSet_vetor(this);
	}
};


function Atrib_multiplaContext(parser, ctx) {
	CmdContext.call(this, parser);
    CmdContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Atrib_multiplaContext.prototype = Object.create(CmdContext.prototype);
Atrib_multiplaContext.prototype.constructor = Atrib_multiplaContext;

potigolParser.Atrib_multiplaContext = Atrib_multiplaContext;

Atrib_multiplaContext.prototype.qualid2 = function() {
    return this.getTypedRuleContext(Qualid2Context,0);
};

Atrib_multiplaContext.prototype.expr2 = function() {
    return this.getTypedRuleContext(Expr2Context,0);
};
Atrib_multiplaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterAtrib_multipla(this);
	}
};

Atrib_multiplaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitAtrib_multipla(this);
	}
};



potigolParser.CmdContext = CmdContext;

potigolParser.prototype.cmd = function() {

    var localctx = new CmdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, potigolParser.RULE_cmd);
    var _la = 0; // Token type
    try {
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new EscrevaContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.match(potigolParser.T__0);
            this.state = 93;
            this.expr(0);
            break;

        case 2:
            localctx = new ImprimaContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
            this.match(potigolParser.T__1);
            this.state = 95;
            this.expr(0);
            break;

        case 3:
            localctx = new Atrib_simplesContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 96;
            this.qualid1();
            this.state = 97;
            this.match(potigolParser.T__2);
            this.state = 98;
            this.expr(0);
            break;

        case 4:
            localctx = new Atrib_multiplaContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 100;
            this.qualid2();
            this.state = 101;
            this.match(potigolParser.T__2);
            this.state = 102;
            this.expr2();
            break;

        case 5:
            localctx = new Set_vetorContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 104;
            this.qualid();
            this.state = 109; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 105;
                this.match(potigolParser.T__3);
                this.state = 106;
                this.expr(0);
                this.state = 107;
                this.match(potigolParser.T__4);
                this.state = 111; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===potigolParser.T__3);
            this.state = 113;
            this.match(potigolParser.T__2);
            this.state = 114;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decl;
    return this;
}

DeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclContext.prototype.constructor = DeclContext;

DeclContext.prototype.decl_valor = function() {
    return this.getTypedRuleContext(Decl_valorContext,0);
};

DeclContext.prototype.decl_funcao = function() {
    return this.getTypedRuleContext(Decl_funcaoContext,0);
};

DeclContext.prototype.decl_tipo = function() {
    return this.getTypedRuleContext(Decl_tipoContext,0);
};

DeclContext.prototype.decl_uso = function() {
    return this.getTypedRuleContext(Decl_usoContext,0);
};

DeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecl(this);
	}
};

DeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecl(this);
	}
};




potigolParser.DeclContext = DeclContext;

potigolParser.prototype.decl = function() {

    var localctx = new DeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, potigolParser.RULE_decl);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.decl_valor();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.decl_funcao();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 120;
            this.decl_tipo();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 121;
            this.decl_uso();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_valorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decl_valor;
    return this;
}

Decl_valorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_valorContext.prototype.constructor = Decl_valorContext;


 
Decl_valorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Decl_var_multiplaContext(parser, ctx) {
	Decl_valorContext.call(this, parser);
    Decl_valorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Decl_var_multiplaContext.prototype = Object.create(Decl_valorContext.prototype);
Decl_var_multiplaContext.prototype.constructor = Decl_var_multiplaContext;

potigolParser.Decl_var_multiplaContext = Decl_var_multiplaContext;

Decl_var_multiplaContext.prototype.id2 = function() {
    return this.getTypedRuleContext(Id2Context,0);
};

Decl_var_multiplaContext.prototype.expr2 = function() {
    return this.getTypedRuleContext(Expr2Context,0);
};
Decl_var_multiplaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecl_var_multipla(this);
	}
};

Decl_var_multiplaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecl_var_multipla(this);
	}
};


function Valor_multiploContext(parser, ctx) {
	Decl_valorContext.call(this, parser);
    Decl_valorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Valor_multiploContext.prototype = Object.create(Decl_valorContext.prototype);
Valor_multiploContext.prototype.constructor = Valor_multiploContext;

potigolParser.Valor_multiploContext = Valor_multiploContext;

Valor_multiploContext.prototype.id2 = function() {
    return this.getTypedRuleContext(Id2Context,0);
};

Valor_multiploContext.prototype.expr2 = function() {
    return this.getTypedRuleContext(Expr2Context,0);
};
Valor_multiploContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterValor_multiplo(this);
	}
};

Valor_multiploContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitValor_multiplo(this);
	}
};


function Valor_simplesContext(parser, ctx) {
	Decl_valorContext.call(this, parser);
    Decl_valorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Valor_simplesContext.prototype = Object.create(Decl_valorContext.prototype);
Valor_simplesContext.prototype.constructor = Valor_simplesContext;

potigolParser.Valor_simplesContext = Valor_simplesContext;

Valor_simplesContext.prototype.id1 = function() {
    return this.getTypedRuleContext(Id1Context,0);
};

Valor_simplesContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
Valor_simplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterValor_simples(this);
	}
};

Valor_simplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitValor_simples(this);
	}
};


function Decl_var_simplesContext(parser, ctx) {
	Decl_valorContext.call(this, parser);
    Decl_valorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Decl_var_simplesContext.prototype = Object.create(Decl_valorContext.prototype);
Decl_var_simplesContext.prototype.constructor = Decl_var_simplesContext;

potigolParser.Decl_var_simplesContext = Decl_var_simplesContext;

Decl_var_simplesContext.prototype.id1 = function() {
    return this.getTypedRuleContext(Id1Context,0);
};

Decl_var_simplesContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
Decl_var_simplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecl_var_simples(this);
	}
};

Decl_var_simplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecl_var_simples(this);
	}
};



potigolParser.Decl_valorContext = Decl_valorContext;

potigolParser.prototype.decl_valor = function() {

    var localctx = new Decl_valorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, potigolParser.RULE_decl_valor);
    var _la = 0; // Token type
    try {
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Valor_simplesContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.id1();
            this.state = 125;
            this.match(potigolParser.T__5);
            this.state = 126;
            this.expr(0);
            break;

        case 2:
            localctx = new Valor_multiploContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.id2();
            this.state = 129;
            this.match(potigolParser.T__5);
            this.state = 130;
            this.expr2();
            break;

        case 3:
            localctx = new Decl_var_simplesContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 132;
            this.match(potigolParser.T__6);
            this.state = 133;
            this.id1();
            this.state = 134;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__2 || _la===potigolParser.T__5)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 135;
            this.expr(0);
            break;

        case 4:
            localctx = new Decl_var_multiplaContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.match(potigolParser.T__6);
            this.state = 138;
            this.id2();
            this.state = 139;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__2 || _la===potigolParser.T__5)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 140;
            this.expr2();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_funcaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decl_funcao;
    return this;
}

Decl_funcaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_funcaoContext.prototype.constructor = Decl_funcaoContext;


 
Decl_funcaoContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Def_funcaoContext(parser, ctx) {
	Decl_funcaoContext.call(this, parser);
    Decl_funcaoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Def_funcaoContext.prototype = Object.create(Decl_funcaoContext.prototype);
Def_funcaoContext.prototype.constructor = Def_funcaoContext;

potigolParser.Def_funcaoContext = Def_funcaoContext;

Def_funcaoContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Def_funcaoContext.prototype.dcls = function() {
    return this.getTypedRuleContext(DclsContext,0);
};

Def_funcaoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Def_funcaoContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};
Def_funcaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDef_funcao(this);
	}
};

Def_funcaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDef_funcao(this);
	}
};


function Def_funcao_corpoContext(parser, ctx) {
	Decl_funcaoContext.call(this, parser);
    Decl_funcaoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Def_funcao_corpoContext.prototype = Object.create(Decl_funcaoContext.prototype);
Def_funcao_corpoContext.prototype.constructor = Def_funcao_corpoContext;

potigolParser.Def_funcao_corpoContext = Def_funcao_corpoContext;

Def_funcao_corpoContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Def_funcao_corpoContext.prototype.dcls = function() {
    return this.getTypedRuleContext(DclsContext,0);
};

Def_funcao_corpoContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

Def_funcao_corpoContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};

Def_funcao_corpoContext.prototype.retorne = function() {
    return this.getTypedRuleContext(RetorneContext,0);
};
Def_funcao_corpoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDef_funcao_corpo(this);
	}
};

Def_funcao_corpoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDef_funcao_corpo(this);
	}
};



potigolParser.Decl_funcaoContext = Decl_funcaoContext;

potigolParser.prototype.decl_funcao = function() {

    var localctx = new Decl_funcaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, potigolParser.RULE_decl_funcao);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Def_funcaoContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(potigolParser.ID);
            this.state = 145;
            this.match(potigolParser.T__7);
            this.state = 146;
            this.dcls();
            this.state = 147;
            this.match(potigolParser.T__8);
            this.state = 150;
            _la = this._input.LA(1);
            if(_la===potigolParser.T__9) {
                this.state = 148;
                this.match(potigolParser.T__9);
                this.state = 149;
                this.tipo(0);
            }

            this.state = 152;
            this.match(potigolParser.T__5);
            this.state = 153;
            this.expr(0);
            break;

        case 2:
            localctx = new Def_funcao_corpoContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.match(potigolParser.ID);
            this.state = 156;
            this.match(potigolParser.T__7);
            this.state = 157;
            this.dcls();
            this.state = 158;
            this.match(potigolParser.T__8);
            this.state = 161;
            _la = this._input.LA(1);
            if(_la===potigolParser.T__9) {
                this.state = 159;
                this.match(potigolParser.T__9);
                this.state = 160;
                this.tipo(0);
            }

            this.state = 163;
            this.exprlist();
            this.state = 165;
            _la = this._input.LA(1);
            if(_la===potigolParser.T__13) {
                this.state = 164;
                this.retorne();
            }

            this.state = 167;
            this.match(potigolParser.T__10);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_tipoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decl_tipo;
    return this;
}

Decl_tipoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_tipoContext.prototype.constructor = Decl_tipoContext;


 
Decl_tipoContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClasseContext(parser, ctx) {
	Decl_tipoContext.call(this, parser);
    Decl_tipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClasseContext.prototype = Object.create(Decl_tipoContext.prototype);
ClasseContext.prototype.constructor = ClasseContext;

potigolParser.ClasseContext = ClasseContext;

ClasseContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

ClasseContext.prototype.dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DclContext);
    } else {
        return this.getTypedRuleContext(DclContext,i);
    }
};

ClasseContext.prototype.dcl_var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Dcl_varContext);
    } else {
        return this.getTypedRuleContext(Dcl_varContext,i);
    }
};

ClasseContext.prototype.decl_funcao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_funcaoContext);
    } else {
        return this.getTypedRuleContext(Decl_funcaoContext,i);
    }
};

ClasseContext.prototype.decl_valor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_valorContext);
    } else {
        return this.getTypedRuleContext(Decl_valorContext,i);
    }
};
ClasseContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterClasse(this);
	}
};

ClasseContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitClasse(this);
	}
};


function AliasContext(parser, ctx) {
	Decl_tipoContext.call(this, parser);
    Decl_tipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AliasContext.prototype = Object.create(Decl_tipoContext.prototype);
AliasContext.prototype.constructor = AliasContext;

potigolParser.AliasContext = AliasContext;

AliasContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

AliasContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};
AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitAlias(this);
	}
};



potigolParser.Decl_tipoContext = Decl_tipoContext;

potigolParser.prototype.decl_tipo = function() {

    var localctx = new Decl_tipoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, potigolParser.RULE_decl_tipo);
    var _la = 0; // Token type
    try {
        this.state = 187;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AliasContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.match(potigolParser.T__11);
            this.state = 172;
            this.match(potigolParser.ID);
            this.state = 173;
            this.match(potigolParser.T__5);
            this.state = 174;
            this.tipo(0);
            break;

        case 2:
            localctx = new ClasseContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(potigolParser.T__11);
            this.state = 176;
            this.match(potigolParser.ID);
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===potigolParser.T__6 || _la===potigolParser.ID) {
                this.state = 181;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 177;
                    this.dcl();
                    break;

                case 2:
                    this.state = 178;
                    this.dcl_var();
                    break;

                case 3:
                    this.state = 179;
                    this.decl_funcao();
                    break;

                case 4:
                    this.state = 180;
                    this.decl_valor();
                    break;

                }
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 186;
            this.match(potigolParser.T__10);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_usoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decl_uso;
    return this;
}

Decl_usoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_usoContext.prototype.constructor = Decl_usoContext;

Decl_usoContext.prototype.STRING = function() {
    return this.getToken(potigolParser.STRING, 0);
};

Decl_usoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecl_uso(this);
	}
};

Decl_usoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecl_uso(this);
	}
};




potigolParser.Decl_usoContext = Decl_usoContext;

potigolParser.prototype.decl_uso = function() {

    var localctx = new Decl_usoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, potigolParser.RULE_decl_uso);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(potigolParser.T__12);
        this.state = 190;
        this.match(potigolParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetorneContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_retorne;
    return this;
}

RetorneContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetorneContext.prototype.constructor = RetorneContext;

RetorneContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RetorneContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterRetorne(this);
	}
};

RetorneContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitRetorne(this);
	}
};




potigolParser.RetorneContext = RetorneContext;

potigolParser.prototype.retorne = function() {

    var localctx = new RetorneContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, potigolParser.RULE_retorne);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(potigolParser.T__13);
        this.state = 193;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_dcl;
    return this;
}

DclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DclContext.prototype.constructor = DclContext;

DclContext.prototype.id1 = function() {
    return this.getTypedRuleContext(Id1Context,0);
};

DclContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};

DclContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDcl(this);
	}
};

DclContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDcl(this);
	}
};




potigolParser.DclContext = DclContext;

potigolParser.prototype.dcl = function() {

    var localctx = new DclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, potigolParser.RULE_dcl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.id1();
        this.state = 196;
        this.match(potigolParser.T__9);
        this.state = 197;
        this.tipo(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Dcl_varContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_dcl_var;
    return this;
}

Dcl_varContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dcl_varContext.prototype.constructor = Dcl_varContext;

Dcl_varContext.prototype.id1 = function() {
    return this.getTypedRuleContext(Id1Context,0);
};

Dcl_varContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};

Dcl_varContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDcl_var(this);
	}
};

Dcl_varContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDcl_var(this);
	}
};




potigolParser.Dcl_varContext = Dcl_varContext;

potigolParser.prototype.dcl_var = function() {

    var localctx = new Dcl_varContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, potigolParser.RULE_dcl_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(potigolParser.T__6);
        this.state = 200;
        this.id1();
        this.state = 201;
        this.match(potigolParser.T__9);
        this.state = 202;
        this.tipo(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DclsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_dcls;
    return this;
}

DclsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DclsContext.prototype.constructor = DclsContext;

DclsContext.prototype.dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DclContext);
    } else {
        return this.getTypedRuleContext(DclContext,i);
    }
};

DclsContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDcls(this);
	}
};

DclsContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDcls(this);
	}
};




potigolParser.DclsContext = DclsContext;

potigolParser.prototype.dcls = function() {

    var localctx = new DclsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, potigolParser.RULE_dcls);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        _la = this._input.LA(1);
        if(_la===potigolParser.ID) {
            this.state = 204;
            this.dcl();
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===potigolParser.T__14) {
                this.state = 205;
                this.match(potigolParser.T__14);
                this.state = 206;
                this.dcl();
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Dcl1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_dcl1;
    return this;
}

Dcl1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dcl1Context.prototype.constructor = Dcl1Context;

Dcl1Context.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Dcl1Context.prototype.expr2 = function() {
    return this.getTypedRuleContext(Expr2Context,0);
};

Dcl1Context.prototype.dcls = function() {
    return this.getTypedRuleContext(DclsContext,0);
};

Dcl1Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDcl1(this);
	}
};

Dcl1Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDcl1(this);
	}
};




potigolParser.Dcl1Context = Dcl1Context;

potigolParser.prototype.dcl1 = function() {

    var localctx = new Dcl1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 24, potigolParser.RULE_dcl1);
    try {
        this.state = 223;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 214;
            this.match(potigolParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            this.match(potigolParser.T__7);
            this.state = 216;
            this.expr2();
            this.state = 217;
            this.match(potigolParser.T__8);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 219;
            this.match(potigolParser.T__7);
            this.state = 220;
            this.dcls();
            this.state = 221;
            this.match(potigolParser.T__8);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TipoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_tipo;
    return this;
}

TipoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoContext.prototype.constructor = TipoContext;


 
TipoContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Tipo_simplesContext(parser, ctx) {
	TipoContext.call(this, parser);
    TipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Tipo_simplesContext.prototype = Object.create(TipoContext.prototype);
Tipo_simplesContext.prototype.constructor = Tipo_simplesContext;

potigolParser.Tipo_simplesContext = Tipo_simplesContext;

Tipo_simplesContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};
Tipo_simplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTipo_simples(this);
	}
};

Tipo_simplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTipo_simples(this);
	}
};


function Tipo_funcaoContext(parser, ctx) {
	TipoContext.call(this, parser);
    TipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Tipo_funcaoContext.prototype = Object.create(TipoContext.prototype);
Tipo_funcaoContext.prototype.constructor = Tipo_funcaoContext;

potigolParser.Tipo_funcaoContext = Tipo_funcaoContext;

Tipo_funcaoContext.prototype.tipo = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TipoContext);
    } else {
        return this.getTypedRuleContext(TipoContext,i);
    }
};
Tipo_funcaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTipo_funcao(this);
	}
};

Tipo_funcaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTipo_funcao(this);
	}
};


function Tipo_genericoContext(parser, ctx) {
	TipoContext.call(this, parser);
    TipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Tipo_genericoContext.prototype = Object.create(TipoContext.prototype);
Tipo_genericoContext.prototype.constructor = Tipo_genericoContext;

potigolParser.Tipo_genericoContext = Tipo_genericoContext;

Tipo_genericoContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Tipo_genericoContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};
Tipo_genericoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTipo_generico(this);
	}
};

Tipo_genericoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTipo_generico(this);
	}
};


function Tipo_tuplaContext(parser, ctx) {
	TipoContext.call(this, parser);
    TipoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Tipo_tuplaContext.prototype = Object.create(TipoContext.prototype);
Tipo_tuplaContext.prototype.constructor = Tipo_tuplaContext;

potigolParser.Tipo_tuplaContext = Tipo_tuplaContext;

Tipo_tuplaContext.prototype.tipo2 = function() {
    return this.getTypedRuleContext(Tipo2Context,0);
};
Tipo_tuplaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTipo_tupla(this);
	}
};

Tipo_tuplaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTipo_tupla(this);
	}
};



potigolParser.prototype.tipo = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TipoContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, potigolParser.RULE_tipo, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Tipo_simplesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 226;
            this.match(potigolParser.ID);
            break;

        case 2:
            localctx = new Tipo_tuplaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 227;
            this.match(potigolParser.T__7);
            this.state = 228;
            this.tipo2();
            this.state = 229;
            this.match(potigolParser.T__8);
            break;

        case 3:
            localctx = new Tipo_genericoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 231;
            this.match(potigolParser.ID);
            this.state = 232;
            this.match(potigolParser.T__3);
            this.state = 233;
            this.tipo(0);
            this.state = 234;
            this.match(potigolParser.T__4);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 243;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Tipo_funcaoContext(this, new TipoContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_tipo);
                this.state = 238;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 239;
                this.match(potigolParser.T__15);
                this.state = 240;
                this.tipo(1); 
            }
            this.state = 245;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ListaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListaContext.prototype = Object.create(ExprContext.prototype);
ListaContext.prototype.constructor = ListaContext;

potigolParser.ListaContext = ListaContext;

ListaContext.prototype.expr1 = function() {
    return this.getTypedRuleContext(Expr1Context,0);
};
ListaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterLista(this);
	}
};

ListaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitLista(this);
	}
};


function ExpoenteContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpoenteContext.prototype = Object.create(ExprContext.prototype);
ExpoenteContext.prototype.constructor = ExpoenteContext;

potigolParser.ExpoenteContext = ExpoenteContext;

ExpoenteContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExpoenteContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterExpoente(this);
	}
};

ExpoenteContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitExpoente(this);
	}
};


function Get_vetorContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Get_vetorContext.prototype = Object.create(ExprContext.prototype);
Get_vetorContext.prototype.constructor = Get_vetorContext;

potigolParser.Get_vetorContext = Get_vetorContext;

Get_vetorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
Get_vetorContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterGet_vetor(this);
	}
};

Get_vetorContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitGet_vetor(this);
	}
};


function FormatoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FormatoContext.prototype = Object.create(ExprContext.prototype);
FormatoContext.prototype.constructor = FormatoContext;

potigolParser.FormatoContext = FormatoContext;

FormatoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
FormatoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterFormato(this);
	}
};

FormatoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitFormato(this);
	}
};


function Soma_subContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Soma_subContext.prototype = Object.create(ExprContext.prototype);
Soma_subContext.prototype.constructor = Soma_subContext;

potigolParser.Soma_subContext = Soma_subContext;

Soma_subContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
Soma_subContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterSoma_sub(this);
	}
};

Soma_subContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitSoma_sub(this);
	}
};


function Mult_divContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Mult_divContext.prototype = Object.create(ExprContext.prototype);
Mult_divContext.prototype.constructor = Mult_divContext;

potigolParser.Mult_divContext = Mult_divContext;

Mult_divContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
Mult_divContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterMult_div(this);
	}
};

Mult_divContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitMult_div(this);
	}
};


function LambdaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LambdaContext.prototype = Object.create(ExprContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;

potigolParser.LambdaContext = LambdaContext;

LambdaContext.prototype.dcl1 = function() {
    return this.getTypedRuleContext(Dcl1Context,0);
};

LambdaContext.prototype.inst = function() {
    return this.getTypedRuleContext(InstContext,0);
};
LambdaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterLambda(this);
	}
};

LambdaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitLambda(this);
	}
};


function ParenContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenContext.prototype = Object.create(ExprContext.prototype);
ParenContext.prototype.constructor = ParenContext;

potigolParser.ParenContext = ParenContext;

ParenContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterParen(this);
	}
};

ParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitParen(this);
	}
};


function Nao_logicoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Nao_logicoContext.prototype = Object.create(ExprContext.prototype);
Nao_logicoContext.prototype.constructor = Nao_logicoContext;

potigolParser.Nao_logicoContext = Nao_logicoContext;

Nao_logicoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
Nao_logicoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterNao_logico(this);
	}
};

Nao_logicoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitNao_logico(this);
	}
};


function LacoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LacoContext.prototype = Object.create(ExprContext.prototype);
LacoContext.prototype.constructor = LacoContext;

potigolParser.LacoContext = LacoContext;

LacoContext.prototype.repeticao = function() {
    return this.getTypedRuleContext(RepeticaoContext,0);
};
LacoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterLaco(this);
	}
};

LacoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitLaco(this);
	}
};


function IstoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IstoContext.prototype = Object.create(ExprContext.prototype);
IstoContext.prototype.constructor = IstoContext;

potigolParser.IstoContext = IstoContext;

IstoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterIsto(this);
	}
};

IstoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitIsto(this);
	}
};


function E_logicoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_logicoContext.prototype = Object.create(ExprContext.prototype);
E_logicoContext.prototype.constructor = E_logicoContext;

potigolParser.E_logicoContext = E_logicoContext;

E_logicoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
E_logicoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterE_logico(this);
	}
};

E_logicoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitE_logico(this);
	}
};


function LitContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LitContext.prototype = Object.create(ExprContext.prototype);
LitContext.prototype.constructor = LitContext;

potigolParser.LitContext = LitContext;

LitContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LitContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterLit(this);
	}
};

LitContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitLit(this);
	}
};


function Chamada_metodoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Chamada_metodoContext.prototype = Object.create(ExprContext.prototype);
Chamada_metodoContext.prototype.constructor = Chamada_metodoContext;

potigolParser.Chamada_metodoContext = Chamada_metodoContext;

Chamada_metodoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Chamada_metodoContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Chamada_metodoContext.prototype.expr1 = function() {
    return this.getTypedRuleContext(Expr1Context,0);
};
Chamada_metodoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterChamada_metodo(this);
	}
};

Chamada_metodoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitChamada_metodo(this);
	}
};


function ComparacaoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparacaoContext.prototype = Object.create(ExprContext.prototype);
ComparacaoContext.prototype.constructor = ComparacaoContext;

potigolParser.ComparacaoContext = ComparacaoContext;

ComparacaoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ComparacaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterComparacao(this);
	}
};

ComparacaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitComparacao(this);
	}
};


function Ou_logicoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Ou_logicoContext.prototype = Object.create(ExprContext.prototype);
Ou_logicoContext.prototype.constructor = Ou_logicoContext;

potigolParser.Ou_logicoContext = Ou_logicoContext;

Ou_logicoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
Ou_logicoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterOu_logico(this);
	}
};

Ou_logicoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitOu_logico(this);
	}
};


function Chamada_funcaoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Chamada_funcaoContext.prototype = Object.create(ExprContext.prototype);
Chamada_funcaoContext.prototype.constructor = Chamada_funcaoContext;

potigolParser.Chamada_funcaoContext = Chamada_funcaoContext;

Chamada_funcaoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Chamada_funcaoContext.prototype.expr1 = function() {
    return this.getTypedRuleContext(Expr1Context,0);
};
Chamada_funcaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterChamada_funcao(this);
	}
};

Chamada_funcaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitChamada_funcao(this);
	}
};


function CuringaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CuringaContext.prototype = Object.create(ExprContext.prototype);
CuringaContext.prototype.constructor = CuringaContext;

potigolParser.CuringaContext = CuringaContext;

CuringaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterCuringa(this);
	}
};

CuringaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitCuringa(this);
	}
};


function Mais_menos_unarioContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Mais_menos_unarioContext.prototype = Object.create(ExprContext.prototype);
Mais_menos_unarioContext.prototype.constructor = Mais_menos_unarioContext;

potigolParser.Mais_menos_unarioContext = Mais_menos_unarioContext;

Mais_menos_unarioContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
Mais_menos_unarioContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterMais_menos_unario(this);
	}
};

Mais_menos_unarioContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitMais_menos_unario(this);
	}
};


function DecisContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecisContext.prototype = Object.create(ExprContext.prototype);
DecisContext.prototype.constructor = DecisContext;

potigolParser.DecisContext = DecisContext;

DecisContext.prototype.decisao = function() {
    return this.getTypedRuleContext(DecisaoContext,0);
};
DecisContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecis(this);
	}
};

DecisContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecis(this);
	}
};


function TuplaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TuplaContext.prototype = Object.create(ExprContext.prototype);
TuplaContext.prototype.constructor = TuplaContext;

potigolParser.TuplaContext = TuplaContext;

TuplaContext.prototype.expr2 = function() {
    return this.getTypedRuleContext(Expr2Context,0);
};
TuplaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTupla(this);
	}
};

TuplaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTupla(this);
	}
};


function ConsContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConsContext.prototype = Object.create(ExprContext.prototype);
ConsContext.prototype.constructor = ConsContext;

potigolParser.ConsContext = ConsContext;

ConsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ConsContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterCons(this);
	}
};

ConsContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitCons(this);
	}
};



potigolParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, potigolParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Mais_menos_unarioContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 247;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__19 || _la===potigolParser.T__20)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 248;
            this.expr(16);
            break;

        case 2:
            localctx = new Nao_logicoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 249;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__32 || _la===potigolParser.T__33)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 250;
            this.expr(11);
            break;

        case 3:
            localctx = new LitContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 251;
            this.literal();
            break;

        case 4:
            localctx = new LambdaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 252;
            this.dcl1();
            this.state = 253;
            this.match(potigolParser.T__15);
            this.state = 254;
            this.inst();
            break;

        case 5:
            localctx = new DecisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 256;
            this.decisao();
            break;

        case 6:
            localctx = new LacoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 257;
            this.repeticao();
            break;

        case 7:
            localctx = new TuplaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 258;
            this.match(potigolParser.T__7);
            this.state = 259;
            this.expr2();
            this.state = 260;
            this.match(potigolParser.T__8);
            break;

        case 8:
            localctx = new ParenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 262;
            this.match(potigolParser.T__7);
            this.state = 263;
            this.expr(0);
            this.state = 264;
            this.match(potigolParser.T__8);
            break;

        case 9:
            localctx = new ListaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 266;
            this.match(potigolParser.T__3);
            this.state = 268;
            _la = this._input.LA(1);
            if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (potigolParser.T__3 - 4)) | (1 << (potigolParser.T__7 - 4)) | (1 << (potigolParser.T__19 - 4)) | (1 << (potigolParser.T__20 - 4)) | (1 << (potigolParser.T__32 - 4)) | (1 << (potigolParser.T__33 - 4)))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (potigolParser.T__36 - 37)) | (1 << (potigolParser.T__37 - 37)) | (1 << (potigolParser.T__38 - 37)) | (1 << (potigolParser.T__45 - 37)) | (1 << (potigolParser.T__48 - 37)) | (1 << (potigolParser.T__50 - 37)) | (1 << (potigolParser.ID - 37)) | (1 << (potigolParser.INT - 37)) | (1 << (potigolParser.FLOAT - 37)) | (1 << (potigolParser.STRING - 37)) | (1 << (potigolParser.BS - 37)) | (1 << (potigolParser.CHAR - 37)) | (1 << (potigolParser.BOOLEANO - 37)))) !== 0)) {
                this.state = 267;
                this.expr1();
            }

            this.state = 270;
            this.match(potigolParser.T__4);
            break;

        case 10:
            localctx = new IstoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 271;
            this.match(potigolParser.T__36);
            break;

        case 11:
            localctx = new CuringaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 272;
            this.match(potigolParser.T__37);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 321;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 319;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpoenteContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 275;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 276;
                    this.match(potigolParser.T__17);
                    this.state = 277;
                    this.expr(18);
                    break;

                case 2:
                    localctx = new ConsContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 278;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 279;
                    this.match(potigolParser.T__18);
                    this.state = 280;
                    this.expr(17);
                    break;

                case 3:
                    localctx = new Mult_divContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 281;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 282;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << potigolParser.T__21) | (1 << potigolParser.T__22) | (1 << potigolParser.T__23) | (1 << potigolParser.T__24))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 283;
                    this.expr(16);
                    break;

                case 4:
                    localctx = new Soma_subContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 284;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 285;
                    _la = this._input.LA(1);
                    if(!(_la===potigolParser.T__19 || _la===potigolParser.T__20)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 286;
                    this.expr(15);
                    break;

                case 5:
                    localctx = new FormatoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 287;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 288;
                    this.match(potigolParser.T__25);
                    this.state = 289;
                    this.expr(14);
                    break;

                case 6:
                    localctx = new ComparacaoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 290;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 291;
                    _la = this._input.LA(1);
                    if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (potigolParser.T__26 - 27)) | (1 << (potigolParser.T__27 - 27)) | (1 << (potigolParser.T__28 - 27)) | (1 << (potigolParser.T__29 - 27)) | (1 << (potigolParser.T__30 - 27)) | (1 << (potigolParser.T__31 - 27)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 292;
                    this.expr(13);
                    break;

                case 7:
                    localctx = new E_logicoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 293;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 294;
                    this.match(potigolParser.T__34);
                    this.state = 295;
                    this.expr(11);
                    break;

                case 8:
                    localctx = new Ou_logicoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 296;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 297;
                    this.match(potigolParser.T__35);
                    this.state = 298;
                    this.expr(10);
                    break;

                case 9:
                    localctx = new Chamada_metodoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 299;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 300;
                    this.match(potigolParser.T__16);
                    this.state = 301;
                    this.match(potigolParser.ID);
                    this.state = 306;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                    if(la_===1) {
                        this.state = 302;
                        this.match(potigolParser.T__7);
                        this.state = 303;
                        this.expr1();
                        this.state = 304;
                        this.match(potigolParser.T__8);

                    }
                    break;

                case 10:
                    localctx = new Chamada_funcaoContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 308;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 309;
                    this.match(potigolParser.T__7);
                    this.state = 311;
                    _la = this._input.LA(1);
                    if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (potigolParser.T__3 - 4)) | (1 << (potigolParser.T__7 - 4)) | (1 << (potigolParser.T__19 - 4)) | (1 << (potigolParser.T__20 - 4)) | (1 << (potigolParser.T__32 - 4)) | (1 << (potigolParser.T__33 - 4)))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (potigolParser.T__36 - 37)) | (1 << (potigolParser.T__37 - 37)) | (1 << (potigolParser.T__38 - 37)) | (1 << (potigolParser.T__45 - 37)) | (1 << (potigolParser.T__48 - 37)) | (1 << (potigolParser.T__50 - 37)) | (1 << (potigolParser.ID - 37)) | (1 << (potigolParser.INT - 37)) | (1 << (potigolParser.FLOAT - 37)) | (1 << (potigolParser.STRING - 37)) | (1 << (potigolParser.BS - 37)) | (1 << (potigolParser.CHAR - 37)) | (1 << (potigolParser.BOOLEANO - 37)))) !== 0)) {
                        this.state = 310;
                        this.expr1();
                    }

                    this.state = 313;
                    this.match(potigolParser.T__8);
                    break;

                case 11:
                    localctx = new Get_vetorContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_expr);
                    this.state = 314;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 315;
                    this.match(potigolParser.T__3);
                    this.state = 316;
                    this.expr(0);
                    this.state = 317;
                    this.match(potigolParser.T__4);
                    break;

                } 
            }
            this.state = 323;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;


 
LiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TextoContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextoContext.prototype = Object.create(LiteralContext.prototype);
TextoContext.prototype.constructor = TextoContext;

potigolParser.TextoContext = TextoContext;

TextoContext.prototype.STRING = function() {
    return this.getToken(potigolParser.STRING, 0);
};
TextoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTexto(this);
	}
};

TextoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTexto(this);
	}
};


function BooleanoContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanoContext.prototype = Object.create(LiteralContext.prototype);
BooleanoContext.prototype.constructor = BooleanoContext;

potigolParser.BooleanoContext = BooleanoContext;

BooleanoContext.prototype.BOOLEANO = function() {
    return this.getToken(potigolParser.BOOLEANO, 0);
};
BooleanoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterBooleano(this);
	}
};

BooleanoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitBooleano(this);
	}
};


function InteiroContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InteiroContext.prototype = Object.create(LiteralContext.prototype);
InteiroContext.prototype.constructor = InteiroContext;

potigolParser.InteiroContext = InteiroContext;

InteiroContext.prototype.INT = function() {
    return this.getToken(potigolParser.INT, 0);
};
InteiroContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterInteiro(this);
	}
};

InteiroContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitInteiro(this);
	}
};


function CharContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharContext.prototype = Object.create(LiteralContext.prototype);
CharContext.prototype.constructor = CharContext;

potigolParser.CharContext = CharContext;

CharContext.prototype.CHAR = function() {
    return this.getToken(potigolParser.CHAR, 0);
};
CharContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterChar(this);
	}
};

CharContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitChar(this);
	}
};


function Texto_interpolacaoContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Texto_interpolacaoContext.prototype = Object.create(LiteralContext.prototype);
Texto_interpolacaoContext.prototype.constructor = Texto_interpolacaoContext;

potigolParser.Texto_interpolacaoContext = Texto_interpolacaoContext;

Texto_interpolacaoContext.prototype.BS = function() {
    return this.getToken(potigolParser.BS, 0);
};

Texto_interpolacaoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Texto_interpolacaoContext.prototype.ES = function() {
    return this.getToken(potigolParser.ES, 0);
};

Texto_interpolacaoContext.prototype.MS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(potigolParser.MS);
    } else {
        return this.getToken(potigolParser.MS, i);
    }
};

Texto_interpolacaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTexto_interpolacao(this);
	}
};

Texto_interpolacaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTexto_interpolacao(this);
	}
};


function IdContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(LiteralContext.prototype);
IdContext.prototype.constructor = IdContext;

potigolParser.IdContext = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitId(this);
	}
};


function RealContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RealContext.prototype = Object.create(LiteralContext.prototype);
RealContext.prototype.constructor = RealContext;

potigolParser.RealContext = RealContext;

RealContext.prototype.FLOAT = function() {
    return this.getToken(potigolParser.FLOAT, 0);
};
RealContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterReal(this);
	}
};

RealContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitReal(this);
	}
};



potigolParser.LiteralContext = LiteralContext;

potigolParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, potigolParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 341;
        switch(this._input.LA(1)) {
        case potigolParser.BOOLEANO:
            localctx = new BooleanoContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 324;
            this.match(potigolParser.BOOLEANO);
            break;
        case potigolParser.ID:
            localctx = new IdContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 325;
            this.match(potigolParser.ID);
            break;
        case potigolParser.BS:
            localctx = new Texto_interpolacaoContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 326;
            this.match(potigolParser.BS);
            this.state = 327;
            this.expr(0);
            this.state = 332;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===potigolParser.MS) {
                this.state = 328;
                this.match(potigolParser.MS);
                this.state = 329;
                this.expr(0);
                this.state = 334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 335;
            this.match(potigolParser.ES);
            break;
        case potigolParser.STRING:
            localctx = new TextoContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 337;
            this.match(potigolParser.STRING);
            break;
        case potigolParser.INT:
            localctx = new InteiroContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 338;
            this.match(potigolParser.INT);
            break;
        case potigolParser.FLOAT:
            localctx = new RealContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 339;
            this.match(potigolParser.FLOAT);
            break;
        case potigolParser.CHAR:
            localctx = new CharContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 340;
            this.match(potigolParser.CHAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DecisaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_decisao;
    return this;
}

DecisaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecisaoContext.prototype.constructor = DecisaoContext;

DecisaoContext.prototype.se = function() {
    return this.getTypedRuleContext(SeContext,0);
};

DecisaoContext.prototype.escolha = function() {
    return this.getTypedRuleContext(EscolhaContext,0);
};

DecisaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterDecisao(this);
	}
};

DecisaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitDecisao(this);
	}
};




potigolParser.DecisaoContext = DecisaoContext;

potigolParser.prototype.decisao = function() {

    var localctx = new DecisaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, potigolParser.RULE_decisao);
    try {
        this.state = 345;
        switch(this._input.LA(1)) {
        case potigolParser.T__38:
            this.enterOuterAlt(localctx, 1);
            this.state = 343;
            this.se();
            break;
        case potigolParser.T__45:
            this.enterOuterAlt(localctx, 2);
            this.state = 344;
            this.escolha();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_se;
    return this;
}

SeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeContext.prototype.constructor = SeContext;

SeContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SeContext.prototype.entao = function() {
    return this.getTypedRuleContext(EntaoContext,0);
};

SeContext.prototype.senaose = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SenaoseContext);
    } else {
        return this.getTypedRuleContext(SenaoseContext,i);
    }
};

SeContext.prototype.senao = function() {
    return this.getTypedRuleContext(SenaoContext,0);
};

SeContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterSe(this);
	}
};

SeContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitSe(this);
	}
};




potigolParser.SeContext = SeContext;

potigolParser.prototype.se = function() {

    var localctx = new SeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, potigolParser.RULE_se);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(potigolParser.T__38);
        this.state = 348;
        this.expr(0);
        this.state = 349;
        this.entao();
        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===potigolParser.T__41 || _la===potigolParser.T__42) {
            this.state = 350;
            this.senaose();
            this.state = 355;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 357;
        _la = this._input.LA(1);
        if(_la===potigolParser.T__43 || _la===potigolParser.T__44) {
            this.state = 356;
            this.senao();
        }

        this.state = 359;
        this.match(potigolParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_entao;
    return this;
}

EntaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntaoContext.prototype.constructor = EntaoContext;

EntaoContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

EntaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterEntao(this);
	}
};

EntaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitEntao(this);
	}
};




potigolParser.EntaoContext = EntaoContext;

potigolParser.prototype.entao = function() {

    var localctx = new EntaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, potigolParser.RULE_entao);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        _la = this._input.LA(1);
        if(_la===potigolParser.T__39 || _la===potigolParser.T__40) {
            this.state = 361;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__39 || _la===potigolParser.T__40)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 364;
        this.exprlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SenaoseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_senaose;
    return this;
}

SenaoseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SenaoseContext.prototype.constructor = SenaoseContext;

SenaoseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SenaoseContext.prototype.entao = function() {
    return this.getTypedRuleContext(EntaoContext,0);
};

SenaoseContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterSenaose(this);
	}
};

SenaoseContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitSenaose(this);
	}
};




potigolParser.SenaoseContext = SenaoseContext;

potigolParser.prototype.senaose = function() {

    var localctx = new SenaoseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, potigolParser.RULE_senaose);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        _la = this._input.LA(1);
        if(!(_la===potigolParser.T__41 || _la===potigolParser.T__42)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 367;
        this.expr(0);
        this.state = 368;
        this.entao();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SenaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_senao;
    return this;
}

SenaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SenaoContext.prototype.constructor = SenaoContext;

SenaoContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

SenaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterSenao(this);
	}
};

SenaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitSenao(this);
	}
};




potigolParser.SenaoContext = SenaoContext;

potigolParser.prototype.senao = function() {

    var localctx = new SenaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, potigolParser.RULE_senao);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        _la = this._input.LA(1);
        if(!(_la===potigolParser.T__43 || _la===potigolParser.T__44)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 371;
        this.exprlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EscolhaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_escolha;
    return this;
}

EscolhaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EscolhaContext.prototype.constructor = EscolhaContext;

EscolhaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EscolhaContext.prototype.caso = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CasoContext);
    } else {
        return this.getTypedRuleContext(CasoContext,i);
    }
};

EscolhaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterEscolha(this);
	}
};

EscolhaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitEscolha(this);
	}
};




potigolParser.EscolhaContext = EscolhaContext;

potigolParser.prototype.escolha = function() {

    var localctx = new EscolhaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, potigolParser.RULE_escolha);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(potigolParser.T__45);
        this.state = 374;
        this.expr(0);
        this.state = 376; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 375;
            this.caso();
            this.state = 378; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===potigolParser.T__46);
        this.state = 380;
        this.match(potigolParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CasoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_caso;
    return this;
}

CasoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CasoContext.prototype.constructor = CasoContext;

CasoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CasoContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

CasoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterCaso(this);
	}
};

CasoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitCaso(this);
	}
};




potigolParser.CasoContext = CasoContext;

potigolParser.prototype.caso = function() {

    var localctx = new CasoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, potigolParser.RULE_caso);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(potigolParser.T__46);
        this.state = 383;
        this.expr(0);
        this.state = 386;
        _la = this._input.LA(1);
        if(_la===potigolParser.T__38) {
            this.state = 384;
            this.match(potigolParser.T__38);
            this.state = 385;
            this.expr(0);
        }

        this.state = 388;
        this.match(potigolParser.T__15);
        this.state = 389;
        this.exprlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PadraoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_padrao;
    return this;
}

PadraoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PadraoContext.prototype.constructor = PadraoContext;


 
PadraoContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Padrao_consContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_consContext.prototype = Object.create(PadraoContext.prototype);
Padrao_consContext.prototype.constructor = Padrao_consContext;

potigolParser.Padrao_consContext = Padrao_consContext;

Padrao_consContext.prototype.padrao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PadraoContext);
    } else {
        return this.getTypedRuleContext(PadraoContext,i);
    }
};
Padrao_consContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_cons(this);
	}
};

Padrao_consContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_cons(this);
	}
};


function Padrao_defaultContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_defaultContext.prototype = Object.create(PadraoContext.prototype);
Padrao_defaultContext.prototype.constructor = Padrao_defaultContext;

potigolParser.Padrao_defaultContext = Padrao_defaultContext;

Padrao_defaultContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_default(this);
	}
};

Padrao_defaultContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_default(this);
	}
};


function Padrao_literalContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_literalContext.prototype = Object.create(PadraoContext.prototype);
Padrao_literalContext.prototype.constructor = Padrao_literalContext;

potigolParser.Padrao_literalContext = Padrao_literalContext;

Padrao_literalContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
Padrao_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_literal(this);
	}
};

Padrao_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_literal(this);
	}
};


function Padrao_objetoContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_objetoContext.prototype = Object.create(PadraoContext.prototype);
Padrao_objetoContext.prototype.constructor = Padrao_objetoContext;

potigolParser.Padrao_objetoContext = Padrao_objetoContext;

Padrao_objetoContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

Padrao_objetoContext.prototype.padrao = function() {
    return this.getTypedRuleContext(PadraoContext,0);
};
Padrao_objetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_objeto(this);
	}
};

Padrao_objetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_objeto(this);
	}
};


function Padrao_tuplaContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_tuplaContext.prototype = Object.create(PadraoContext.prototype);
Padrao_tuplaContext.prototype.constructor = Padrao_tuplaContext;

potigolParser.Padrao_tuplaContext = Padrao_tuplaContext;

Padrao_tuplaContext.prototype.padrao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PadraoContext);
    } else {
        return this.getTypedRuleContext(PadraoContext,i);
    }
};
Padrao_tuplaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_tupla(this);
	}
};

Padrao_tuplaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_tupla(this);
	}
};


function Padrao_idContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_idContext.prototype = Object.create(PadraoContext.prototype);
Padrao_idContext.prototype.constructor = Padrao_idContext;

potigolParser.Padrao_idContext = Padrao_idContext;

Padrao_idContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};
Padrao_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_id(this);
	}
};

Padrao_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_id(this);
	}
};


function Padrao_ouContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_ouContext.prototype = Object.create(PadraoContext.prototype);
Padrao_ouContext.prototype.constructor = Padrao_ouContext;

potigolParser.Padrao_ouContext = Padrao_ouContext;

Padrao_ouContext.prototype.padrao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PadraoContext);
    } else {
        return this.getTypedRuleContext(PadraoContext,i);
    }
};
Padrao_ouContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_ou(this);
	}
};

Padrao_ouContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_ou(this);
	}
};


function Padrao_virgulaContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_virgulaContext.prototype = Object.create(PadraoContext.prototype);
Padrao_virgulaContext.prototype.constructor = Padrao_virgulaContext;

potigolParser.Padrao_virgulaContext = Padrao_virgulaContext;

Padrao_virgulaContext.prototype.padrao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PadraoContext);
    } else {
        return this.getTypedRuleContext(PadraoContext,i);
    }
};
Padrao_virgulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_virgula(this);
	}
};

Padrao_virgulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_virgula(this);
	}
};


function Padrao_listaContext(parser, ctx) {
	PadraoContext.call(this, parser);
    PadraoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Padrao_listaContext.prototype = Object.create(PadraoContext.prototype);
Padrao_listaContext.prototype.constructor = Padrao_listaContext;

potigolParser.Padrao_listaContext = Padrao_listaContext;

Padrao_listaContext.prototype.padrao = function() {
    return this.getTypedRuleContext(PadraoContext,0);
};
Padrao_listaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPadrao_lista(this);
	}
};

Padrao_listaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPadrao_lista(this);
	}
};



potigolParser.prototype.padrao = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PadraoContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, potigolParser.RULE_padrao, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Padrao_defaultContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 392;
            this.match(potigolParser.T__37);
            break;

        case 2:
            localctx = new Padrao_idContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 393;
            this.match(potigolParser.ID);
            break;

        case 3:
            localctx = new Padrao_literalContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 394;
            this.literal();
            break;

        case 4:
            localctx = new Padrao_objetoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 395;
            this.match(potigolParser.ID);
            this.state = 396;
            this.match(potigolParser.T__7);
            this.state = 397;
            this.padrao(0);
            this.state = 398;
            this.match(potigolParser.T__8);
            break;

        case 5:
            localctx = new Padrao_tuplaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 400;
            this.match(potigolParser.T__7);
            this.state = 402; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 401;
                this.padrao(0);
                this.state = 404; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===potigolParser.T__3 || _la===potigolParser.T__7 || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (potigolParser.T__37 - 38)) | (1 << (potigolParser.ID - 38)) | (1 << (potigolParser.INT - 38)) | (1 << (potigolParser.FLOAT - 38)) | (1 << (potigolParser.STRING - 38)) | (1 << (potigolParser.BS - 38)) | (1 << (potigolParser.CHAR - 38)) | (1 << (potigolParser.BOOLEANO - 38)))) !== 0));
            this.state = 406;
            this.match(potigolParser.T__8);
            break;

        case 6:
            localctx = new Padrao_listaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 408;
            this.match(potigolParser.T__3);
            this.state = 410;
            _la = this._input.LA(1);
            if(_la===potigolParser.T__3 || _la===potigolParser.T__7 || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (potigolParser.T__37 - 38)) | (1 << (potigolParser.ID - 38)) | (1 << (potigolParser.INT - 38)) | (1 << (potigolParser.FLOAT - 38)) | (1 << (potigolParser.STRING - 38)) | (1 << (potigolParser.BS - 38)) | (1 << (potigolParser.CHAR - 38)) | (1 << (potigolParser.BOOLEANO - 38)))) !== 0)) {
                this.state = 409;
                this.padrao(0);
            }

            this.state = 412;
            this.match(potigolParser.T__4);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 438;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 436;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Padrao_consContext(this, new PadraoContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_padrao);
                    this.state = 415;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 418; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 416;
                    		this.match(potigolParser.T__18);
                    		this.state = 417;
                    		this.padrao(0);
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 420; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    break;

                case 2:
                    localctx = new Padrao_ouContext(this, new PadraoContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_padrao);
                    this.state = 422;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 425; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 423;
                    		this.match(potigolParser.T__47);
                    		this.state = 424;
                    		this.padrao(0);
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 427; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,36, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    break;

                case 3:
                    localctx = new Padrao_virgulaContext(this, new PadraoContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, potigolParser.RULE_padrao);
                    this.state = 429;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 432; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 430;
                    		this.match(potigolParser.T__14);
                    		this.state = 431;
                    		this.padrao(0);
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 434; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    break;

                } 
            }
            this.state = 440;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function RepeticaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_repeticao;
    return this;
}

RepeticaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeticaoContext.prototype.constructor = RepeticaoContext;

RepeticaoContext.prototype.para_faca = function() {
    return this.getTypedRuleContext(Para_facaContext,0);
};

RepeticaoContext.prototype.para_gere = function() {
    return this.getTypedRuleContext(Para_gereContext,0);
};

RepeticaoContext.prototype.enquanto = function() {
    return this.getTypedRuleContext(EnquantoContext,0);
};

RepeticaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterRepeticao(this);
	}
};

RepeticaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitRepeticao(this);
	}
};




potigolParser.RepeticaoContext = RepeticaoContext;

potigolParser.prototype.repeticao = function() {

    var localctx = new RepeticaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, potigolParser.RULE_repeticao);
    try {
        this.state = 444;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 441;
            this.para_faca();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 442;
            this.para_gere();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 443;
            this.enquanto();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Para_facaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_para_faca;
    return this;
}

Para_facaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Para_facaContext.prototype.constructor = Para_facaContext;

Para_facaContext.prototype.faixas = function() {
    return this.getTypedRuleContext(FaixasContext,0);
};

Para_facaContext.prototype.bloco = function() {
    return this.getTypedRuleContext(BlocoContext,0);
};

Para_facaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Para_facaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPara_faca(this);
	}
};

Para_facaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPara_faca(this);
	}
};




potigolParser.Para_facaContext = Para_facaContext;

potigolParser.prototype.para_faca = function() {

    var localctx = new Para_facaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, potigolParser.RULE_para_faca);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(potigolParser.T__48);
        this.state = 447;
        this.faixas();
        this.state = 450;
        _la = this._input.LA(1);
        if(_la===potigolParser.T__38) {
            this.state = 448;
            this.match(potigolParser.T__38);
            this.state = 449;
            this.expr(0);
        }

        this.state = 452;
        this.bloco();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Para_gereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_para_gere;
    return this;
}

Para_gereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Para_gereContext.prototype.constructor = Para_gereContext;

Para_gereContext.prototype.faixas = function() {
    return this.getTypedRuleContext(FaixasContext,0);
};

Para_gereContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

Para_gereContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Para_gereContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterPara_gere(this);
	}
};

Para_gereContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitPara_gere(this);
	}
};




potigolParser.Para_gereContext = Para_gereContext;

potigolParser.prototype.para_gere = function() {

    var localctx = new Para_gereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, potigolParser.RULE_para_gere);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        this.match(potigolParser.T__48);
        this.state = 455;
        this.faixas();
        this.state = 458;
        _la = this._input.LA(1);
        if(_la===potigolParser.T__38) {
            this.state = 456;
            this.match(potigolParser.T__38);
            this.state = 457;
            this.expr(0);
        }

        this.state = 460;
        this.match(potigolParser.T__49);
        this.state = 461;
        this.exprlist();
        this.state = 462;
        this.match(potigolParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnquantoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_enquanto;
    return this;
}

EnquantoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnquantoContext.prototype.constructor = EnquantoContext;

EnquantoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EnquantoContext.prototype.bloco = function() {
    return this.getTypedRuleContext(BlocoContext,0);
};

EnquantoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterEnquanto(this);
	}
};

EnquantoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitEnquanto(this);
	}
};




potigolParser.EnquantoContext = EnquantoContext;

potigolParser.prototype.enquanto = function() {

    var localctx = new EnquantoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, potigolParser.RULE_enquanto);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.match(potigolParser.T__50);
        this.state = 465;
        this.expr(0);
        this.state = 466;
        this.bloco();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FaixaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_faixa;
    return this;
}

FaixaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FaixaContext.prototype.constructor = FaixaContext;

FaixaContext.prototype.ID = function() {
    return this.getToken(potigolParser.ID, 0);
};

FaixaContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

FaixaContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterFaixa(this);
	}
};

FaixaContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitFaixa(this);
	}
};




potigolParser.FaixaContext = FaixaContext;

potigolParser.prototype.faixa = function() {

    var localctx = new FaixaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, potigolParser.RULE_faixa);
    var _la = 0; // Token type
    try {
        this.state = 480;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 468;
            this.match(potigolParser.ID);
            this.state = 469;
            this.match(potigolParser.T__51);
            this.state = 470;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 471;
            this.match(potigolParser.ID);
            this.state = 472;
            this.match(potigolParser.T__52);
            this.state = 473;
            this.expr(0);
            this.state = 474;
            _la = this._input.LA(1);
            if(!(_la===potigolParser.T__53 || _la===potigolParser.T__54)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 475;
            this.expr(0);
            this.state = 478;
            _la = this._input.LA(1);
            if(_la===potigolParser.T__55) {
                this.state = 476;
                this.match(potigolParser.T__55);
                this.state = 477;
                this.expr(0);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FaixasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_faixas;
    return this;
}

FaixasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FaixasContext.prototype.constructor = FaixasContext;

FaixasContext.prototype.faixa = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FaixaContext);
    } else {
        return this.getTypedRuleContext(FaixaContext,i);
    }
};

FaixasContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterFaixas(this);
	}
};

FaixasContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitFaixas(this);
	}
};




potigolParser.FaixasContext = FaixasContext;

potigolParser.prototype.faixas = function() {

    var localctx = new FaixasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, potigolParser.RULE_faixas);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.faixa();
        this.state = 487;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===potigolParser.T__14) {
            this.state = 483;
            this.match(potigolParser.T__14);
            this.state = 484;
            this.faixa();
            this.state = 489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlocoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_bloco;
    return this;
}

BlocoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlocoContext.prototype.constructor = BlocoContext;

BlocoContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

BlocoContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterBloco(this);
	}
};

BlocoContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitBloco(this);
	}
};




potigolParser.BlocoContext = BlocoContext;

potigolParser.prototype.bloco = function() {

    var localctx = new BlocoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, potigolParser.RULE_bloco);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 490;
        _la = this._input.LA(1);
        if(!(_la===potigolParser.T__56 || _la===potigolParser.T__57)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 491;
        this.exprlist();
        this.state = 492;
        this.match(potigolParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_expr1;
    return this;
}

Expr1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr1Context.prototype.constructor = Expr1Context;

Expr1Context.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Expr1Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterExpr1(this);
	}
};

Expr1Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitExpr1(this);
	}
};




potigolParser.Expr1Context = Expr1Context;

potigolParser.prototype.expr1 = function() {

    var localctx = new Expr1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 62, potigolParser.RULE_expr1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.expr(0);
        this.state = 499;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===potigolParser.T__14) {
            this.state = 495;
            this.match(potigolParser.T__14);
            this.state = 496;
            this.expr(0);
            this.state = 501;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_expr2;
    return this;
}

Expr2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr2Context.prototype.constructor = Expr2Context;

Expr2Context.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Expr2Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterExpr2(this);
	}
};

Expr2Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitExpr2(this);
	}
};




potigolParser.Expr2Context = Expr2Context;

potigolParser.prototype.expr2 = function() {

    var localctx = new Expr2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 64, potigolParser.RULE_expr2);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.expr(0);
        this.state = 505; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 503;
        		this.match(potigolParser.T__14);
        		this.state = 504;
        		this.expr(0);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 507; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,47, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Id1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_id1;
    return this;
}

Id1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id1Context.prototype.constructor = Id1Context;

Id1Context.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(potigolParser.ID);
    } else {
        return this.getToken(potigolParser.ID, i);
    }
};


Id1Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterId1(this);
	}
};

Id1Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitId1(this);
	}
};




potigolParser.Id1Context = Id1Context;

potigolParser.prototype.id1 = function() {

    var localctx = new Id1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 66, potigolParser.RULE_id1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        this.match(potigolParser.ID);
        this.state = 514;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===potigolParser.T__14) {
            this.state = 510;
            this.match(potigolParser.T__14);
            this.state = 511;
            this.match(potigolParser.ID);
            this.state = 516;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Id2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_id2;
    return this;
}

Id2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id2Context.prototype.constructor = Id2Context;

Id2Context.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(potigolParser.ID);
    } else {
        return this.getToken(potigolParser.ID, i);
    }
};


Id2Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterId2(this);
	}
};

Id2Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitId2(this);
	}
};




potigolParser.Id2Context = Id2Context;

potigolParser.prototype.id2 = function() {

    var localctx = new Id2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 68, potigolParser.RULE_id2);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 517;
        this.match(potigolParser.ID);
        this.state = 520; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 518;
            this.match(potigolParser.T__14);
            this.state = 519;
            this.match(potigolParser.ID);
            this.state = 522; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===potigolParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_qualid;
    return this;
}

QualidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualidContext.prototype.constructor = QualidContext;

QualidContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(potigolParser.ID);
    } else {
        return this.getToken(potigolParser.ID, i);
    }
};


QualidContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterQualid(this);
	}
};

QualidContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitQualid(this);
	}
};




potigolParser.QualidContext = QualidContext;

potigolParser.prototype.qualid = function() {

    var localctx = new QualidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, potigolParser.RULE_qualid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 524;
                this.match(potigolParser.ID);
                this.state = 525;
                this.match(potigolParser.T__16); 
            }
            this.state = 530;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
        }

        this.state = 531;
        this.match(potigolParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Qualid1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_qualid1;
    return this;
}

Qualid1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Qualid1Context.prototype.constructor = Qualid1Context;

Qualid1Context.prototype.qualid = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualidContext);
    } else {
        return this.getTypedRuleContext(QualidContext,i);
    }
};

Qualid1Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterQualid1(this);
	}
};

Qualid1Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitQualid1(this);
	}
};




potigolParser.Qualid1Context = Qualid1Context;

potigolParser.prototype.qualid1 = function() {

    var localctx = new Qualid1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 72, potigolParser.RULE_qualid1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 533;
        this.qualid();
        this.state = 538;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===potigolParser.T__14) {
            this.state = 534;
            this.match(potigolParser.T__14);
            this.state = 535;
            this.qualid();
            this.state = 540;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Qualid2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_qualid2;
    return this;
}

Qualid2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Qualid2Context.prototype.constructor = Qualid2Context;

Qualid2Context.prototype.qualid = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualidContext);
    } else {
        return this.getTypedRuleContext(QualidContext,i);
    }
};

Qualid2Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterQualid2(this);
	}
};

Qualid2Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitQualid2(this);
	}
};




potigolParser.Qualid2Context = Qualid2Context;

potigolParser.prototype.qualid2 = function() {

    var localctx = new Qualid2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 74, potigolParser.RULE_qualid2);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        this.qualid();
        this.state = 544; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 542;
            this.match(potigolParser.T__14);
            this.state = 543;
            this.qualid();
            this.state = 546; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===potigolParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tipo2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_tipo2;
    return this;
}

Tipo2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tipo2Context.prototype.constructor = Tipo2Context;

Tipo2Context.prototype.tipo = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TipoContext);
    } else {
        return this.getTypedRuleContext(TipoContext,i);
    }
};

Tipo2Context.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterTipo2(this);
	}
};

Tipo2Context.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitTipo2(this);
	}
};




potigolParser.Tipo2Context = Tipo2Context;

potigolParser.prototype.tipo2 = function() {

    var localctx = new Tipo2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 76, potigolParser.RULE_tipo2);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
        this.tipo(0);
        this.state = 551; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 549;
            this.match(potigolParser.T__14);
            this.state = 550;
            this.tipo(0);
            this.state = 553; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===potigolParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = potigolParser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.inst = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstContext);
    } else {
        return this.getTypedRuleContext(InstContext,i);
    }
};

ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof potigolListener ) {
        listener.exitExprlist(this);
	}
};




potigolParser.ExprlistContext = ExprlistContext;

potigolParser.prototype.exprlist = function() {

    var localctx = new ExprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, potigolParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 558;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << potigolParser.T__0) | (1 << potigolParser.T__1) | (1 << potigolParser.T__3) | (1 << potigolParser.T__6) | (1 << potigolParser.T__7) | (1 << potigolParser.T__11) | (1 << potigolParser.T__12) | (1 << potigolParser.T__19) | (1 << potigolParser.T__20))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (potigolParser.T__32 - 33)) | (1 << (potigolParser.T__33 - 33)) | (1 << (potigolParser.T__36 - 33)) | (1 << (potigolParser.T__37 - 33)) | (1 << (potigolParser.T__38 - 33)) | (1 << (potigolParser.T__45 - 33)) | (1 << (potigolParser.T__48 - 33)) | (1 << (potigolParser.T__50 - 33)) | (1 << (potigolParser.T__56 - 33)) | (1 << (potigolParser.T__57 - 33)) | (1 << (potigolParser.ID - 33)) | (1 << (potigolParser.INT - 33)) | (1 << (potigolParser.FLOAT - 33)) | (1 << (potigolParser.STRING - 33)) | (1 << (potigolParser.BS - 33)))) !== 0) || _la===potigolParser.CHAR || _la===potigolParser.BOOLEANO) {
            this.state = 555;
            this.inst();
            this.state = 560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


potigolParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 13:
			return this.tipo_sempred(localctx, predIndex);
	case 14:
			return this.expr_sempred(localctx, predIndex);
	case 23:
			return this.padrao_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

potigolParser.prototype.tipo_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

potigolParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 18);
		case 2:
			return this.precpred(this._ctx, 17);
		case 3:
			return this.precpred(this._ctx, 15);
		case 4:
			return this.precpred(this._ctx, 14);
		case 5:
			return this.precpred(this._ctx, 13);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 9);
		case 9:
			return this.precpred(this._ctx, 21);
		case 10:
			return this.precpred(this._ctx, 20);
		case 11:
			return this.precpred(this._ctx, 19);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

potigolParser.prototype.padrao_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 12:
			return this.precpred(this._ctx, 5);
		case 13:
			return this.precpred(this._ctx, 2);
		case 14:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.potigolParser = potigolParser;
