/**
 * This test works differently than the other tests.
 *
 * test/fbtest.js
 *     This file lists out the tests but not the expected ASTs/errors
 *
 * test/fbtest.rec.js
 *     This AUTOGENERATED file contains the ASTs and errors for the
 *     tests below. This is the test run by test/run.js
 *
 * tools/generate-fbtest.js
 *     This script reads fbtest.js and generates fbtest.rec.js
 *
 *
 * TO ADD A TEST
 *     1) Add the string you want to parse to test/fbtest.js
 *     2) Run tools/generate-fbtest.js
 *
 * TO RE-RECORD AN EXISTING TEST
 *     1) Run tools/generate-fbtest.js
 *
 * TO DELETE A TEST
 *     1) Remove the test from test/fbtest.js
 *     2) Run tools/generate-fbtest.js
 */

/* jscs:disable disallowTrailingComma */

module.exports = {
    'JSXModule': [
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div></ReactClass>',
      '<!DocType Jsx><ReactClass name="Module"><div>A</div></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module" mixins="a,b"><div>A</div></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module">\n \r \r\n <div>A</div>\n</ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>var x;</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>import x from "y";</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>function x(){}</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>x(){}</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script type="text/javascript">var x;</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script id="file" src="file.js"></script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script id="file" src="file.js" async></script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script type="text/vbscript">MsgBox "Hello!"</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script type="text/vbscript" src="file.vb"></script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><style> div { color: red }</style></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><style media="printer">div { color: red }</style></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><style media="printer">div\n  {\r    color: red\r\n }</style></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><link href="theme.css"></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><link media="printer" rel="stylesheet" type="text/css" href="theme.css"></ReactClass>',
    ],
    'Invalid JSXModule Syntax': [
      '<!TYPE JSX>',
      '<!DOCTYPE HTML>',
      '<!DOCTYPE JSX><reactClass></reactClass>',
      '<!DOCTYPE JSX><ReactClass></ReactClass>',
      '<!DOCTYPE JSX><ReactClass />',
      '<!DOCTYPE JSX><ReactClass name="module"></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="module"><div>A</div></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><div>B</div></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div></ReactComponent>',
      '<!DOCTYPE JSX><ReactClass name="Module">A</ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>import x from "y";</ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>import x from "y";</script>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>import x from "y";',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>while(true){}</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script>1</script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script><div /></script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script src="file.js"></script></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script id="file" src="file.js"></ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><script id="file" src="file.js">',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><style> div { color: red }</ReactClass>',
      '<!DOCTYPE JSX><ReactClass name="Module"><div>A</div><style> div { color: red }',
    ],
    'JSX': [
        '<a />',
        '<n:a n:v />',
        '<a n:foo="bar"> {value} <b><c /></b></a>',
        '<a b={" "} c=" " d="&amp;" e="id=1&group=2" f="&#123456789" g="&#123*;" h="&#x;" />',
        '<a b="&notanentity;" />',
        '<a\n/>',
        '<日本語></日本語>',
        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>',
        '<a b={x ? <c /> : <d />} />',
        '<a>{}</a>',
        '<a>{\r\n}</a>',
        '<a>{/* this is a comment */}</a>',
        '<a>{/* this\nis\na\nmulti-line\ncomment */}</a>',
        '<div>@test content</div>',
        '<div><br />7x invalid-js-identifier</div>',
        '<LeftRight left=<a /> right=<b>monkeys</b> />',
        '<a.b></a.b>',
        '<a.b.c></a.b.c>',
        '(<div />) < x;',
        '<div {...props} />',
        '<div {...props} post="attribute" />',
        '<div pre="leading" pre2="attribute" {...props}></div>',
        '<a>    </a>',
        '<a>= == =</a>',
    ],
    'Invalid JSX Syntax': [
        '</>',
        '<a: />',
        '<:a />',
        '<a b=d />',
        '<a>',
        '<a></b>',
        '<a foo="bar',
        '<a:b></b>',
        '<a:b.c></a:b.c>',
        '<a.b:c></a.b:c>',
        '<a.b.c></a>',
        '<.a></.a>',
        '<a.></a.>',
        '<a[foo]></a[foo]>',
        '<a[\'foo\']></a[\'foo\']>',
        '<a><a />',
        '<a b={}>',
        'var x = <div>one</div><div>two</div>;',
        'var x = <div>one</div> /* intervening comment */ <div>two</div>;',
        '<a>{"str";}</a>',
        '<span className="a", id="b" />',
        '<div className"app">',
        '<div {props} />',
        '<div>stuff</div {...props}>',
        '<div {...props}>stuff</div {...props}>',
        '<a>></a>',
        '<a> ></a>',
        '<a b=}>',
        '<a b=<}>',
        '<a>}</a>',
        '<a .../*hai*/asdf/>',
    ],
    'Type Annotations': [
        'function foo(numVal: any){}',
        'function foo(numVal: number){}',
        'function foo(numVal: number, strVal: string){}',
        'function foo(numVal: number, untypedVal){}',
        'function foo(untypedVal, numVal: number){}',
        'function foo(nullableNum: ?number){}',
        'function foo(callback: () => void){}',
        'function foo(callback: () => number){}',
        'function foo(callback: (_:bool) => number){}',
        'function foo(callback: (_1:bool, _2:string) => number){}',
        'function foo(callback: (_1:bool, ...foo:Array<number>) => number){}',
        'function foo():number{}',
        'function foo():() => void{}',
        'function foo():(_:bool) => number{}',
        'function foo():(_?:bool) => number{}',
        'function foo(): {} {}',
        'function foo<T>() {}',
        'function foo<T,S>() {}',
        'a=function<T,S>() {}',
        'a={set fooProp(value:number){}}',
        'a={set fooProp(value:number):void{}}',
        'a={get fooProp():number{}}',
        'a={id<T>(x: T): T {}}',
        'a={*id<T>(x: T): T {}}',
        'a={async id<T>(x: T): T {}}',
        'a={123<T>(x: T): T {}}',
        'class Foo {set fooProp(value:number){}}',
        'class Foo {set fooProp(value:number):void{}}',
        'class Foo {get fooProp():number{}}',
        'var numVal:number;',
        'var numVal:number = otherNumVal;',
        'var a: {numVal: number};',
        'var a: {numVal: number;};',
        'var a: {numVal: number; [indexer: string]: number};',
        'var a: ?{numVal: number};',
        'var a: {numVal: number; strVal: string}',
        'var a: {numVal: number, strVal: string}',
        'var a: {subObj: {strVal: string}}',
        'var a: {subObj: ?{strVal: string}}',
        'var a: {param1: number; param2: string}',
        'var a: {param1: number; param2?: string}',
        'var a: { [a: number]: string; [b: number]: string; };',
        'var a: {add(x:number, ...y:Array<string>): void}',
        'var a: { id<T>(x: T): T; }',
        'var a:Array<number> = [1, 2, 3]',
        'a = class Foo<T> { }',
        'a = class Foo<T> extends Bar<T> { }',
        'class Foo<T> {}',
        'class Foo<T> extends Bar<T> { }',
        'class Foo<T> extends mixin(Bar) { }',
        'class Foo<T> { bar<U>():number { return 42; }}',
        'class Foo { "bar"<T>() { } }',
        'function foo(requiredParam, optParam?) {}',
        'class Foo { prop1:string; prop2:number; }',
        'class Foo { static prop1:string; prop2:number; }',
        'var x : number | string = 4;',
        'class Array { concat(items:number | string) {}; }',
        'var x : () => number | () => string = fn;',
        'var x: typeof Y = Y;',
        'var x: typeof Y | number = Y;',
        'var {x}: {x: string; } = { x: "hello" };',
        'var {x}: {x: string } = { x: "hello" };',
        'var [x]: Array<string> = [ "hello" ];',
        'function foo({x}: { x: string; }) {}',
        'function foo([x]: Array<string>) {}',
        'function foo(...rest: Array<number>) {}',
        '(function (...rest: Array<number>) {})',
        '((...rest: Array<number>) => rest)',
        'var a: Map<string, Array<string> >',
        'var a: Map<string, Array<string>>',
        'var a: Map<string, Map<string, Array<string>>>',
        'var a: number[]',
        'var a: ?string[]',
        'var a: Promise<bool>[]',
        'var a:(...rest:Array<number>) => number',
        'var identity: <T>(x: T) => T',
        'var identity: <T>(x: T, ...y:T[]) => T',
        'import type foo from "bar";',
        'import type {foo, bar} from "baz";',
        'import type {foo as bar} from "baz";',
        'import type from "foo";',
        'import type, {foo} from "bar";',
        'import type * as namespace from "bar";',

        'import typeof foo from "bar";',
        'import typeof {foo, bar} from "baz";',
        'import typeof {foo as bar} from "baz";',
        'import typeof * as namespace from "bar";',
    ],
    'Invalid Type Annotations': [
        'function foo(callback:) {}',
        'function foo(): {}',
        'function foo(): { foo() }',
        'function foo(callback:(string) => number) {}',
        'a = {foo(): { return 42; }}',
        'class Foo { get bar<T>() { } }',
        'var a:{a:number b:string}',
        'var x: (number) => string',
        'var y: return',
    ],
    'Hacky Type Annotations': [
        'class Foo { constructor: Function; constructor(){} }',
    ],
    'Array Types': [
      'var a: number[]',
      'var a: ?number[]',
      'var a: (?number)[]',
      'var a: () => number[]',
      'var a: (() => number)[]',
      'var a: typeof A[]',
    ],
    'Tuples': [
      'var a : [] = [];',
      'var a : [Foo<T>] = [foo];',
      'var a : [number,] = [123,];',
      'var a : [number, string] = [123, "duck"];'
    ],
    'Type Alias': [
        'type FBID = number;',
        'type Foo<T> = Bar<T>',
        'export type Foo = number;',
    ],
    'Interfaces (module and script)': [
        'interface A {}',
        'interface A extends B {}',
        'interface A<T> extends B<T>, C<T> {}',
        'interface A { foo: () => number; }',
        'interface Dictionary { [index: string]: string; length: number; }',
        'class Foo implements Bar {}',
        'class Foo extends Bar implements Bat, Man<number> {}',
        'class Foo extends class Bar implements Bat {} {}',
        'class Foo extends class Bar implements Bat {} implements Man {}',
    ],
    'Type Grouping': [
        'var a: (number)',
        'var a: (() => number) | () => string',
        'var a: number & (string | bool)',
        'var a: (typeof A)',
    ],
    'Invalid Type Alias': [
        'if (true) type foo = number',
    ],
    'Invalid Interfaces': [
        'interface {}',
        'interface A extends {}',
    ],
    'Call Properties': [
        'var a : { (): number }',
        'var a : { (): number; }',
        'var a : { (): number; y: string; (x: string): string }',
        'var a : { <T>(x: T): number; }',
        'interface A { (): number; }',
    ],
    'String Literal Types': [
        'function createElement(tagName: "div"): HTMLDivElement {}',
        'function createElement(tagName: \'div\'): HTMLDivElement {}',
    ],
    'Invalid String Literal Types': [
        'var a: "\\01"',
    ],
    'Qualified Generic Type': [
        'var a : A.B',
        'var a : A.B.C',
        'var a : A.B<T>',
        'var a : typeof A.B<T>',
    ],
    'Declare Statements': [
        'declare var foo',
        'declare var foo;',
        'declare function foo(): void',
        'declare function foo(): void;',
        'declare function foo<T>(): void;',
        'declare function foo(x: number, y: string): void;',
        'declare class A {}',
        'declare class A<T> extends B<T> { x: number }',
        'declare class A { static foo(): number; static x : string }',
        'declare class A { static [ indexer: number]: string }',
        'declare class A { static () : number }',
    ],
    'Invalid Declare Statements': [
        'declare class A { "static" foo(): number }',
        'declare class A { static : number }',
        'declare function foo();',
        'declare function foo(x): void',
    ],
    'Declare Module': [
        'declare module A {}',
        'declare module "./a/b.js" {}',
        'declare module A { declare var x: number; }',
        'declare module A { declare function foo(): number; }',
        'declare module A { declare class B { foo(): number; } }',
    ],
    'Invalid Declare Module': [
        'declare Module A {}',
        'declare module {}',
        'declare module A { declare module B {} }',
        'declare module A { export default 1 +1; }',
        'declare module A { function foo() {} }',
        '"use strict"; declare module "\\01" {}',
    ],
    'Typecasts': [
      '(xxx: number)',
      '({xxx: 0, yyy: "hey"}: {xxx: number; yyy: string})',
      // distinguish between function type params and typecasts
      '((xxx) => xxx + 1: (xxx: number) => number)',
      // parens disambiguate groups from casts
      '((xxx: number), (yyy: string))',
    ],
    'Invalid Typecasts': [
      // Must be parenthesized
      'var x: number = 0: number;',
      // ...even within groups
      '(xxx: number, yyy: string)'
    ],
    'Bounded Polymorphism': [
      'class A<T: Foo> {}',
      'function bar<T: ?number>() {}',
    ],
};
