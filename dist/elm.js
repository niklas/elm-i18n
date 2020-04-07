(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$exportResult = _Platform_outgoingPort(
	'exportResult',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $author$project$Localized$ElementFormat = function (a) {
	return {$: 'ElementFormat', a: a};
};
var $author$project$Localized$Format = F3(
	function (meta, placeholders, components) {
		return {components: components, meta: meta, placeholders: placeholders};
	});
var $author$project$Localized$Meta = F2(
	function (key, comment) {
		return {comment: comment, key: key};
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Localized$Parser$Internal$regex = function (string) {
	return A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString(string));
};
var $author$project$Localized$Parser$Internal$regexStringComment = function (key) {
	return $author$project$Localized$Parser$Internal$regex('\\{-\\| ([^\\}]*)\\n-\\}\\n' + (key + '\\s+:'));
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Utils$Regex$submatchAt = F2(
	function (index, match) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$core$Maybe$Nothing,
			A2(
				$elm$core$Maybe$withDefault,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.submatches;
						},
						$elm_community$list_extra$List$Extra$getAt(index)),
					match)));
	});
var $author$project$Localized$Parser$Internal$findComment = F2(
	function (source, key) {
		var match = $elm$core$List$head(
			A3(
				$elm$regex$Regex$findAtMost,
				1,
				$author$project$Localized$Parser$Internal$regexStringComment(key),
				source));
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($author$project$Utils$Regex$submatchAt, 0, match));
	});
var $author$project$Localized$FormatComponentPlaceholder = function (a) {
	return {$: 'FormatComponentPlaceholder', a: a};
};
var $author$project$Localized$FormatComponentStatic = function (a) {
	return {$: 'FormatComponentStatic', a: a};
};
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $elm$core$String$startsWith = _String_startsWith;
var $author$project$Localized$Parser$Internal$formatComponentFromString = function (value) {
	return (A2($elm$core$String$endsWith, '\"', value) && A2($elm$core$String$startsWith, '\"', value)) ? $author$project$Localized$FormatComponentStatic(
		A2(
			$elm$core$String$dropRight,
			1,
			A2($elm$core$String$dropLeft, 1, value))) : $author$project$Localized$FormatComponentPlaceholder(value);
};
var $author$project$Localized$Parser$Internal$regexFormats = function (key) {
	return $author$project$Localized$Parser$Internal$regex(key + ' ([^=\\n]*)=[\\s\\n]((?:.+\\r?\\n)+(?=(\\r?\\n)?))');
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$String$trim = _String_trim;
var $author$project$Localized$Parser$Internal$trimmedStrings = function (stringList) {
	return A2(
		$elm$core$List$filter,
		A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not),
		A2($elm$core$List$map, $elm$core$String$trim, stringList));
};
var $author$project$Localized$Parser$Internal$findFormatElementForKey = F2(
	function (source, key) {
		var ex = $author$project$Localized$Parser$Internal$regexFormats(key);
		var match = $elm$core$List$head(
			A3($elm$regex$Regex$findAtMost, 1, ex, source));
		var placeholders = function () {
			var _v2 = A2($author$project$Utils$Regex$submatchAt, 0, match);
			if (_v2.$ === 'Just') {
				var placeholderString = _v2.a;
				return $author$project$Localized$Parser$Internal$trimmedStrings(
					A2($elm$core$String$split, ' ', placeholderString));
			} else {
				return _List_Nil;
			}
		}();
		var content = function () {
			var _v1 = A2($author$project$Utils$Regex$submatchAt, 1, match);
			if (_v1.$ === 'Just') {
				var placeholderString = _v1.a;
				return A2(
					$elm$core$List$map,
					$author$project$Localized$Parser$Internal$formatComponentFromString,
					$author$project$Localized$Parser$Internal$trimmedStrings(
						A2($elm$core$String$split, '++', placeholderString)));
			} else {
				return _List_Nil;
			}
		}();
		if (!placeholders.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var placeholderList = placeholders;
			return $elm$core$Maybe$Just(
				$author$project$Localized$ElementFormat(
					A3(
						$author$project$Localized$Format,
						A2(
							$author$project$Localized$Meta,
							key,
							A2($author$project$Localized$Parser$Internal$findComment, source, key)),
						placeholderList,
						content)));
		}
	});
var $author$project$Localized$ElementStatic = function (a) {
	return {$: 'ElementStatic', a: a};
};
var $author$project$Localized$Static = F2(
	function (meta, value) {
		return {meta: meta, value: value};
	});
var $author$project$Localized$Parser$Internal$regexSimpleStringValue = function (key) {
	return $author$project$Localized$Parser$Internal$regex(key + '[\\s|\\n]*=[\\s|\\n]*(\".*\")');
};
var $author$project$Localized$Parser$Internal$findStaticElementForKey = F2(
	function (source, key) {
		var maybeValue = A2(
			$elm$core$Maybe$map,
			A2($elm$core$String$slice, 1, -1),
			A2(
				$author$project$Utils$Regex$submatchAt,
				0,
				$elm$core$List$head(
					A3(
						$elm$regex$Regex$findAtMost,
						1,
						$author$project$Localized$Parser$Internal$regexSimpleStringValue(key),
						source))));
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return $elm$core$Maybe$Just(
				$author$project$Localized$ElementStatic(
					A2(
						$author$project$Localized$Static,
						A2(
							$author$project$Localized$Meta,
							key,
							A2($author$project$Localized$Parser$Internal$findComment, source, key)),
						value)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $author$project$Localized$Parser$Internal$regexStringDeclarations = $author$project$Localized$Parser$Internal$regex('([A-Za-z][A-Za-z0-9]*)\\s+:\\s+(.*)String');
var $author$project$Localized$Parser$Internal$stringDeclarations = function (source) {
	return A2(
		$elm$core$List$filterMap,
		function (match) {
			var _v0 = match.submatches;
			_v0$2:
			while (true) {
				if ((_v0.b && (_v0.a.$ === 'Just')) && _v0.b.b) {
					if (_v0.b.a.$ === 'Nothing') {
						if (!_v0.b.b.b) {
							var key = _v0.a.a;
							var _v1 = _v0.b;
							var _v2 = _v1.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(key, _List_Nil));
						} else {
							break _v0$2;
						}
					} else {
						if (!_v0.b.b.b) {
							var key = _v0.a.a;
							var _v3 = _v0.b;
							var parametersString = _v3.a.a;
							var parameters = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not),
								A2($elm$core$String$split, ' -> ', parametersString));
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(key, parameters));
						} else {
							break _v0$2;
						}
					}
				} else {
					break _v0$2;
				}
			}
			return $elm$core$Maybe$Nothing;
		},
		A2($elm$regex$Regex$find, $author$project$Localized$Parser$Internal$regexStringDeclarations, source));
};
var $author$project$Localized$Parser$parse = function (source) {
	var stringKeysAndParameters = $author$project$Localized$Parser$Internal$stringDeclarations(source);
	return A2(
		$elm$core$List$filterMap,
		function (_v0) {
			var key = _v0.a;
			var _v1 = A2($author$project$Localized$Parser$Internal$findStaticElementForKey, source, key);
			if (_v1.$ === 'Just') {
				var simple = _v1.a;
				return $elm$core$Maybe$Just(simple);
			} else {
				return A2($author$project$Localized$Parser$Internal$findFormatElementForKey, source, key);
			}
		},
		stringKeysAndParameters);
};
var $author$project$Localized$Elm$parse = $author$project$Localized$Parser$parse;
var $elm_community$string_extra$String$Extra$regexFromString = A2(
	$elm$core$Basics$composeR,
	$elm$regex$Regex$fromString,
	$elm$core$Maybe$withDefault($elm$regex$Regex$never));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$String$toUpper = _String_toUpper;
