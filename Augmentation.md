# V32SVGn × jsonion
… special attention afforded to a good read; the roll-out script.

Aligning SVG with modern reactive data sources. Replacing .jsx polyfills with good vibes, plug-and-play.


## Resolving unique paths among a variety of data types
   ie. ".status_updates # ({measureOfUniqueness}) => fbPosts"


--- ---———

```js jsonion              /* … document-wide */

                                       /* ´´´
                                       ´´´ */
     //           bbvb.             
 */// A vagrant representation jizzlock  //
    //                                  //     


  /*
*/ jsonion_db = {  // … into the cross-origins
 //

  _: {  /*   Operations RAM   */  },
  i: { /* Index of key paths */ 0: {}, 1: {} },
  ctx: {}, ctxProxy: {}, dbProxy: {},

  hydrate(jsonion_db){
    jsonion_db.forEach( (key, object) => {} )
  },
  escapeTrieKeys( __reserved ){
    (typeof __reserved === 'object')
   ? trie( __reserved )
   : reservedNames.forEach( (val) => {} )
  }
// … Setter methods
},


/* ´´´  "Augmented Data, GraphQL & React/Redux"
´´´ */ 
    route = (objTrie, action, params, resolver)
  => { return resolver(action, params, objTrie)
};


  //
// In-context components (access with adapters)
 //

var hydrateOnLoad = () => { 

 (typeof window.localStorage !== 'undefined' && ( var state = window.localStorage.get('jsonion.hydrate')) )
  ? jsonion_db.hydrate( state )
  : jsonion_db.hydrate(
 {
  ctx: {
    localStorage: {},

   "svg#drop-in": {
     "{keyPath}": ()=>{},
     "{countOf.documents}": "{N}"
    },
   "svg#snow-menu": {
      cache: "{N}"
    },
   "svg#bevelDoor": {"{keyPath}": "{N}"},
   "svg#thisScarf": {
     "{keyPath}": "{N}",
     "EventSource.lastInsert": "{timestamp}"
    },

   "html#instagram.com/leapgesture": {
     "ctxProxy.site.Instagram": ()=>{},
     "countOf.posts": "{N}",
     "EventSource.lastInsert": "{timestamp}"
    },

   "html#facebook.com/santappl": {
     "ctxProxy.api.Facebook": ()=>{},
     "ctxProxy.site.Facebook": ()=>{},
     "countOf.posts": "{N}",
     "EventSource.lastInsert": "{timestamp}"
    },
  },
  ctxProxy: {
    api: {
      Facebook: {
        router: "./public/facebook.jsonion",
        oAuth: "./local/oauth.facebook.json",
        resolver: __GraphQL
      }
    },
    site: {
      Instagram: {
        routeMap: "./public/instagram.jsonion",
        resolver: __xhtmlResolver
      },
      Facebook: {
        router: "./public/facebook.jsonion",
        resolver: __xhtmlResolver
      }
    },
    cache: { "{keyPath}": {RabbitMQ: "{N}"} },
    components: { 
     "./public/": {
       "snow-menu.svg": ["{keyPath}"],
      }
    },
    stores: {
     "./public/": {
        "snow-menu.svg": ["{N}"]
      },
     "./mirror/": {
       "thisScarf.svg": ["{N}"]
      },
    },
  },
  dbProxy: {
    sqlite: {"{keyPath}": "{N}"},
  },
  i:{
    trie:{
      route: {},
        db: {__:{ i:{}, o:{} }},
      type: {__:{ reserve:{} }},
      action:  {__:{ list:{} }},
      schema:  {__:{ list:{} }},
      keyword: {__:{ objects:{} }}
    },
   "{chr.0}":{
     "{keyPath}": {},
     "{keyPath}__{sortedBy}": {},
     "{tableKey}": {},
     "{tableKey}": {},
     "{collectionKey}": {},
     "{collectionKey}__{sortedBy}": {},
     "{augmentationKey}": {},
     "{augmentationKey}": {},
     "{purposeKey}": {},
     "{purposeKey}__{sortedBy}": {}
    }
  },
  _:{
    localStorage: {
     "jsonion.proxy": { "{tabIndex}": "{ ~~ }" },
     "jsonion.hydrate": "{jsonion_db}"
    },

    proxyResolvers:{
     "this.tab": "{tabIndex}",
      ctx:{       
        localStorage:"jsonion.proxy"
       // … one URL/file open twice
      },
      cache:{
        NodeJS:"localhost:3000/jsonion/{keyPath}"
      },
      stores:{
        BrowserAddon:"{tabIndex}",
        NodeJS:"localhost:3000/jsonion/{keyPath}"
      },
      components:{
        BrowserExtension:"{tabIndex}"
      },
      dbProxy:{
        NodeJS:"localhost:3000/jsonion/{keyPath}"
      }
    }
  }
} )};



/* {routeTrie: {__reserved:{}}; var { Integer, String, Number, Float, Array, Object, ArrayOfStrings, ArrayOfNumbers, ArrayOfObjects, Timestamp, HashId, Name, Names, Email, PostAddress, PhoneNumber, contains, oneOf, try, optional, caseInsensitive, partialMatch } = jsonion_db._.typeTrie = jsonion.escapeKeys( String, Number, Float, Array, Object, optional ) */

```


