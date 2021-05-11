*Upon compiling, the contents of this file are rendered to a compact form and thus become unreadable (without a source map) ... Code, which is assigned to namespaces already declared in this package, is removed; any comments in code are removed, also.*


## Shorthand syntax of 'jsonion'

Devising a shorthand syntax to modify with a JSON dataset structure. Maybe a meaningful tool to learn with (how to work around parsing processes).

```js
/*


## Resolving unique paths among a variety of data types
   ie. ".status_updates # => fbPosts"


 ` . ` List item identifier: precedes an encoded string (of defined types)


 ` # ` List item(s), identified by a designated index key

   - Consequent list item number (index for efficiency)
   - Contained key value -- easily matched
   ( eg. hashtag, encoded timestamp, identifier key value, namespace key value )


 ` => ` Remap directive (clone data, or create an alias)

   A mapping key (literal) could make available the type of items, nested in an array, in a schematized database collection.


 ` {{ L.function }}: {{ R.3 }} ` Key-value variable template (a special case)

   - Right-hand variable contains a string, number, a function or an object (possibly an internal reference)
   - Left key handle will accept any one of the above types; restrictions and/or transformations will apply in case of a returned object with an exceeding depth



   "… on …"[ion]  ·  [on]"… in …"([o])  ·  [on]"… io …"[n]
    # jsOnIon, jsOnion, jsonIon, JSonIon, JSONIon, SONion
   // /  //   //   //   */

             /* 
            / `\
           ´    ``
     Sort      
   of                peeling
  a                      loop …
     
   \           
    `         .          /
              #         ´
```

```js fn.index.js
/*  //  //  //  //  //  //  //  //  //  //  

                           augmentation
                            collection
 index   priority           purpose key
 `````  ```````````     ```````````````````
   i  {  0, 1, … n  {  {keyPath}__{sortedBy}


//  //  { indexLoops, loop, trie }  //  */