var $elm_community$string_extra$String$Extra$camelize = function (string) {
	return A3(
		$elm$regex$Regex$replace,
		$elm_community$string_extra$String$Extra$regexFromString('[-_\\s]+(.)?'),
		function (_v0) {
			var submatches = _v0.submatches;
			if (submatches.b && (submatches.a.$ === 'Just')) {
				var match = submatches.a.a;
				return $elm$core$String$toUpper(match);
			} else {
				return '';
			}
		},
		$elm$core$String$trim(string));
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$core$String$cons = _String_cons;
var $elm_community$string_extra$String$Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var head = _v0.a;
					var tail = _v0.b;
					return A2(
						$elm$core$String$cons,
						mutator(head),
						tail);
				},
				$elm$core$String$uncons(word)));
	});
var $elm$core$Char$toUpper = _Char_toUpper;
var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
};
var $elm_community$string_extra$String$Extra$classify = function (string) {
	return $elm_community$string_extra$String$Extra$toSentenceCase(
		A3(
			$elm$core$String$replace,
			' ',
			'',
			$elm_community$string_extra$String$Extra$camelize(
				A3(
					$elm$regex$Regex$replace,
					$elm_community$string_extra$String$Extra$regexFromString('[\\W_]'),
					$elm$core$Basics$always(' '),
					string))));
};
var $author$project$Localized$Filename$extensionEx = '\\w+';
var $elm$core$Debug$log = _Debug_log;
var $author$project$Utils$Regex$regex = function (string) {
	var _v0 = $elm$regex$Regex$fromString(string);
	if (_v0.$ === 'Just') {
		var compiled = _v0.a;
		return compiled;
	} else {
		var _v1 = A2($elm$core$Debug$log, 'Invalid Regex:', string);
		return $elm$regex$Regex$never;
	}
};
var $author$project$Utils$Regex$findFirst = F2(
	function (pattern, string) {
		return $elm$core$List$head(
			A3(
				$elm$regex$Regex$findAtMost,
				1,
				$author$project$Utils$Regex$regex(pattern),
				string));
	});
var $author$project$Localized$Filename$normalizeLanguageCode = $elm_community$string_extra$String$Extra$classify;
var $author$project$Localized$Filename$toModuleNameAndLangPostfix = function (org) {
	var ex = '^(.+)/([^/]+)\\.' + ($author$project$Localized$Filename$extensionEx + '$');
	var _v0 = A2($author$project$Utils$Regex$findFirst, ex, org);
	if (_v0.$ === 'Nothing') {
		return _Utils_Tuple2(org, '');
	} else {
		var match = _v0.a;
		var _v1 = match.submatches;
		if ((((_v1.b && (_v1.a.$ === 'Just')) && _v1.b.b) && (_v1.b.a.$ === 'Just')) && (!_v1.b.b.b)) {
			var slashyPath = _v1.a.a;
			var _v2 = _v1.b;
			var langCode = _v2.a.a;
			return _Utils_Tuple2(
				A2(
					$elm$core$String$join,
					'.',
					A2(
						$elm$core$List$map,
						$elm_community$string_extra$String$Extra$classify,
						A2($elm$core$String$split, '/', slashyPath))),
				$author$project$Localized$Filename$normalizeLanguageCode(langCode));
		} else {
			return _Utils_Tuple2(org, '');
		}
	}
};
var $author$project$Main$parseElm = function (_v0) {
	var fileName = _v0.a;
	var content = _v0.b;
	var _v1 = $author$project$Localized$Filename$toModuleNameAndLangPostfix(fileName);
	var moduleName = _v1.a;
	var lang = _v1.b;
	return {
		elements: $author$project$Localized$Elm$parse(content),
		lang: lang,
		name: moduleName
	};
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Localized$Filename$toExtWithLangPrefix = F2(
	function (ext, _v0) {
		var name = _v0.name;
		var lang = _v0.lang;
		return $elm$core$String$toLower(lang) + ('/' + ($elm$core$String$toLower(name) + ('.' + ext)));
	});
var $author$project$Localized$Filename$toCSV = $author$project$Localized$Filename$toExtWithLangPrefix('csv');
var $author$project$Localized$Filename$toPO = $author$project$Localized$Filename$toExtWithLangPrefix('po');
var $elm$core$String$append = _String_append;
var $author$project$CSV$Export$escape = function (str) {
	return A3($elm$core$String$replace, '\n', '\\n', str);
};
var $pilatch$flip$Flip$flip = F3(
	function (_function, argB, argA) {
		return A2(_function, argA, argB);
	});
var $author$project$CSV$Template$headers = 'Module,Key,Comment,Supported Placeholders,Translation';
var $author$project$CSV$Template$placeholder = function (ph) {
	return '{{' + (ph + '}}');
};
var $author$project$CSV$Export$formatString = function (components) {
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (component) {
				if (component.$ === 'FormatComponentStatic') {
					var value = component.a;
					return value;
				} else {
					var placeholder = component.a;
					return $author$project$CSV$Template$placeholder(placeholder);
				}
			},
			components));
};
var $author$project$CSV$Export$line = F2(
	function (moduleName, element) {
		if (element.$ === 'ElementStatic') {
			var _static = element.a;
			return _List_fromArray(
				[moduleName, _static.meta.key, _static.meta.comment, '', _static.value]);
		} else {
			var format = element.a;
			return _List_fromArray(
				[
					moduleName,
					format.meta.key,
					format.meta.comment,
					A2($elm$core$String$join, ' ', format.placeholders),
					$author$project$CSV$Export$formatString(format.components)
				]);
		}
	});