```js instagram.jsonion
//
// Simple interpretation of Instagram routes
{
  sourceParams: {
    serviceDomain: "instagram.com"
  },
  site: {
   "http[s]*://instagram.com/": {
     "__reserved": ["tv", "about"],

     "p/": "{postId}",
     "(.*)": { __oneOf: [ 
       "{pageId}", "{userId}", "{entityId}"
      ]}
     // … augmented collection(s) to check index for a matching key alias
    }
  },
  api: {},
  router: {
   ".entityId": "__fnc",
   ".userId": "__fnc",
   ".postId": ()=>{},
   ".pageId": ()=>{},
  }
 // … what next (map function bindings, somehow)
}
```


```js types.agents.js

export const agentTypes = {
  user: {},
  entity: {}
}

```


```js fn.index.js
/*  //  //  //  //  //  //  //  //  //

                          augmentation
                         collection
 index    priority      purpose
 `````   ``````````    `````````````` `````
   i  {  0, 1, … n  {  {keyPath}__{sortedBy}


//  //  { indexLoops, loop, trie }  */


var searchParams = { // ...
  match: {
   '{keyPath}': '{value}',
   '{augmentation}.{keyPath}': '{value}',
   '{relatedCollection}.{keyPath}': {
      __oneOf: {
       '{keyPath}': {__oneOf: ['{value}']}
    } }
  },
  matchCase: [
  {
   '{keyPath}.{key}': {
     '{key}': '{value}'
    },
   '{augmentation}.{keyPath}': '{value}',
   '{relatedCollection}.{keyPath}': {
      __oneOf: {
       '{keyPath}': {__oneOf: ['{value}']}
    } }
  }
  ],
  range: {
    offset: 0, limit: 30,

   '{timestamp.update}': {
      a_: 0, b_: char(2^64)
    }
  },
  flags: [__caseInsensitive]
}

var indexCfg = {
  sortedBy: {
   '{timestamp.update}': 'DESC'
  },
  rangeParams: {
   '{timestamp.update}': {
      a_: 0, b_: char(2^64)
    }
  },
  returnType: {
    srcData: true,
    partial: true,
    caption: true,
    ref: true
  },
  config: {
    expire: {
      temp: +37,
      persistent: 7*24*3600*30,
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

```


```js db.users.js
/*

 # Package: 'jsonion-users'

 - Augments any database of users, thus keeping track of user records across multiple services

 - Pseudonyms in users' credentials are expected to mask real identity; thus decryption key subparts are shared with peers as a secret knot (= DB rel.) tying in public accounts (to reveal with certainty at a later point in own name & by assembling the dispersed, unlocking private key)

 */

import { Index, Relation AS Rel, Unique } from './types.db'

import { 
  Integer, String, Object, Timestamp, HashId,
  Name, Names, Email, PostAddress, PhoneNumber,
  optional
} from './Types/'

import { schemaMixin } from './render.schema'


const userSchema = { __key: "Users #", ...[Index`

#{id} #{userId} #{firstName} #{surname} ##{pseudonym} ##{email}