indexLoops = function( jsonionPath,
        
      sortedBy = indexCfg.sortedBy,
   rangeParams = indexCfg.rangeParams,
    returnType = indexCfg.returnType,
        config = indexCfg.config
){

  var next = ( typeof jsonionPath.next === 'object' )
              ? jsonionPath.next : null

  if( next ){
/*

 [
   {indexObj}, {i}, {order},
   {offset}, {limit},
   {returnType__obj},

   {sortingKey}, ({rangeParams__obj}), {order}, … ;

   {keyPath}, {persistentIndex_expire},
   {priority_a}, {priority_b}
 ]


 */ var indexObj = next[0], i = next[1], order = next[2], limit = next[4], priority = next[-1], offset = next[-2],

        sortingKeys = ( next.length > 6 )
                       ? [] : [] // ...

  } else {

    var indexObj = null, priority = 0,

     sortingKeys = ( 'string' === typeof args.sortedBy )
                    ? args.sortedBy.split(",") : null,
       indexKeys = ( typeof args.sortedBy === 'number' ) 
                         ? args.sortedBy + 2 : 2

  if( keyIndex ){
    if( typeof args.sortedBy === 'array' ){

      sortingKeys = args.sortedBy
      // ...

    } else
    if( typeof sortingKeys ){
  
      // ...
  
    } else
    if( typeof ){

      // ...
      
    } else {
    
      // ...
    }
  }

  
  while( condition == true ){
    var index = jsonion_db.i[nPriority][ onionPath.0 ]

    for( i=2 ; i<index.length ; i++ ){
      index[ i ]
    }
  }
  

  if( final ){

    return arrStream.push(
      function(final){
        return sumFunction(final)
      }
    )

  } else {

    return arrStream.push(
      function(next = next, offset = -1, limit = -1){
        if( offset >= 0 )
          next[3] = offset
        if( limit >= 0 )
          next[4] = limit

        return indexLoops(next)
    })
  }

},



registerIndex = function( onionPath, sortedBy ){
  var returnType = {
    data: false,
    captions: false,
    ref: true
  },
  cfg = indexConfig
},

updateIndexParams = function(){},

indexData = function(
  onionPath, rangeParams = {}, dataNodes = [], indexObj = null
){
  
  if( dataNodes.isArray() && dataNodes.length ){
    dataNodes.forEach( (node) => {
      var results = inOnion( onionPath, rangeParams )
    })
  } 

  return [ok, indexObj]
},

sortIndexBy = (keyPath, sortAttr = []) {},

unsetIndex = function( keyPath, sortKeys = null ){},

```


```javascript jsonion/tx2json.js

   //
// Helpers in functions
 //

// export { loop, trie, hashIdQuake, parseSchemaObj, abbreviate }


var loop = (needle, refObj, predicate, pointer = -1, limit = null) => {
  var char = 0, int, float,
  step = stepPredicate({ i: pointer, n: refObj.length }),
  stepPolynom = {
    [char]: [
      performance.now(), new Object({ i: pointer, step: step })
  // 1) Get through to an optimal schema [!!!]
    ]
  }

  while( i ) {
    item.codePointAt(char)
 // … expect a ping-pong with stepPredicate function
  }
},


/*

 ##
   Learning examples needed 
 ( jstr.co )

 {hashtag}-{entityId}

 [linkTitle](resolvingUrl)

 */
 

trie = function( trie, stringList = {}, 
  delimiterList:{},
  args = {cycle: 0, testPrefix: []} ){
 /*…*/
  var charIndex = { __len: [0, 0]} },
      maxLength,
      loopLimit = [ 
       {t: trie.length},
       {s: stringList.length},
       {d: delimiterList.length}
      ].sort(function(a,b){
        return (a[0] > b[0])
      }),
      perf = [performance.now()] // … while, and after

   if(typeof strings === 'string')
     strings = { [strings]: '{realizedLength}' }


     //
  // 1st "cycle": revisit "charIndex"
   //
  for( i = 0 ; i < loopLimit[0][0] ; i++ ){

    if( trie.length >= i ){
      var key = Object.keys( trie, i ), 
          char = key.charAt( args.cycle ),

      charIndex.__len.0 += key.length
      if( charIndex.__len.1 > key.length )
        charIndex.__len.1 = key.length
      
      charIndex[ char ][i] = trie[i]
      charIndex[ char ] = 
     (typeof charIndex[ char ] === 'undefined')
      ? 1 : charIndex[ char ]++
    }

    if( strings.length >= i ){
      if( 'string' === typeof strings[i] ){
        strings[i] = ('number' === typeof strings[i]+0)
                     ? strings[i]+0 : 0
      }
      if( args.prefix ){
        for( i = 
      }
      var char = string.charAt(i)
      if( typeof charIndex.[ char ] !== 'undefined' )
        charIndex.__r[ char ] += 1
    }

    if( delimiters >= i ){
      var key = Object.keys(trie, i)
      for( n = 0 ; n <= cycle ; n++ ){
        charIndex['d'][ char ][i] = delimiters[i]

        if( typeof charIndex.__r[ char ] !== 'undefined' )
          charIndex.__r[ char ] += 1
      }
    }
  }  //
  // Last cycle: realized delimiters and string subparts
   //

  charIndex.t.__len.0 = charIndex.t.__len.0 / trie.length
//  charIndex.result = d_b.sortObj( charIndex.__r,
//    function (prev, next){ return (prev > next) })
  
  if( charIndex.result.length )
    
},


parseSchemaObj = function( object, inputs=null, nested=0 ){

  var objectType = (object.isArray()) ? 'array' : typeof object,
      isSchemaObj = false,
      x = null, e = null, // … expression or error (validate)
      pointer, err = {},
      result, partials;


 // Case: input into a variable
  if( objectType == ('string' || 'number') ){

    if( inputs = (inputs.isArray()) ? inputs[0] : inputs )
      return runner( object, 'i' ).checkType(inputs, std)
    else
      return runner( object ).getVarName()


 // Case: array input to an array of schema keys
  } else
  if( object.isArray() && inputs ){
    pointer = 0
    
    for( x = 0 ; x < object.length ; x++ ){
      if( ('$' || '{') == object[x][0] ){
        
        e = runner( object[x], 'i' )
            .checkType( inputs[pointer], std )
        
        if( typeof e.err === 'undefined' ){
          pointer++
          resultObj.push( e )
        else
          err[ x+1 ] = e.err
          resultObj.push( object[x] )
    }}
    return (!err.length) 
    ? resultObj : d_b({err: err}, resultObj)


 // Case: array input to an object with schema keys
// … objects, nested further within arrays, don't process)
  } else
  if( inputs.isArray() && objectType == 'object' ){
    var condition = true, i = 0
    
    while( condition ){
      if( ('$' || '{') == Object.keys(object, i).charAt(0) 
       && (e = runner(object[i]).checkType( inputs[0] )) 
      ){
        object[ i ] = e
        inputs.shift()
        i++
      }

      if( i > object.length || inputs.length == 0 )
        condition = false
    }


 // Case: input object remaps values to schema keys
  } else
  if( 'object' === (typeof inputs && objectType) ){


 // Case: preprocessing an object (to accept array input)
  } else
  if( !inputs && objectType == 'object' ){

    return { '__preprocessed': resultObj }

  } else {
    return d_b({err: 'type_mismatch'}, object)
  }
},


abbreviate = function( array, abbrTrie = {}, abbr = {} ){
   array.forEach( (str) => {
     abbrTrie = intoTrie( str, abbrTrie )
     abbr[( getLeafPath( str, abbrTrie ))] = str
   }
 },
 
 
hashIdQuake = function( ){
 // … abbreviated namespace keys in conjunction with hashId suffix
}

```

```js Facebook.jsonion
{
'.{propertyName} #': { // … looking for Facebook 'status_updates'
   This: "post",
__allOf: [], // … is this the dataset we're looking for?
__oneOf: [],
   map: ['timestamp', 'full_name', 'action', 'post', 'event_name', 'place_name'],

 '.title': {
    Remove: true, // … task executed after jsIons react, while finally mapping to JSON tree

     // jsIons transform data state (where RegExp condition !false)
    '/(.*) shared an event./': { 
       As: ['full_name'],
      'post.action': 'event_shared'
    },
   '/(.*) was attending (.*) at (.*)./': {
       As: ['full_name', 'event_name', 'place_name'],
      'post.action': 'event_attending'
     }
  }
},
/*

Like dissoluted ions... The encoded parsing rules enter and react with substances kept in a medium's data structure; so to harness and map modified contents into a resulting JSON data tree.

*/
}

```

```javascript jsonion/augmentation.preprocess.js
//

d_b.augment.renderProps = {

  json: () => {

  },
  sql: () => {

  }

}

´´´