var $author$project$CSV$Export$generate = function (_v0) {
	var elements = _v0.elements;
	var name = _v0.name;
	return A3(
		$pilatch$flip$Flip$flip,
		$elm$core$String$append,
		'\n',
		A2(
			$elm$core$String$append,
			$author$project$CSV$Template$headers + '\n',
			A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					function (columns) {
						return A2(
							$elm$core$String$join,
							',',
							A2(
								$elm$core$List$map,
								function (column) {
									return '\"' + ($author$project$CSV$Export$escape(column) + '\"');
								},
								columns));
					},
					A2(
						$elm$core$List$map,
						$author$project$CSV$Export$line(name),
						elements)))));
};
var $author$project$Localized$CSV$write = $author$project$CSV$Export$generate;
var $author$project$PO$Export$forceUTF8 = 'msgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"\n"X-Poedit-SourceCharset: UTF-8\\n"\n';
var $author$project$PO$Export$commentLine = function (comment) {
	return $elm$core$String$trim(
		A2(
			$elm$core$String$append,
			'#. ',
			A2(
				$elm$core$String$join,
				'\n#. ',
				A2($elm$core$String$split, '\n', comment))));
};
var $author$project$PO$Template$placeholder = function (ph) {
	return '%(' + (ph + ')s');
};
var $elm_community$string_extra$String$Extra$surround = F2(
	function (wrapper, string) {
		return _Utils_ap(
			wrapper,
			_Utils_ap(string, wrapper));
	});
var $elm_community$string_extra$String$Extra$quote = function (string) {
	return A2($elm_community$string_extra$String$Extra$surround, '\"', string);
};
var $author$project$PO$Export$formatElement = function (list) {
	return $elm_community$string_extra$String$Extra$quote(
		A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (element) {
					if (element.$ === 'FormatComponentPlaceholder') {
						var placeholder = element.a;
						return $author$project$PO$Template$placeholder(placeholder);
					} else {
						var string = element.a;
						return string;
					}
				},
				list)));
};
var $author$project$PO$Export$identifier = F2(
	function (modulename, key) {
		return 'msgid \"' + (modulename + ('.' + (key + '\"')));
	});
var $author$project$PO$Template$placeholderCommentPrefix = 'i18n: placeholders: ';
var $author$project$PO$Export$staticElement = function (value) {
	return 'msgstr ' + $elm_community$string_extra$String$Extra$quote(value);
};
var $author$project$PO$Export$line = F2(
	function (moduleName, element) {
		if (element.$ === 'ElementStatic') {
			var _static = element.a;
			return $author$project$PO$Export$commentLine(_static.meta.comment) + ('\n' + (A2($author$project$PO$Export$identifier, moduleName, _static.meta.key) + ('\n' + $author$project$PO$Export$staticElement(_static.value))));
		} else {
			var format = element.a;
			return $author$project$PO$Export$commentLine(format.meta.comment) + ('\n' + ($author$project$PO$Export$commentLine(
				_Utils_ap(
					$author$project$PO$Template$placeholderCommentPrefix,
					A2($elm$core$String$join, ' ', format.placeholders))) + ('\n' + (A2($author$project$PO$Export$identifier, moduleName, format.meta.key) + ('\n' + ('msgstr ' + $author$project$PO$Export$formatElement(format.components)))))));
		}
	});
var $author$project$PO$Export$generate = function (_v0) {
	var elements = _v0.elements;
	var name = _v0.name;
	return A2(
		$elm$core$String$append,
		$author$project$PO$Export$forceUTF8,
		A3(
			$pilatch$flip$Flip$flip,
			$elm$core$String$append,
			'\n',
			A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					$author$project$PO$Export$line(name),
					elements))));
};
var $author$project$Localized$PO$write = $author$project$PO$Export$generate;
var $author$project$Main$write = F2(
	function (format, modul) {
		var fileName = function () {
			if (format.$ === 'CSV') {
				return $author$project$Localized$Filename$toCSV(modul);
			} else {
				return $author$project$Localized$Filename$toPO(modul);
			}
		}();
		var content = function () {
			if (format.$ === 'CSV') {
				return $author$project$Localized$CSV$write(modul);
			} else {
				return $author$project$Localized$PO$write(modul);
			}
		}();
		return _Utils_Tuple2(fileName, content);
	});
var $author$project$Main$operationExport = F2(
	function (sources, format) {
		return $elm$core$Platform$Cmd$batch(
			A2(
				$elm$core$List$map,
				$author$project$Main$exportResult,
				A2(
					$elm$core$List$map,
					$author$project$Main$write(format),
					A2($elm$core$List$map, $author$project$Main$parseElm, sources))));
	});
var $author$project$Main$Export = function (a) {
	return {$: 'Export', a: a};
};
var $author$project$Main$Import = function (a) {
	return {$: 'Import', a: a};
};
var $author$project$Localized$CSV = {$: 'CSV'};
var $author$project$Localized$PO = {$: 'PO'};
var $author$project$Main$formatFromString = function (maybeFormat) {
	var formatString = A2($elm$core$Maybe$map, $elm$core$String$toUpper, maybeFormat);
	return _Utils_eq(
		formatString,
		$elm$core$Maybe$Just('PO')) ? $author$project$Localized$PO : $author$project$Localized$CSV;
};
var $author$project$Main$operationFromString = F2(
	function (operation, formatString) {
		return function () {
			switch (operation) {
				case 'import':
					return $author$project$Main$Import;
				case 'export':
					return $author$project$Main$Export;
				default:
					return $author$project$Main$Import;
			}
		}()(
			$author$project$Main$formatFromString(formatString));
	});
var $author$project$Localized$Module = F3(
	function (name, elements, lang) {
		return {elements: elements, lang: lang, name: name};
	});
var $author$project$Localized$buildModule = F2(
	function (name, elements) {
		return A3($author$project$Localized$Module, name, elements, '');
	});
var $author$project$Localized$Switch$flatten2D = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Basics$append, _List_Nil, list);
};
var $author$project$Localized$Element$getKey = function (element) {
	if (element.$ === 'ElementFormat') {
		var e = element.a;
		return e.meta.key;
	} else {
		var e = element.a;
		return e.meta.key;
	}
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Localized$Switch$indexBy = F2(
	function (keymaker, elements) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (e, d) {
					return A3(
						$elm$core$Dict$update,
						keymaker(e),
						function (v) {
							if (v.$ === 'Nothing') {
								return $elm$core$Maybe$Just(
									_List_fromArray(
										[e]));
							} else {
								var l = v.a;
								return $elm$core$Maybe$Just(
									A2($elm$core$List$cons, e, l));
							}
						},
						d);
				}),
			$elm$core$Dict$empty,
			elements);
	});