`], // … Index of users' data will contain first-tier and second-tier values only upon a query is delivered.

 
__oneOf: [
  id: { type: Integer, ...unique },
  userId: { type: HashId, ...unique },
],

  ...[ schemaMixin.mapActions( Timestamp, 'create', 'update', 'close', 'remove' ) ],

  pseudonym: { type: String, synonym: ['username', 'account handle'] },

__accounts: { _: { // …
  //  //  //  //  //
} },

__contacts: { _: { // …
       emails: { flags: optional, type: [Email] },
    firstName: [ optional, Name, 2 ],
     fullName: [ optional, Names ],
      surname: [ optional, Names ],
       cities: [ optional, [Names] ],
  homeAddress: [ optional, PostAddress ],
 phoneNumbers: { type: Object, 
     '{type}': [ PhoneNumber ], flags: optional },
  },
  __synonyms:  ['contact details', 'personal info', 'whereabouts'] 
},

// languages: { _: language, ...rel.id },

  ...[ schemaMixin.mapActions( Stateless, 'delete') ]

}

```


``` db.circle.js [!!!]
//
// ## Circles
//  … groups of people with common interest
//
/* car userMembership = Circle.members.getById({
   circleId: null, userId: null
}) */


var Circle = jsonion.stem( 'circles #', {
__alias:['circle','group++s'],__abbr:["crcl"],


__id: { circleId: [oneOf, Integer, String] },

__actions: [
    { key: [oneOf, '{action}', '{Action}'],
      val: [oneOf, Boolean, Integer, String] }
  ],


 // List of members
  members: { _: {
    __id: { userId: [oneOf, Integer, String] },

    __actionPrivileges: [
    { key: [oneOf, '{action}', '{Action}', '{privilege}_{action}', '{privilege}{Action}'],
      val: [oneOf, Boolean, Integer, String] }
  }, 
  __aliasKey:["member"], __synonym:["commoner","user"] },


 // List of languages in use
  languages: { _: [
   { 
        
   },
  ],
  __aliasKey:["language"], __synonym:["lingua"] }
  // … which members of a group use to communicate with -- with insights mapped to metrics, possibly to a GraphQL/React templates (from aggregates, statistical indexes and derived coefficients)

});


Circle.actionList = [
 "join", "invite", "decline",
 "publish", "comment",
 "unpublish", "leave"
];


Circle.augment( 

  d_b.link({
   "circles":{
      cache:{
       "{source}":{
         remap: {/*...*/} },
      }
    }
  }), 

  d_b.regActions({
    __actionTpl: null,
      j: ()=>{},
    dec: ()=>{},
      i: ()=>{},
      p: {$: { encircle: ()=>{} }},
      c: ()=>{},
   refl: ()=>{}
  })
);



/*  //  //

##  Entity
 …  a limited group of people who delegate agency to enact common vision in its own name, to actors on a role

*/


var Entity = jsonion.augment( 
  'circles -> entities', 
 /* ~= Circle.augment */
{
  __alias: ['entity'],

 // Raising awareness of own conduct ... undefined
});


Entity.augment( 
  d_b.link({
   "entities":{
      cache:{
       '{source}':{
         remap: { }},
      }
    }
  }),
  d_b.regActions({
     "reflect": ()=>{},
       "value": ()=>{},
        "vote": ()=>{},
      "curate": ()=>{},
   "represent": ()=>{},
      "manage": ()=>{}
  })
);

```


```json schema.org.jsonld
{
"@context": {
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "schema": "http://schema.org/",
    "rdfs:subClassOf": { "@type": "@id" },
    "name": "rdfs:label",
    "description": "rdfs:comment",
    "children": { "@reverse": "rdfs:subClassOf" }
  },

// ...
//

}
```


