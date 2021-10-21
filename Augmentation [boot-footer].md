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


```javascript

function collections (jsonion_db) {

  var db = () => {
    var relations = {}

     //
    // A resource may be ascribed to multiple types and may be expressed in certain units

    relations.resource = [
      "resource_type",
      "resource_unit"
    ]

    return relations
  };

  // Search for definitions in folder
  db.schemaRoot = "./link-to/schema/"

  // Additional data node contexts
  var { tree, rhizome, circles } = 
        jsonion_db.augmentations;



/*

  # Needs
  - Tree structure of definitions, rooted in basic needs 
  ( overlapping with "wishes", "urges", "desires", "demands" )

    */

  db.need = [ rhizome ]



/*

  # Resorces
  - Tree structure of resource definitions

    */

  db.resource = []
  db.resource_type = [ tree ]
  db.resource_unit = [ tree ]


/*

  # Gestures
  - Symbolic patterns of recurring behaviors and interactions
  - Templates, personalized to a specific occasion

    */

  db.gesture = [ rhizome ]



/*

  # Leaps
  - They changed something
 
    */



/*

  # Collection: Values
  - Words which are meaningful upon truthfully reflecting shared, interpersonal experiences

    */

   //
  // Tree structure of value keywords

  db.value = []


   //
  // Metrics for measuring a certain effort / impact, tied to values

  db.value_observable = []


  db.value_model_contract = [] /*
  
  # Defined contracts

  - when a condition is met, words used by a given person / entity get opened for editing or are substituted as predefined

  */



  return db
}

```

```javascript

export function agencyCollections (jsonion_db) {

  var db = () => {
    var relations = {}

    relations.agency_needs = [
      "need"
    ]

    relations.agency_resources = [
      "resource"
    ]

    relations.agency_values = [
      "value"
    ]

    relations.agency_gestures = [
      "gesture",
      "agency_gesture_resources",
      "agency_gesture_transactions"
    ]

    relations.agency_gesture_transactions = [
      "agency_transactions"
    ]

    relations.agency_gesture_resources = [
      "agency_resources"
    ]

    return relations
  };

  // Search for definitions in folder
  db.schemaRoot = "./link-to/schema/"

  // Additional data node contexts
  var { tree, rhizome, circles } = 
        jsonion_db.augmentations;



/*

  # Collections: What we need, what we can offer, what we value (appreciate)

    */

   // List of needs (recurring, all-time)
  // ... described in text or with tags

  db.agency_needs = [ circles ]


   // Pool of available, disclosed resources
  // ... governed by a group of people with defined agency

  db.agency_resources = [ circles ]


   // Values we care of (enacted and appreciated)
  // ... narrowing in on preferred ways of 

  db.agency_values = [ circles ] 



/*

  # Gestures
  - Desired scenarios as descriptions of recurring patterns (of activities and resource flows)

    */

  db.agency_gestures = []


   //
  // Typical use of resources

  db.agency_gesture_transactions = []
  db.agency_gesture_resources = []



/*

  # Collection: Transactions
  - Occurence of variant of a gesture
  - Flow among giving and receiving entities
  - Meta data about an act of sharing

    */

  db.agency_transactions = []


   //
  // Resource and energy flow

  db.agency_transaction_resources = []


   //
  // Needs, fulfilled

  db.agency_transaction_need = []


   //
  // Values, enacted and reflected

  db.agency_transaction_value = []



  return db
}

```

That was some first person deep learning (2016-2017, 2020)

```jsonion schema.txt

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