var $author$project$Localized$Writer$Module$modulePrefix = 'Translation';
var $author$project$Localized$namedModule = function (name) {
	return A2($author$project$Localized$buildModule, name, _List_Nil);
};
var $author$project$Localized$Switch$mainModule = function (languages) {
	var name = 'Translation.elm';
	var mod = $author$project$Localized$namedModule(name);
	return _Utils_Tuple2(
		name,
		'module ' + ($author$project$Localized$Writer$Module$modulePrefix + (' exposing (Language(..))\n\n' + ('type Language = ' + (A2($elm$core$String$join, ' | ', languages) + '\n')))));
};
var $author$project$Localized$elementMeta = F2(
	function (accessor, element) {
		if (element.$ === 'ElementStatic') {
			var e = element.a;
			return accessor(e.meta);
		} else {
			var e = element.a;
			return accessor(e.meta);
		}
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Localized$Writer$Element$placeholders = function (element) {
	if (element.$ === 'ElementStatic') {
		return 'String';
	} else {
		var attr = element.a;
		var num = $elm$core$List$length(attr.placeholders);
		return A2(
			$elm$core$String$join,
			' -> ',
			A2($elm$core$List$repeat, num + 1, 'String'));
	}
};
var $author$project$Localized$Writer$Element$tab = '    ';
var $author$project$Localized$Switch$elementSource = F3(
	function (moduleName, mods, element) {
		var placeholders = $author$project$Localized$Writer$Element$placeholders(element);
		var name = A2(
			$author$project$Localized$elementMeta,
			function ($) {
				return $.key;
			},
			element);
		var languages = A2(
			$elm$core$List$map,
			function ($) {
				return $.lang;
			},
			mods);
		return name + (' : Language -> ' + (placeholders + ('\n' + (name + (' language =\n' + (($author$project$Localized$Writer$Element$tab + 'case language of\n') + A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (l) {
					return _Utils_ap($author$project$Localized$Writer$Element$tab, $author$project$Localized$Writer$Element$tab) + (l + (' -> ' + ($author$project$Localized$Writer$Module$modulePrefix + ('.' + (moduleName + ('.' + (l + ('.' + name))))))));
				},
				languages))))))));
	});
var $author$project$Localized$Writer$Module$elements = F2(
	function (functionImplementation, mod) {
		return A3(
			$pilatch$flip$Flip$flip,
			$elm$core$String$append,
			'\n',
			$elm$core$String$trim(
				A2(
					$elm$core$String$join,
					'\n\n\n',
					A2($elm$core$List$map, functionImplementation, mod.elements))));
	});
var $author$project$Localized$Writer$Module$fullModuleName = function (_v0) {
	var name = _v0.name;
	var lang = _v0.lang;
	return A2(
		$elm$core$String$join,
		'.',
		(lang === '') ? _List_fromArray(
			[$author$project$Localized$Writer$Module$modulePrefix, name]) : _List_fromArray(
			[$author$project$Localized$Writer$Module$modulePrefix, name, lang]));
};
var $author$project$Localized$Writer$Module$head = function (mod) {
	return 'module ' + ($author$project$Localized$Writer$Module$fullModuleName(mod) + (' exposing (' + (A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$map,
			$author$project$Localized$elementMeta(
				function ($) {
					return $.key;
				}),
			mod.elements)) + ')\n\n{-| -}\n\n')));
};
var $author$project$Localized$Writer$Module$importModule = function (mod) {
	return 'import ' + ($author$project$Localized$Writer$Module$fullModuleName(mod) + '\n');
};
var $author$project$Localized$Writer$Module$importModuleExposingAll = function (_v0) {
	var name = _v0.name;
	return 'import ' + (name + ' exposing (..)\n');
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $author$project$Localized$Filename$toElm = function (_v0) {
	var name = _v0.name;
	return A2(
		$elm$core$String$join,
		'/',
		A2(
			$elm$core$List$append,
			_List_fromArray(
				['Translation']),
			A2($elm$core$String$split, '.', name))) + '.elm';
};
var $author$project$Localized$Switch$switchSource = F2(
	function (mod, mods) {
		var name = mod.name;
		return _Utils_Tuple2(
			$author$project$Localized$Filename$toElm(mod),
			$author$project$Localized$Writer$Module$head(mod) + ($author$project$Localized$Writer$Module$importModuleExposingAll(
				$author$project$Localized$namedModule('Translation')) + (A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $author$project$Localized$Writer$Module$importModule, mods)) + ('\n\n' + A2(
				$author$project$Localized$Writer$Module$elements,
				A2($author$project$Localized$Switch$elementSource, name, mods),
				mod)))));
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$uniqueBy = F2(
	function (f, list) {
		return A4($elm_community$list_extra$List$Extra$uniqueHelp, f, $elm$core$Set$empty, list, _List_Nil);
	});
var $author$project$Localized$Switch$generate = F2(
	function (languages, modules) {
		return A2(
			$elm$core$List$cons,
			$author$project$Localized$Switch$mainModule(languages),
			A2(
				$elm$core$List$map,
				function (_v0) {
					var moduleName = _v0.a;
					var mods = _v0.b;
					var elements = A2(
						$elm_community$list_extra$List$Extra$uniqueBy,
						$author$project$Localized$Element$getKey,
						$author$project$Localized$Switch$flatten2D(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.elements;
								},
								mods)));
					var switchModule = A2($author$project$Localized$buildModule, moduleName, elements);
					return A2($author$project$Localized$Switch$switchSource, switchModule, mods);
				},
				$elm$core$Dict$toList(
					A2(
						$author$project$Localized$Switch$indexBy,
						function ($) {
							return $.name;
						},
						modules))));
	});
var $author$project$Main$importResult = _Platform_outgoingPort(
	'importResult',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$CSV$Import$moduleNameForLine = function (columns) {
	if ((((columns.b && columns.b.b) && columns.b.b.b) && columns.b.b.b.b) && columns.b.b.b.b.b) {
		var modulename = columns.a;
		var _v1 = columns.b;
		var _v2 = _v1.b;
		var _v3 = _v2.b;
		var _v4 = _v3.b;
		var xs = _v4.b;
		return $elm$core$Maybe$Just(modulename);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$CSV$Import$allModuleNames = function (lines) {
	return A2($elm$core$List$filterMap, $author$project$CSV$Import$moduleNameForLine, lines);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$String$contains = _String_contains;
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$CSV$Import$withoutEmptyStrings = $elm$core$List$filter(
	A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not));
var $author$project$CSV$Import$formatElement = F4(
	function (key, comment, placeholders, value) {
		var components = $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (candidate) {
					return A2($elm$core$String$contains, '}}', candidate) ? A2(
						$elm$core$List$indexedMap,
						F2(
							function (index, submatch) {
								return (!A2($elm$core$Basics$modBy, 2, index)) ? $author$project$Localized$FormatComponentPlaceholder(
									$elm$core$String$trim(submatch)) : $author$project$Localized$FormatComponentStatic(submatch);
							}),
						$author$project$CSV$Import$withoutEmptyStrings(
							A2($elm$core$String$split, '}}', candidate))) : _List_fromArray(
						[
							$author$project$Localized$FormatComponentStatic(candidate)
						]);
				},
				$author$project$CSV$Import$withoutEmptyStrings(
					A2($elm$core$String$split, '{{', value))));
		return $author$project$Localized$ElementFormat(
			{
				components: components,
				meta: {comment: comment, key: key},
				placeholders: placeholders
			});
	});
var $author$project$CSV$Import$staticElement = F3(
	function (key, comment, value) {
		return $author$project$Localized$ElementStatic(
			{
				meta: {comment: comment, key: key},
				value: value
			});
	});
var $author$project$CSV$Import$code = F4(
	function (key, comment, placeholderString, value) {
		var placeholders = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not),
			A2(
				$elm$core$List$map,
				$elm$core$String$trim,
				A2($elm$core$String$split, ' ', placeholderString)));
		var numPlaceholders = $elm$core$List$length(placeholders);
		return (!numPlaceholders) ? A3($author$project$CSV$Import$staticElement, key, comment, value) : A4($author$project$CSV$Import$formatElement, key, comment, placeholders, value);
	});