```js actionPreset.js
//  //  //  //  /*

              import actions__en from './actionDict'
     import { redux, json, sql } from './render.actions'
  import { standalone, jsonion } from './render.augmentations'
        import { d_b, parseActions, std } from 'jsonion'

    /\/
   // \
  // ...

 ##  Map actions to data schema

/\/  export default preset; */
     var { caseInsensitive, partialMatch } = std

//  //  //  //  //  //  //  //

// … [in-dev]
//

var preset = ( source = {
  app:{}, pckg:{}, api:{}, offline:{}
 }, //
  /*.*/  dictionaryTrie = actions__en, tpl = null
)   =>  {


  if( !tpl )
 (
  var { 
    jsonion, redux,
    json, sql
  } = d_b.augmentation.renderProps, 

  tpl = {

  '{0}': [ 'collection', 'object', 'table', caseInsensitive ],
'{key}': { '{0}':{'Name': $}, partialMatch.left },

__augment: [
    jsonion.embed`{ keyPath }.{ augmentation }`,
    jsonion.embed.sql`{ tablePath }_{ augmentation }`
  ],
  id: [ 'id', 'Id', json`{key}Id`,
    sql`{key}_id`, json`{key} # .[Ii]d`,
    json`{key}.[Ii]d`, '...relation' ],
  relation: [__match:[__index, {__gte: 1}]],
  user:[ 
    json`{enacted}By`, sql`{enacted}_by` 
  ],
  entity: [
    json`{enacted}As`, sql`{enacted}_as` 
  ],
  agentType: [
    json`{enacting}{AgentType}`, sql`{enacting}_{agentType}`, 
    json`{enacted}By{AgentType}`, sql`{enacted}_by_{agentType}`, 
  ],
  timestamp: [ {'/[Tt]/':{ime:{stamp:$}}}, json`{action}At`,
    json`{enacted}At`, json`{key}Time`, json`{action}Time`
    sql`{key}_time`, sql`{action}_time`, sql`time_{enacted}`,
    sql`{action}_at`, sql`{enacted}_at` ],
__try: { timestamp: [ '/.*[Dd]ate.*/', /.*[Tt]ime.*/ ] },
__call: [ redux.allCaps`{action}_{tablePath}` ],
     // {type}: [ custom definitions ] … #{shortKey} sort, filter
 }),


  actionList = {
    template: tpl,
    language: dictionary.languageCode['ISO 639-1'],
    dictionary: dictionaryTrie, // Unload memory while parsing ...
    ...source
  }


  //
 //  Compile and merge with "jsonion" database process
// ( a prepocessing method, reusable at runtime )

  merge = function (

//  Main input: calculate "difference" and "merge"
      actionSource, dictionaryTrie, tpl,

//  Main object to merge into
      actionList,

//  Multilingual Trie suffix parser
      resolveSuffix = resolveSuffix__en,

//  Core process handle (optionally)
      ctxKey = null, // accessKey = {} // … if needed, besides

  ){
    
    var { map, index, diff } = 
      parseActions( actionList, resolveSuffix ){

    return d_b.coreProcessMerge( ctxKey, {
     'key': map,
     'key.tpl': d_b.tpl,
     '__index': { 'key': index }
    })
  },

  actionList.__merge = merge;

  return actionList 
}


  //
 // \
/* ...parsingFunction procedure
  ( a multilingual feature )

   ```verb-tense // … what's expected in outcome array

  1 infinitive
  2 past simple

 >> …  await resolveSuffix <<
     ( language dependent )

  3 present-continuous

   ``` => {1}: [ ()=>{}, {3}, >> ... << , {2} ]

*/  function resolveSuffix__en( wordList ){

}

```


```js db.stem.js
/*  //  //  //  //  //  //

 # Schema of a data node
 … a uniform way of accessing a data node's context through time

 - JSON objects, consistent across data sources & store implementations (in-memory Key-Value stores & message queues, NoSQL databases)

 - Compatibility with SQL is planned as an effort for efficiency: sliced views for serving a variety of aspects; relational data model is aligned with indexing; generating tables for augmented collections at peak demand

//  //  //  //  //  //  */

import { String, Array, optional } from './Types/'
import { schemaMixin } from './render.schema'

 
jsonion.stem.prototype.__pointers = {
  __enumType: [__optional, __oneToMany,
    "ID", "TIMESTAMP", "RELATIONAL", "REF", "REVERSE-REF", "CAPTION", "MIXIN", "AUGMENTATION"
  ],
  action: {},
  valid: {},
  time: {},
  src: {}, rels: {},
  augm: {}, embed: {},
  stats: {}, chksum: {},
  subset: {}, private: {},
  compute: ["__{keyPatn} -> .{keyPath}"]
},

jsonion.stem.prototype.__relationType = {
  dataNodeStem: {
    __enumType: [__optional, __oneOf,
      "TRANSLATION", "STEM", "MERGED", "ROOT", "MAIN", "MIRROR", "CAUSE", "EFFECT"
  ] },
  dataTreeNode: {
    __enumType: [__optional, __oneOf,
      "SYNONYM", "SYNSET", "HYPERNYM", "HYPONYM"
  ] }
}

