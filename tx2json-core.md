


```js text2json/parsingFlow.js
 
var { createArrayOfObjects, receiveObjectsFromParser, objectsRecreateByDelimiters, receivePropsFromParser, addToContext, js, id__createTemporaryId, __temporary, __notLast, toContext, toDatabasetasks, pending } 
= abbreviate( documentParsingFlow )

const parsingProcess = {

 serviceStart: [
  'initCoreRunner',
  'registerStdTypes', // … to escape he oblivion

  'getParserList',
  'fnIndex__Wikipedia', // … reusable components
 ],

 initSequence: [
  'receiveProps',   // keyPath, parserList, 
  'receiveObjects', // ctxAdapter or dbAdapter, …
  'parseConfig',
  'parseRemappingSchema',
  'parsePath',
  'initParsers',
 ],

 initParsers: [ // … invoking sequences for expressions & layout blocks (complex encoding & text)
  'receiveProps',
  'initBlocks',
  'initKeywords',
  'initExpressions',
  'intoTrie', // expressionFn to tokenize with
 ],

 parseDirectory: [
  'findConfig',
  'updateContext',
  'parseFiles',
  'setDatabaseTasks',
  'setPending'
 ],


 // Processing information in normalized datasets
 parseCollection: [ // … JSON database output, SVG, RDF
  'sourceParamsToContext',
  'parseDoc'
 ],

 parseFile: [ // … not expecting XML and JS markup
  'fileNameToContext',
  'parseContext',
  'parseDoc',
 ],

 parseDoc: documentParsingFlow,

 // Ad-hoc instructions from expressionFn in Trie
  invokeSeq: [
    'intoTrie',
 ],
 
// There's always more to it, though.

const documentParsingFlow = [
 'receiveContext',  // … dataset's ctx (automated)
 'receivePropsFrom', // … properties & attributes
  'receiveObjectsFrom', // … merge in or transform
 'createArrayOfObjects',
   'objectsRecreateByDelimiters',
    'js',
    'id__createTemporaryId', '*__temporary',
    '*',
 'toContext', // … automated
 'toDatabaseTasks',
 'pending'
],
 
```


