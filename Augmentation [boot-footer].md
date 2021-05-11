Generating ...
- Data models with a GraphQL responder, server-side
- Frontend data state, with action reducer bindings (what is that, React/Redux?)

```javascript gestrz.jsonion /*
//
// /*

 # jsonion stem ( data collections × augmentations )

 … A package to explain and resolve database operations & actions with. Written on a mission to produce a readable DB manifest file ...

[a x b] /\/


import { onionStem } from 'jsonion/augment-db'  // db.a
import { evaluateArgs, Abbr } from 'jsonion/util'

import bindActionTpl from 'jsonion/actionPreset'
    // Assign resolving functions to data state */


var Resolver = function( args = {}, dataRoot = onionStem ){

  var err, inputSchema = {  // Type validation
    augment: [ 'array' ], actions: [ 'array' ]
  },
  Abbreviate: [
  " a => A, m => M, z => Z ", // … list head, foot & mixins
  " augment => augm ",
  " actions => actn ",
  " relational => rel "
  ];

  return ( err = evaluateArgs( inputSchema, args ))
 ? inputSchema 
 : Abbr({
    
    augment: list( args.augment, dataRoot ),
    actions: list( args.actions, Pckg, Offline, ...y ),
    relational: ` #id, #node_id, #table_id `

  }, Abbreviate /* Up to speed */ )
}      // ˇ \\

```


```javascript schema.jsonion


      //    //    //    // Beware

     //   _.* => 1|.*  // Mashup

    //   __  => _     // Partials

   //    //    //    // Consideration