jsonion.stem.__pointersMapTpl = { // purpose
  actions: [
    ".actn", ".actions"
  ],
  timestamps: [
    "#/actions", [".time-stamp-s", ".t", ".tn"]
  ],
  relations: [
    "{related}",
    ".link-s",
   [".tag-s", ".hashtag-s", .#"]
  ],
  src: [
    "{sourceParams}", "{sourceServiceParams}",
    ".mirror-s",
   {
    ".blockchain": [ 
      ".{chain}*", [[".tx*", ".txId"]],
      ".blockchain*", ".chain*",
      "*Host", "*Service", "*Type", "*Name", "*Addr-ess",  "*URL/i" ]
   },
   [".dht", ".distributedHashTable"]
  ],
  augmentation: [
    ".augm-ent-ation-s", ".ext-ension-s"
  ],
 "validate-validation": [
   [
    ".signatures", ".cosigned", ".cosigning", ".undersigned", ".undersigning"
   ],
   [".proofOf", ".proofOfWork", ".proofOfStake"],
    ".reactions"
  ],
  stats: [
    ".stat-s", ".statistic-s", ".statistics", ".aggregate-s", ".aggregation-s" 
  ],
  chksum: [
    ".cksum", ".chksum", ".checksum-s", ".digest", ".hash-es", ".hashchain", ".merkle", ".merkleTree"
  ],
  subset: {
    ref: [
     [".ref-s", ".references"],
      ".contains", ".annotations",includes",  ".included", ".includesData"
    ],
    view: [
      ".captions", ".views", ".partials", ".partialViews", ".rootData", ".rootDataNodes", ".rel", ".related", ".relatedData", ".relatedDataNodes"
    ]
  }
};
 

jsonion.stem.prototype.__schema = () => {

  var { mapActions, mapObjects, head, main, foot } = schemaMixin
  
/*

  var {
    sourceServiceParams: ...
    embedKeys: embed, subsetKeys: subset,
  } = this.arguments[0]
  
*/

  return (
 {

  stemId: { type: String, unique: true }, 
 // [BranchTag] × [StateActual] × [ChainHash]

 // Determined main branch stemId (hash)
  main: [String, optional],


  ...[ mapObjects('{ internalPath }') ],
  ...[ mapObjects( sourceServiceParams ) ],


  language: [ String, {__type:[__oneOf, __caseInsensitive, "lang", "langISO", "langId", "langCode", "language", "languageISO", "languageId", "language_code", "languageCode", "ISO-639-1"]} ],

 // Branch identifiers (alphabetically ordered list)
  branch: [
    optional, [String]
  ],

  ...[ mapActions('create') ],

  ...[ head ],
  ...[ main ],
  ...[ foot ],

 // A published state (multiple content versions and translations may be stored in a document's state, or with related data nodes)

  ...[ mapObjects( embedKeys )],
  ...[ mapObjects( annotationKeys )],
  ...[ mapObjects( validationKeys )],

  ...[ mapActions.stateless('modify', 'delete') ]
 })

});


/*

##  Augmentation type: 'rhizome' 
 …  is a catch-all category for indirectly and potentially related contents... co-evolving, concurrent, ambiguous and weakly correlated; in scrambled codification

*/
//  import { rhizome_related_node, rhizome_by_type, contained_relation_types, agent_relation_types, external_relation_types } from 'schema';

//  Storing content in multiple languages with translation mixins
//  import { state, draft, translate_request } from 'schema'
//

```


```gql d_b.stem.gql

query viewDataRoot( findBy: [StemPath], 
__id: Int, __keyPath: String, __blockId: Int ): [RootDataNode]

type RootDataNode { ${cached} ${dataStore} ${JSON} ${XML} } # oneOf

query viewStems( findBy: [StemPath],
 __id: Int, __keyPath: String, __blockId: Int ): [StemAugmented]

type StemAugmented {
 ${stem}
 ${augmentations}
 __included: Annotations, __y: [T]
}

fragment augmentations {
 ${eventSource} ${translateRequest}
 ${event} ${reflections} ${highlights}
 ${leap} ${gesture} ${values}
 ${tree} ${rhizome} ${related}
 ${circles} ${permissions}
 ${mirrors} ${blockchain} ${dht}
}