```js text2json/layout/OrderedList.js
/*
   const exampleContent = `

 # Überschrift (aha!)

 Here is etwas
  1. Erste
  2. Zweite
  3. …
  
  `
 */

import React from 'react'
import _ from 'lodash'

import { // Logical operators — now building a necessary set (with usecases)
  Scenario, MatchOneOf as OneOf, 
  ExpressionChain as Chain, Trie,
  ExpressionNativeJS as Expr,
  Scoop } from '../logic'

import { Line as NL, Headline as H, Paragraph as P } from './' // Layout blocks
import { escapeExpression as e } from '../util' // function unexistent here yet [!!!]


export default function orderedList (props) {

  //
  //   Containing blocks and cosequent expressions
  // ( explicitly declared, after all )
  //
  // … needless to declare: "Document.*"
  //

  this.cosequent = {
    in: d_b.matrixArr( [Section, Paragraph], [CommonMark, WikipediaMarkup] )
  };

  this.contains = [ __expr, __blocks,
   '{__parser}': ['{__type}, …']
  ];

 // this.with = [...this.cosequent, this.contains]

  this.symbols = {}

  if(_.isObject(props.in))
    this.cosequent.in = _.merge(this.cosequent.in, props.in)

    this.NumberedItem = {
      expr: "numberedItem",
      compatible: {
        in: { ...compatible },
        contains: { ...compatible },
        ruleOut: { ...compatible }
      },
      symbols: {
        opening: {
          "/[0-9]+\.\s/": ["md", "text2json"],
         "/[0-9]+\s{0,1}\)\s+/": ["text2json"],
       "/[0-9]+\s+/": ["text2json"]
      }
    },
    match: true
  }


  this.match = (input, el, db) => {

/* 

  Does a previous list item somehow share the same block?
    
  Conditions to be met (descending by priority — higher priority first):
 —  at least two cosequent items with an ascending order of numberic indexes exist at a given indentation level
 —  no elements with a shorter distance from data tree root are found in between two items
  ( ie.: left in tree ~ with a smaller indentation )

*/


// 1) Run a query (when an expression didn't issue tokens on its own)

    var previousListItem = db.get('tokens')
     .queryTx({ // … 
        expr: el.expr,
        parser: null,
        with: this.cosequent,

     // When retrieving token data ...
        ref: 1234,    // … shares one of the same containers
        tree: 12, // … is on level with a relevant token
        walk: 3,    // … will traverse tree of tokens N steps

     // Sorting results
        sort: "desc",
        limit: 1,
     // recent: 1 // shorthand for the above two parameters
        }).value()

/*


  etc
  

//2) or check cache (when expression) //  previousListItem = db.get('tokens.cache').find({ expr: el.expr, blocks: '!!!' }) // … matching IDs //.recent(1).value()//end = (previousListItem) ? previousListItem.index : 1//for (i = input.first ; i <= end ; i++){//if( matchingExpression ){//end++//db.get('parser.runtime').setBufferLen(this.expr) //[!!!] Pass expression/block token ID//  }} //db.get('parser.runtime').resetBufferLen(this.expr) // [!!!] Pass expression/block token ID // return { i } },  trie: {  }} // … Is extensible // if(_.isObject(props.NumberedItem.symbols)) NumberedItem.symbols = extendSymbols(NumberedItem.symbols, props.symbols)


  ...


*/

  return (

    <OrderedList componentLang="en">

      <Scoop>

        <H />
        <P />

        <OneOf resolve="auto">
          <Scenario>
            <Expr with="{this.NumberedItem}">
             {nodeChildren}
{ /*

  Expressions which are repeated should not overload the 
  Trie parser structure with recurrence. Rather, they should be 
  separately listed in a non-parsable category.

                <Scenario>
                  {children}
                </Scenario>
                <Scenario>
                  {children}
                </Scenario>
*/ }
            </Expr>
          </Scenario>

          <Scenario>
            <Expr with="{this.AlphabeticalItem}">
             {nodeChildren}
            </Expr>
          </Scenario>
        </OneOf>

      </Scoop>

    </OrderedList>
  )
}

```


```js fn.expressions.js
/*

## Expression function wrapper validates "arguments" and resolves subtypes

*/

const exprWrap = function( 
  exprFn,
  exprName,
  invokingTrie = {},

  inputSchema = [
 /*
    {__runtime: {}},
    {__subtype: {}},
    {__config: {}}
  */
  ],

  config = {},
  subtype = {},
  runtime = {}
){

  var err,
  params = (inputSchema.length)
 ? null
 : d_b.schemaObject(inputSchema)
      .addArgs({
        __config: config, 
        __subtype: subtype,
        __runtime: runtime 
      })
      .eval()


  type = () => {
    return exprFn( ...this.arguments )
  };

  type.name = exprName;
  type.invokeWith = 
     ( invokingTrie.length )
     ? invokingTrie : null;

  type.runValidated = () => {};
/* type.defineStem = null; */

  type.config = (config) 
 ? config : null;



  //
  // Wrap up the following processes …
  //

  const validateAndRun = function(
    runtimeArgs = null, 
    subtypeArgs = null
  ){

    //
    // Validate arguments & remap to input schema
    
    if( runtimeArgs || subtypeArgs )
      params.addArgs({
        __runtime: runtimeArgs,
        __subtype: subtypeArgs
      })
      .eval();
    
   (var errors = d_b(params, __err))
    ? return { __err: errors }
    : return exprFn( params.remap() ) 
  }


  type.runValidated = (
    runtimeArgs = null, subtypeArgs = null
  ) => {

    if( !inputSchema.length && !params )
      return exprFn( ...this.arguments )

    return validateAndRun( runtimeArgs, subtypeArgs ) 
  };


  return type;

} // … consider storing data state (eg. tokens and data references, checksum diff for comparison, ...)

/*

const stemExpr = (
    subtype

*/


//
// # Invoking a variety of types by arguments
// … storing and accessing subtypes of one expression
//
// ie. expressionType(), expressionType["subtype"]
//

```