var $author$project$CSV$Import$fromLine = function (columns) {
	if ((((columns.b && columns.b.b) && columns.b.b.b) && columns.b.b.b.b) && columns.b.b.b.b.b) {
		var _v1 = columns.b;
		var key = _v1.a;
		var _v2 = _v1.b;
		var comment = _v2.a;
		var _v3 = _v2.b;
		var placeholders = _v3.a;
		var _v4 = _v3.b;
		var value = _v4.a;
		var xs = _v4.b;
		return $elm$core$Maybe$Just(
			A4($author$project$CSV$Import$code, key, comment, placeholders, value));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$CSV$Import$generateForModule = function (lines) {
	return A2($elm$core$List$filterMap, $author$project$CSV$Import$fromLine, lines);
};
var $author$project$CSV$Import$linesForModule = F2(
	function (moduleName, lines) {
		return A2(
			$elm$core$List$filter,
			function (line) {
				return _Utils_eq(
					$author$project$CSV$Import$moduleNameForLine(line),
					$elm$core$Maybe$Just(moduleName));
			},
			lines);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$CSV$Import$generateForCsv = F2(
	function (moduleName, lines) {
		var modules = $elm$core$Set$toList(
			$elm$core$Set$fromList(
				A2(
					$elm$core$List$map,
					function (mn) {
						if (!_Utils_eq(mn, moduleName)) {
							var _v0 = A2(
								$elm$core$Debug$log,
								'WARNING: found a module name in a CSV file where it does not belong',
								{file: moduleName, key: mn});
							return mn;
						} else {
							return mn;
						}
					},
					$author$project$CSV$Import$allModuleNames(lines.records))));
		var linesForModules = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (name) {
					return _Utils_Tuple2(
						name,
						A2($author$project$CSV$Import$linesForModule, name, lines.records));
				},
				modules));
		var linesForThisModule = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Dict$get, moduleName, linesForModules));
		return $author$project$CSV$Import$generateForModule(linesForThisModule);
	});
var $periodic$elm_csv$Csv$crs = '\u000D';
var $periodic$elm_csv$Csv$addTrailingLineSep = function (str) {
	return (!(A2($elm$core$String$endsWith, '\n', str) || A2($elm$core$String$endsWith, $periodic$elm_csv$Csv$crs, str))) ? (str + ($periodic$elm_csv$Csv$crs + '\n')) : str;
};
var $periodic$elm_csv$Csv$Csv = F2(
	function (headers, records) {
		return {headers: headers, records: records};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $periodic$elm_csv$Csv$doubleQuote = $elm$parser$Parser$symbol('\"');
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $periodic$elm_csv$Csv$comma = $elm$parser$Parser$symbol(',');
var $periodic$elm_csv$Csv$cr = $elm$parser$Parser$symbol($periodic$elm_csv$Csv$crs);
var $periodic$elm_csv$Csv$doubleDoubleQuote = A2($elm$parser$Parser$ignorer, $periodic$elm_csv$Csv$doubleQuote, $periodic$elm_csv$Csv$doubleQuote);
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $periodic$elm_csv$Csv$lf = $elm$parser$Parser$symbol('\n');
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $periodic$elm_csv$Csv$crc = _Utils_chr('\u000D');
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $periodic$elm_csv$Csv$textChar = F2(
	function (sepChar, c) {
		return !A2(
			$elm$core$List$member,
			c,
			_List_fromArray(
				[
					_Utils_chr('\"'),
					sepChar,
					_Utils_chr('\n'),
					$periodic$elm_csv$Csv$crc
				]));
	});
var $periodic$elm_csv$Csv$textData = function (sepChar) {
	return $elm$parser$Parser$chompIf(
		$periodic$elm_csv$Csv$textChar(sepChar));
};
var $periodic$elm_csv$Csv$innerChar = function (sepChar) {
	return A2(
		$elm$parser$Parser$map,
		A2($elm$core$String$replace, '\"\"', '\"'),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$periodic$elm_csv$Csv$textData(sepChar),
							$periodic$elm_csv$Csv$comma,
							$periodic$elm_csv$Csv$cr,
							$periodic$elm_csv$Csv$lf,
							$periodic$elm_csv$Csv$doubleDoubleQuote
						])))));
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $periodic$elm_csv$Csv$innerString = F2(
	function (sepChar, strs) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (str) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, str, strs));
						}),
					$periodic$elm_csv$Csv$innerChar(sepChar)),
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(strs)));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	});
var $periodic$elm_csv$Csv$escaped = function (sepChar) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$periodic$elm_csv$Csv$doubleQuote),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$loop,
				_List_Nil,
				$periodic$elm_csv$Csv$innerString(sepChar)),
			$periodic$elm_csv$Csv$doubleQuote));
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $periodic$elm_csv$Csv$nonEscaped = function (sepChar) {
	return $elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile(
			$periodic$elm_csv$Csv$textChar(sepChar)));
};
var $periodic$elm_csv$Csv$field = function (sepChar) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$periodic$elm_csv$Csv$escaped(sepChar),
				$periodic$elm_csv$Csv$nonEscaped(sepChar)
			]));
};
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $periodic$elm_csv$Csv$lineSep = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$backtrackable(
			A2($elm$parser$Parser$ignorer, $periodic$elm_csv$Csv$cr, $periodic$elm_csv$Csv$lf)),
			$periodic$elm_csv$Csv$cr,
			$periodic$elm_csv$Csv$lf
		]));