input StemPath { ${stemPath} }

fragment stemPath {

 # [BranchTag] × [StateActual] × [ChainHash]
   stemId: String

 # Determined main branch stemId (hash)
   main: String

 ${internalPath}
 ${sourceServiceParams}

   language: [LangCode]          # ISO 936-1
   branch: [BranchTag]   # Branch identifiers (alphabetical list)
}

fragment stem { ${stemPath}

 # Branch Head: Current state of data, as published (multilingual)
   state: [StateActual]

 # Audit Trail: Modifications to data node state (History & Draft)
   chain: [StateChain]
}

type Annotations {

 # Complete data nodes
   nodeList: [StemAugmented]   

 # Partial data node views
   captions: [StemCaption]
   rootData: [RootDataNode]  # … unaugmented view

 # Internal references (with 'jsonion')
 __refs:     [StemRel]         

 # Links to external mirrors
   mirror:   [MirrorNode]

 # Links to external services
   linked:   [SourceNode]
}

query nodeChain( languageCode: String, machineTranslation: Boolean,

 # Pagination offset start
   stemId: String,

 # Pagination: Returned items count
   limit: Int, count: Int, next: Int, n: Int, prev: Int,

 # Is there an external source listed?
   source: Boolean, url: Boolean, domain: String,

 # Is there a source of data validation and backup?
   mirror: Boolean
   blockchain: Boolean
   dht: Boolean

   findBy: [StemPath]

): [StateChain]



type StateActual {
 
 # Data object
}

type StateChain {

 # Modifications to RootDataNode view
 state: Diff

 # Modifications to StemPath

 # Modifications to ${augmentations}

}

type Diff {
   add: [newFields]
   mod: [Diff]
   remove: String
   n: Int
 ${checksum}
 ${timestampFormatted}
}

type newFields {
  key: String
  val: String
  len: Int
}

type Diff {
  key: String
  diff: String
  n: Int
}

fragment checksum {
 ${md5}
 ${sha256}
 ${crc}
 ${rsaLatest}
}

fragment timestampFormatted {
 ${timestamp1970}
 ${dateTime}
}


type StemCaption { # Partial data node views

}

type MirrorNode { # Links to external mirrors

}

type SourceNode { # Links to external services

}

type StemRel { # Internal references ('jsonion')

}


enum TreeType {

  # Category, …
  HYPERNYM

  # A set of synonymous data nodes (of ~equal proximity)
  SYNSET

  # A synonymous data entity
  SYNONYM

  # Subcategory, …
  HYPONYM
}

enum RelationRhizomeType {

  # Translations of a data node
  TRANSLATION

  # Attributed its immediate roots in a related data node
  STEM

  # Merged into a related data node
  MERGED

  # Attributed its origin to a related data node
  ROOT

  # Declaration of main branch
  MAIN

  # Mirroring another data node (or part of it's branches)
  MIRROR

  # Has traced and recognized effects to a related data node
  CAUSE

  # Has recognized its effect with a related data node
  EFFECT
}

```


```js db.highlight.js
//
//  Type 'highlight': in-text markups and referenced contents (attachments)

const highlight = {

  //  pointer_field: String,
  //  pointer_fulltext: Integer,

  //  eventsWithState: ['create', 'remove'],
  //  events: ['delete']
};

```


```js db.review.js
//
//  Type 'reflections': enables commenting contents, giving ability to attach reflected realities during evolving

const reflection = {

 // __eventStateful: actions('create', 'remove', 'mutate'),
//  __eventStateless: actions('delete')

}; // … with highlights in reference


//
//  Type 'reports': enables reporting inappropriate contents, falsifying invalid data - both in accord with specific circles

const report = {

  //  eventStateful: ['create', 'remove', 'resolve', 'close'],
//    eventStateless: ['delete']
};


//
//  with any augmented collection
//  parse pointers to data, markup syntax, ...
//

```


```js db.eventsource.js
//
//  As standalone data collections

var evSrc = jsonion.collection( "EventSource #",
 {
  __abbr: "evSrc", // … to "_.abbr"
  __embedKeys: jsonion.collections.__embedKeys
 },
 [
  uid`#id`, index`##stemId ##timestamp ##action ##enactedBy ##enactedAs`,
  stats.count`(.{action}) -> countOf.{action}`
  checksums.orderKeys`({nodeStem}) -> .checksums`
 ]
); // … dataset in 'jsonion' (delimited)