export default const collections = () => {
   var collection = {}

//
// ////    //*
 # Gesture-Reflection module definitions
//     /// with jsonion × ( node-rhizome )
*/


/*

## Needs
 - Tree structure of definitions, rooted in basic needs 
 ( in overlapping with "wishes", "urges", "desires", "demands" )

   */

collection.need = {}



/*

## Resorces
 - Tree structure of resource definitions

   */

collection.resource = {}
collection.resource_type = {}
collection.resource_unit = {}


collections.resource = { // Link up above collections
  'schema': {
    resource_type: ['./link-to/schema.json#internalRef', Rec.rel],
    resource_unit: ['./link-to/simplSchema.js#exportedVar', Rec.rel]
  },

  ...collection.resource, // <- repeat main resource

// # Add related data structures:
  ...collection.resource_unit,
  ...collection.resource_type

}



/*

## Gestures
 - Symbols of patterns, emerging from recurring (inter)actions and behaviours

   */

collection.gesture = { // Templates, personalized to a specific occasion
}



/*

## Leaps
 - A gesture becomes a leap when habits change
 
   Q: When does a 'leap' fit in node_stem, as a 'milestone' or a 'pointer' in content evolution flow?

   */



/*

 # Collection: Values
 - Words which are meaningful upon truthfully reflecting shared, interpersonal experiences

   */

collection.value = { // Tree structure of value keywords
}

collection.value_observable = { // Metrics for measuring a certain effort / impact, tied to values
};


collections.value_model_contract = {} /* Defined contracts
  
  # For example:

  - when a condition is met, words used by a given person / entity are ...
    replaced with a predefined correction
    or open for editing anew

*/



/*

  # Collections: What we need, what we can offer, what we value (appreciate)

*/

collections.agency_need = { 
// List of needs (all-time ; recurring higher)
// ... described in text or with tags (referenced by ID)
}
collections.agency_resource = { // Pool of disclosed resources
// Governed by entities (a group of people & circles) with defined agency
}; 
collections.agency_value = { // Values we care of (enacted and appreciated), narrowing in on preferred ways of doing
}; 
                                      


/*

  # Collection: Gestures
  - Desired scenarios - descriptions of recurring patterns (activities and flowing resources)

*/

collections.agency_gesture = {}
collections.agency_gesture_resource = { // Typical / average flow of resources
}
collections.agency_gesture_transaction = { 
  // Contains a set of transactions 
};



/*

  # Collection: Transactions
  - Occurence of a gesture or its variant - a transaction
  - Flow of ... among giving and receiving entities (meta data about an act of sharing)

*/

collections.agency_transaction = {}

// Resources and energies, which flowed while sharing
collections.agency_transaction_resource = {}

// Needs, fulfilled with this gesture
collections.agency_transaction_need = {}

// Reflected, enacted values (describing intangibles)
collections.agency_transaction_value = {}

```

That was some first person deep learning (2016-2017, 2020)


```tx2jsonion schema.txt

# Resource
jsonion { path } / Resource

 - name
 - type
 - description
 - energy
 - matter
 - unfinished

…/ Resource_Component
 - resource_id
 - referenced_resource_id

## Media resource
jsonion { path } / Media


## Gesture
jsonion { path } / Gesture-s

 - title
 - description
 - time
 - location
 ( create, publish, update | close, archive, unlist, delete )

…/ { Stem }(Gesture)

  …/ From
  - gesture_id
  - entity_id 
  ( submit | confirm | close, delete )

  …/ To
  - gesture_id
  - entity_id
  - confirmed
  - confirmed_time

  …/ Resource
  - resource_id


## Leap
{ path } / Leap-s

 - title
 - description
 - time_added
( add, update )

…/ Gesture
 - title
 - description


## Reflection
{ path } / Reflection-s

 - subject
 - story
 - time

…/ Value
 - reflection_id
 - entity_id
 - value_id
 - color_hex

…/ Context
 - reflection_id
 - value_id
 - entity_id
 - context_id

…/ Leap
 - reflection_id
 - entity_id
 - value_id
 - relative_value_id
 - ratio

…/ Involved
 - reflection_id
 - entity_id
 - confirmed

…/ Trusted
 - reflection_id
 - entity_id
 - trusted

```

```javascript jsonion/fn.index.js#3,14%
/*  //  //  //  //  //  //  //  //  //  //  

                           augmentation
                            collection
 index   priority           purpose key
 `````  ```````````     ```````````````````
   i  {  0, 1, … n  {  {keyPath}__{sortedBy}


//  //  { indexLoops, loop, trie }  //  */


var indexQuery = {
    sortedBy: {
    '{timestamp.update}': 'DESC'
    },
    rangeParams: {
      offset: 0, limit: 30,

    '{timestamp.update}': {
        a_: 0, b_: char(2^64)
      }
    },
    returnType: {
      data: true,
      captions: true,
      ref: true
    },
    config: {
      expire: {
        temp: +37,
        persistent: 7*24*3600,
      },
      priority: { highest: 1, lowest: 4, 
        deprioritizeUntil: 2, offloadAt: 3,
        locked: 0
      },
     //
      maxRangeLen: 5000,
      minIndexLen: 100
    }
}


var indexParams = {
  lastInsert: ['{t}', '{i}'],
  trie: {
 /* Optimized fast-access index
  … a derivate of query patterns (of frequent and relevant steps in loop) */
  },
 '{sortedBy__triePath}': {  // … inMemory cache (once)
    count: '{n}',
    store: {
      rootData: false, captions: false, refs: true
    },

    ranges: [
      [ '{a_}', '{b_}', '{a__utf8}', '{z__utf8}' ]
    ],
    rangeBySource: {
      0: [ '{a_}', '{b_}', '{a__utf8}', '{b__utf8}', '{i}', '{n}', '{indexObj__next}', '{indexObj__prev}' ],
    },

    stepPolynomial: [ // … keyword density (traversed)
      { 
       '{routeMatch}': [ '{avgMatchRatio}', '{a__utf8}', '{b__utf8}', '{i}', '{n}', '{lastQueryAt}', '{queryFrequency}' 
        ],
      },
    ],
    lastQueryAt: '{timestamp}',
    expire: -1
  },
/*
  { … },
        */

  methodsWikipedia: { 
  '{functionPath}': '{Wikipedia__URL}' 
  },

  insertedKeys: [ // … unprocessed inserted rows
    { t: null, i: null, key: null },
  ]
}

```

I'm here to help you. Goodbye