var $periodic$elm_csv$Csv$recordHelper = F2(
	function (sepChar, strs) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$backtrackable(
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed(
							function (str) {
								return $elm$parser$Parser$Loop(
									A2($elm$core$List$cons, str, strs));
							}),
						A2(
							$elm$parser$Parser$ignorer,
							$periodic$elm_csv$Csv$field(sepChar),
							$elm$parser$Parser$symbol(
								$elm$core$String$fromChar(sepChar))))),
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (str) {
							return $elm$parser$Parser$Done(
								$elm$core$List$reverse(
									A2($elm$core$List$cons, str, strs)));
						}),
					A2(
						$elm$parser$Parser$ignorer,
						$periodic$elm_csv$Csv$field(sepChar),
						$periodic$elm_csv$Csv$lineSep))
				]));
	});
var $periodic$elm_csv$Csv$record = function (sepChar) {
	return A2(
		$elm$parser$Parser$loop,
		_List_Nil,
		$periodic$elm_csv$Csv$recordHelper(sepChar));
};
var $periodic$elm_csv$Csv$recordsHelper = F2(
	function (sepChar, records) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (rec) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, rec, records));
						}),
					$periodic$elm_csv$Csv$record(sepChar)),
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(records));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	});
var $periodic$elm_csv$Csv$file = function (sepChar) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($periodic$elm_csv$Csv$Csv),
			$periodic$elm_csv$Csv$record(sepChar)),
		A2(
			$elm$parser$Parser$loop,
			_List_Nil,
			$periodic$elm_csv$Csv$recordsHelper(sepChar)));
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $periodic$elm_csv$Csv$parseWith = function (c) {
	return A2(
		$elm$core$Basics$composeR,
		$periodic$elm_csv$Csv$addTrailingLineSep,
		$elm$parser$Parser$run(
			$periodic$elm_csv$Csv$file(c)));
};
var $periodic$elm_csv$Csv$parse = function (s) {
	return A2(
		$periodic$elm_csv$Csv$parseWith,
		_Utils_chr(','),
		s);
};
var $author$project$CSV$Import$generate = F2(
	function (moduleName, csv) {
		var _v0 = $periodic$elm_csv$Csv$parse(csv);
		if (_v0.$ === 'Ok') {
			var lines = _v0.a;
			return A2($author$project$CSV$Import$generateForCsv, moduleName, lines);
		} else {
			var err = _v0.a;
			return A2(
				$elm$core$Basics$always,
				_List_Nil,
				A2($elm$core$Debug$log, 'Could not parse CSV', err));
		}
	});
var $author$project$Localized$CSV$parse = $author$project$CSV$Import$generate;
var $author$project$PO$Import$Internal$commentFromPoComment = function (poComment) {
	return $elm$core$String$trim(
		A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$filterMap,
				function (line) {
					return A2($elm$core$String$startsWith, ' i18n:', line) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						$elm$core$String$trim(line));
				},
				A2(
					$elm$core$String$split,
					'#.',
					$elm$core$String$trim(poComment)))));
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Localized$isEmptyFormatComponent = function (comp) {
	if (comp.$ === 'FormatComponentStatic') {
		var string = comp.a;
		return $elm$core$String$isEmpty(string);
	} else {
		var string = comp.a;
		return $elm$core$String$isEmpty(string);
	}
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$PO$Import$Internal$findPlaceholdersInStaticComponents = F2(
	function (components, placeholders) {
		findPlaceholdersInStaticComponents:
		while (true) {
			var _v0 = $elm$core$List$head(placeholders);
			if (_v0.$ === 'Nothing') {
				return components;
			} else {
				var nextPlaceholder = _v0.a;
				var subcomps = $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (component) {
							if (component.$ === 'FormatComponentPlaceholder') {
								return _List_fromArray(
									[component]);
							} else {
								var value = component.a;
								var subComponents = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeR, $author$project$Localized$isEmptyFormatComponent, $elm$core$Basics$not),
									A2(
										$elm$core$List$intersperse,
										$author$project$Localized$FormatComponentPlaceholder(nextPlaceholder),
										A2(
											$elm$core$List$map,
											$author$project$Localized$FormatComponentStatic,
											A2(
												$elm$core$String$split,
												$author$project$PO$Template$placeholder(nextPlaceholder),
												value))));
								return subComponents;
							}
						},
						components));
				var $temp$components = subcomps,
					$temp$placeholders = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(placeholders));
				components = $temp$components;
				placeholders = $temp$placeholders;
				continue findPlaceholdersInStaticComponents;
			}
		}
	});
var $author$project$PO$Import$Internal$formatComponentsFromValue = F2(
	function (value, placeholders) {
		return A2(
			$author$project$PO$Import$Internal$findPlaceholdersInStaticComponents,
			_List_fromArray(
				[
					$author$project$Localized$FormatComponentStatic(value)
				]),
			placeholders);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$PO$Import$Internal$placeholdersFromPoComment = function (poComment) {
	var placeholdersPrefix = ' ' + $author$project$PO$Template$placeholderCommentPrefix;
	return A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			$elm$core$Maybe$map,
			$elm$core$String$split(' '),
			$elm$core$List$head(
				A2(
					$elm$core$List$filterMap,
					function (line) {
						return A2($elm$core$String$startsWith, placeholdersPrefix, line) ? $elm$core$Maybe$Just(
							$elm$core$String$trim(
								A2(
									$elm$core$String$dropLeft,
									$elm$core$String$length(placeholdersPrefix),
									line))) : $elm$core$Maybe$Nothing;
					},
					A2(
						$elm$core$String$split,
						'#.',
						$elm$core$String$trim(poComment))))));
};
var $author$project$PO$Import$Internal$regexForPlaceholder = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%\\(([^\\)]+)\\)s'));
var $author$project$PO$Import$Internal$placeholdersInValue = function (value) {
	return A2(
		$elm$core$List$filterMap,
		function (match) {
			return A2(
				$author$project$Utils$Regex$submatchAt,
				0,
				$elm$core$Maybe$Just(match));
		},
		A2($elm$regex$Regex$find, $author$project$PO$Import$Internal$regexForPlaceholder, value));
};
var $elm_community$string_extra$String$Extra$unsurround = F2(
	function (wrapper, string) {
		if (A2($elm$core$String$startsWith, wrapper, string) && A2($elm$core$String$endsWith, wrapper, string)) {
			var length = $elm$core$String$length(wrapper);
			return A2(
				$elm$core$String$dropRight,
				length,
				A2($elm$core$String$dropLeft, length, string));
		} else {
			return string;
		}
	});