//
//  As an augmentation (to embed in collections)

jsonion.augmentation( evSrc,
  stats.count`( evSrc[ .{stemId}, .{action} ]) -> countOf.{action}`
);


//
// A 'gestures' collection initialization (json)
// ( with 'nodeStem' root schema )

var gestureCollection = { "gestures": {
  __stem:{
    augmented: ["EventSource", /* stemPath */],
    embedKeys: [".extensions"],
  },
  __schema: [null],
  __abbr: { "gesture": ["gest", "gestr"] },

/*
  Render a database modification?

  ->  SQL create table instructions (auto exec)
  -> .sql file & a pending notice (rename, delete) 
 
  JSON schema migration (pending)
*/
);


//
// 'jsonion._.stem' data tree delimiters
/*
var stem = { name: 'EventSource', path: jsonionKey, embedKeys: '.ext', ref: { db: {}, dbProxy: {}, ctx: {}, ctxProxy: {}, embed: { 
...[StemPath(existingCollectionKey, "eventSource")] } } };
var augment, inputSchema, matchSchema = {};
matchSchema.type = { __unique: true, __oneOf: [ 'node_id', 'event_id' ] };
var inputSchema = { __standalone: { _: 'string', match: ['object', 'ASC'] }, collection: 'string', timestamp: [ Integer, 11 ], augmented: ['string', 'array'], action:    ['string', 'array'], user_id:   [ Integer, 'string' ], entity_id: [ Integer, 'string' ], __checksum: { md5: {}, __sha256: { '{{ chainType }}': '{{ hash }}' } }, __defaultKeys: ['sha256'] }
 */
// findNamespace: ''
//

```


```js db.augment.js
/*

 # Logic of `jsonion` database schema definitions
 … harvesting granularity of SQL data relations model (enabling further indexing and refactoring)

 */// Should export cosequent, possible actions  (relevant to what and when)

var createCollection // write schema to LocalStorage, .json file (export schema; store file), SQL

var indexRelation // SQL add relational key index

var find // select

```


```js schema.primitives.js [!!!]
/*

Import validators from "validator.js"
Import validators from "anchor.js"

Import { String, Array, Text, Integer } from "./stdTypes"
Export { fieldDiff, fieldDiffList, fieldValue }

*/


const keyPath = { keyPath: String },

const fieldValue = { // Field and value schema (SQL naming)
  field: String,
  value: [tryOne, Integer, Float, String, Text]
};


//
// Difference since previous state

const fieldDiff = { // Simple difference
 ...keyPath,
    diff: String,
    diffLen: Integer, // Change in length
    blocks: Integer, // Number of modified sections

  __index__oneOf: {
    indexL: Integer,
    indexR: Integer
    },

  __stat__oneOf: {
    n: Integer,
    levensthein: [Integer, optional] 
    } // … number of characters modified -- added and removed (when applicable)
};

const fieldDiffArray = { // List of modifications
 ...keyPath: String,
    diff: [ '{diff__String}', '{indexL__Integer}',  '{levensthein__Integer__optional}' ]
};

```


```js fn.expressions.js

/*

 # A function wrapper that validates "arguments" and resolves "subtypes"

*/

jsonion.exprWrap = function( 
  exprFn,
  exprName,
  config = null,
  
  invokingTrie = {},
  
  runtimeArgs = null,
  subtypeArgs = null,
  validatorFn = null
){

  var validated = false, err,

  type = () => {
    return exprFn( ...this.arguments )
  };

  type.name = exprName;
  type.invoke = 
     ( invokingTrie.length )
     ? invokingTrie : null;

  type.runValidated = () => {};

  type.config = (config) 
 ? config : null;


  //
  // Wrap up …
  //

  type.runValidated = () => {

    if(typeof validatorFn !== 'function')
      return exprFn( ...this.arguments )

    validated = validatorFn(config
                            runtimeArgs,
                            subtypeArgs);
    if(validated == true)
      return exprFn( ...this.arguments )
    else
      return err = validated
  
  };


  return type;
}

//
//   Invoking a variety of typed functions by arguments
// … initiating and accessing subtypes of one expression
//
//   i.e. expressionType(), expressionType["subtype"]()
//

```