var $elm_community$string_extra$String$Extra$unquote = function (string) {
	return A2($elm_community$string_extra$String$Extra$unsurround, '\"', string);
};
var $author$project$PO$Import$Internal$element = F3(
	function (key, value, fullComment) {
		var unquotedValue = $elm_community$string_extra$String$Extra$unquote(value);
		var placeholdersV = $author$project$PO$Import$Internal$placeholdersInValue(value);
		var placeholdersC = $author$project$PO$Import$Internal$placeholdersFromPoComment(fullComment);
		var placeholders = (!_Utils_eq(placeholdersC, _List_Nil)) ? placeholdersC : ((!_Utils_eq(placeholdersV, _List_Nil)) ? A2($elm$core$Debug$log, 'Did not find placeholder list in comment using placeholders found in msgstr instead. Order might be wrong.', placeholdersV) : _List_Nil);
		var comment = $author$project$PO$Import$Internal$commentFromPoComment(fullComment);
		var meta = {comment: comment, key: key};
		return $elm$core$List$isEmpty(placeholders) ? $author$project$Localized$ElementStatic(
			{meta: meta, value: unquotedValue}) : $author$project$Localized$ElementFormat(
			{
				components: A2($author$project$PO$Import$Internal$formatComponentsFromValue, unquotedValue, placeholders),
				meta: meta,
				placeholders: placeholders
			});
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$PO$Import$Internal$regexMsgId = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('msgid \"([^\"]+)\\.([^\"]+)\"'));
var $author$project$PO$Import$Internal$keys = function (poString) {
	var matches = A2($elm$regex$Regex$find, $author$project$PO$Import$Internal$regexMsgId, poString);
	var moduleAndKeys = A2(
		$elm$core$List$filterMap,
		function (maybeTuple) {
			if ((maybeTuple.a.$ === 'Just') && (maybeTuple.b.$ === 'Just')) {
				var moduleName = maybeTuple.a.a;
				var key = maybeTuple.b.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(moduleName, key));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		},
		A2(
			$elm$core$List$map,
			function (match) {
				return _Utils_Tuple2(
					A2(
						$author$project$Utils$Regex$submatchAt,
						0,
						$elm$core$Maybe$Just(match)),
					A2(
						$author$project$Utils$Regex$submatchAt,
						1,
						$elm$core$Maybe$Just(match)));
			},
			matches));
	var modules = $elm$core$Set$toList(
		$elm$core$Set$fromList(
			A2($elm$core$List$map, $elm$core$Tuple$first, moduleAndKeys)));
	return A2(
		$elm$core$List$map,
		function (modulename) {
			return A2(
				$elm$core$Tuple$pair,
				modulename,
				A2(
					$elm$core$List$filterMap,
					function (_v0) {
						var someModule = _v0.a;
						var key = _v0.b;
						return _Utils_eq(modulename, someModule) ? $elm$core$Maybe$Just(key) : $elm$core$Maybe$Nothing;
					},
					moduleAndKeys));
		},
		modules);
};
var $author$project$PO$Import$Internal$fullKey = F2(
	function (moduleName, key) {
		return moduleName + ('.' + key);
	});
var $author$project$PO$Import$Internal$regexComments = function (key) {
	return A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString(
			'((?:#\\.[^\\n]*\\n)*)msgid ' + $elm_community$string_extra$String$Extra$quote(key)));
};
var $author$project$PO$Import$Internal$poComments = F3(
	function (poString, moduleName, allKeys) {
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (key) {
					return A2(
						$elm$core$Tuple$pair,
						key,
						A2(
							$elm$core$Maybe$withDefault,
							'',
							A2(
								$author$project$Utils$Regex$submatchAt,
								0,
								$elm$core$List$head(
									A3(
										$elm$regex$Regex$findAtMost,
										1,
										$author$project$PO$Import$Internal$regexComments(
											A2($author$project$PO$Import$Internal$fullKey, moduleName, key)),
										poString)))));
				},
				allKeys));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$PO$Import$Internal$regexForValue = function (key) {
	return A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('msgid \"' + (key + '\"\nmsgstr ((?:.+\\r?\\n)+(?=(\\r?\\n)?))')));
};
var $author$project$PO$Import$Internal$values = F3(
	function (poString, moduleName, allKeys) {
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (key) {
					return A2(
						$elm$core$Tuple$pair,
						key,
						$elm$core$String$trim(
							A2(
								$elm$core$Maybe$withDefault,
								'',
								A2(
									$author$project$Utils$Regex$submatchAt,
									0,
									$elm$core$List$head(
										A3(
											$elm$regex$Regex$findAtMost,
											1,
											$author$project$PO$Import$Internal$regexForValue(
												A2($author$project$PO$Import$Internal$fullKey, moduleName, key)),
											poString))))));
				},
				allKeys));
	});
var $author$project$PO$Import$generate = F2(
	function (moduleName, poString) {
		var allKeysWithModuleName = $author$project$PO$Import$Internal$keys(poString);
		var allKeys = $elm$core$List$concat(
			A2($elm$core$List$map, $elm$core$Tuple$second, allKeysWithModuleName));
		var allValues = A3($author$project$PO$Import$Internal$values, poString, moduleName, allKeys);
		var valueForKey = function (key) {
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, key, allValues));
		};
		var fullComments = A3($author$project$PO$Import$Internal$poComments, poString, moduleName, allKeys);
		var fullCommentForKey = function (key) {
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, key, fullComments));
		};
		var _v0 = A2(
			$elm$core$List$map,
			function (_v1) {
				var keyModuleName = _v1.a;
				return ((!_Utils_eq(keyModuleName, moduleName)) ? $elm$core$Debug$log('WARNING: found a module name in a PO file where it does not belong') : $elm$core$Basics$identity)(
					{file: moduleName, key: keyModuleName});
			},
			allKeysWithModuleName);
		return A2(
			$elm$core$List$map,
			function (key) {
				return A3(
					$author$project$PO$Import$Internal$element,
					key,
					valueForKey(key),
					fullCommentForKey(key));
			},
			allKeys);
	});
var $author$project$Localized$PO$parse = $author$project$PO$Import$generate;
var $author$project$Localized$Filename$toModuleNameAndLangPrefix = function (org) {
	var ex = '^([^/]+)/(.+)\\.' + ($author$project$Localized$Filename$extensionEx + '$');
	var _v0 = A2($author$project$Utils$Regex$findFirst, ex, org);
	if (_v0.$ === 'Nothing') {
		return _Utils_Tuple2(org, '');
	} else {
		var match = _v0.a;
		var _v1 = match.submatches;
		if ((((_v1.b && (_v1.a.$ === 'Just')) && _v1.b.b) && (_v1.b.a.$ === 'Just')) && (!_v1.b.b.b)) {
			var langCode = _v1.a.a;
			var _v2 = _v1.b;
			var slashyPath = _v2.a.a;
			return _Utils_Tuple2(
				A2(
					$elm$core$String$join,
					'.',
					A2(
						$elm$core$List$map,
						$elm_community$string_extra$String$Extra$classify,
						A2($elm$core$String$split, '/', slashyPath))),
				$author$project$Localized$Filename$normalizeLanguageCode(langCode));
		} else {
			return _Utils_Tuple2(org, '');
		}
	}
};
var $author$project$Localized$CSV$parseFileName = $author$project$Localized$Filename$toModuleNameAndLangPrefix;
var $author$project$Localized$PO$parseFileName = $author$project$Localized$Filename$toModuleNameAndLangPrefix;
var $author$project$Main$parse = F2(
	function (format, _v0) {
		var fileName = _v0.a;
		var content = _v0.b;
		var parsed = function () {
			if (format.$ === 'CSV') {
				return $author$project$Localized$CSV$parse;
			} else {
				return $author$project$Localized$PO$parse;
			}
		}();
		var _v1 = function () {
			if (format.$ === 'CSV') {
				return $author$project$Localized$CSV$parseFileName(fileName);
			} else {
				return $author$project$Localized$PO$parseFileName(fileName);
			}
		}();
		var moduleName = _v1.a;
		var lang = _v1.b;
		return {
			elements: A2(parsed, moduleName, content),
			lang: lang,
			name: moduleName
		};
	});
var $author$project$Localized$Filename$toElmWithLocale = function (_v0) {
	var name = _v0.name;
	var lang = _v0.lang;
	return A2(
		$elm$core$String$join,
		'/',
		A3(
			$pilatch$flip$Flip$flip,
			$elm$core$List$append,
			_List_fromArray(
				[lang]),
			A2(
				$elm$core$List$append,
				_List_fromArray(
					['Translation']),
				A2($elm$core$String$split, '.', name)))) + '.elm';
};
var $author$project$Localized$Writer$Element$formatComponentsImplementation = F2(
	function (index, component) {
		var prefix = (!index) ? $author$project$Localized$Writer$Element$tab : ($author$project$Localized$Writer$Element$tab + ($author$project$Localized$Writer$Element$tab + '++ '));
		if (component.$ === 'FormatComponentStatic') {
			var string = component.a;
			return _Utils_ap(
				prefix,
				$elm_community$string_extra$String$Extra$quote(string));
		} else {
			var string = component.a;
			return _Utils_ap(
				prefix,
				$elm$core$String$trim(string));
		}
	});
var $author$project$Localized$Writer$Element$body = function (element) {
	if (element.$ === 'ElementStatic') {
		var _static = element.a;
		return _Utils_ap(
			$author$project$Localized$Writer$Element$tab,
			$elm_community$string_extra$String$Extra$quote(_static.value));
	} else {
		var format = element.a;
		return A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$indexedMap, $author$project$Localized$Writer$Element$formatComponentsImplementation, format.components));
	}
};
var $author$project$Localized$Writer$comment = function (string) {
	return $elm$core$String$isEmpty(string) ? '' : ('{-| ' + (string + '\n-}\n'));
};
var $author$project$Localized$Writer$Element$head = function (element) {
	return A2(
		$author$project$Localized$elementMeta,
		function ($) {
			return $.key;
		},
		element) + (function () {
		if (element.$ === 'ElementStatic') {
			return '';
		} else {
			var format = element.a;
			return ' ' + A2($elm$core$String$join, '', format.placeholders);
		}
	}() + ' =');
};
var $author$project$Localized$Writer$Element$typeDeclaration = function (element) {
	return A2(
		$author$project$Localized$elementMeta,
		function ($) {
			return $.key;
		},
		element) + (' : ' + $author$project$Localized$Writer$Element$placeholders(element));
};
var $author$project$Localized$Writer$element = function (ele) {
	var c = A2(
		$author$project$Localized$elementMeta,
		function ($) {
			return $.comment;
		},
		ele);
	return $author$project$Localized$Writer$comment(c) + ($author$project$Localized$Writer$Element$typeDeclaration(ele) + ('\n' + ($author$project$Localized$Writer$Element$head(ele) + ('\n' + $author$project$Localized$Writer$Element$body(ele)))));
};
var $author$project$Localized$Writer$Module$implementation = F2(
	function (functionImplementation, mod) {
		return $author$project$Localized$Writer$Module$head(mod) + ('\n' + A2($author$project$Localized$Writer$Module$elements, functionImplementation, mod));
	});
var $author$project$Localized$Writer$generate = $author$project$Localized$Writer$Module$implementation($author$project$Localized$Writer$element);
var $author$project$Localized$Elm$write = $author$project$Localized$Writer$generate;
var $author$project$Main$writeElm = function (modul) {
	var fileName = $author$project$Localized$Filename$toElmWithLocale(modul);
	var content = $author$project$Localized$Elm$write(modul);
	return _Utils_Tuple2(fileName, content);
};
var $author$project$Main$operationImport = F3(
	function (sources, mlangs, format) {
		var modules = A2(
			$elm$core$List$map,
			$author$project$Main$parse(format),
			sources);
		var locales = A2(
			$elm$core$List$map,
			$author$project$Localized$Filename$normalizeLanguageCode,
			A2(
				$elm$core$Maybe$withDefault,
				_List_fromArray(
					['Klingon']),
				mlangs));
		var switches = A2($author$project$Localized$Switch$generate, locales, modules);
		return $elm$core$Platform$Cmd$batch(
			A2(
				$elm$core$List$map,
				$author$project$Main$importResult,
				_Utils_ap(
					A2($elm$core$List$map, $author$project$Main$writeElm, modules),
					switches)));
	});
var $author$project$Main$init = function (flags) {
	var _v0 = A2($author$project$Main$operationFromString, flags.operation, flags.format);
	if (_v0.$ === 'Export') {
		var format = _v0.a;
		return _Utils_Tuple2(
			{},
			A2($author$project$Main$operationExport, flags.sources, format));
	} else {
		var format = _v0.a;
		return _Utils_Tuple2(
			{},
			A3($author$project$Main$operationImport, flags.sources, flags.languages, format));
	}
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$update = F2(
	function (_v0, model) {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Main$main = $elm$core$Platform$worker(
	{
		init: $author$project$Main$init,
		subscriptions: $elm$core$Basics$always($elm$core$Platform$Sub$none),
		update: $author$project$Main$update
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (sources) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (operation) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (languages) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (format) {
									return $elm$json$Json$Decode$succeed(
										{format: format, languages: languages, operation: operation, sources: sources});
								},
								A2(
									$elm$json$Json$Decode$field,
									'format',
									$elm$json$Json$Decode$oneOf(
										_List_fromArray(
											[
												$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
												A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
											]))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'languages',
							$elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
										A2(
										$elm$json$Json$Decode$map,
										$elm$core$Maybe$Just,
										$elm$json$Json$Decode$list($elm$json$Json$Decode$string))
									]))));
				},
				A2($elm$json$Json$Decode$field, 'operation', $elm$json$Json$Decode$string));
		},
		A2(
			$elm$json$Json$Decode$field,
			'sources',
			$elm$json$Json$Decode$list(
				A2(
					$elm$json$Json$Decode$andThen,
					function (_v0) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (_v1) {
								return $elm$json$Json$Decode$succeed(
									_Utils_Tuple2(_v0, _v1));
							},
							A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string))))))(0)}});}(this));