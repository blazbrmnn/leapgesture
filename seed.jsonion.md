## Initial seeding of database records, as usual
... but with a slightly different design: a JSON object with immutable properties, encoded in conventional, minimalistic JavaScript (possibly readable to the naked eye).

"Jsonion/raw" implements an abstraction of a database controller in the most static and minimialistic fashion; so to avoid any needless future transforms to format of data imported while seeding the database (for trivial reasons of updating or replacing database controllers in use). JavaScript ES2015 "import" statement is used in document head: only to declare dummy methods of conventional naming, so to embed flags within data objects that a JSON object parser or a database controller should interpret.

In "jsonion" container a database schema design reveals a sample of contents, from which to incur use patterns and how automated checksum validation should be planned for such a dataset. With this in might, formatting does come with a slight performance cost, though to denounce it as a trade-off would in turn require complete automation (when you wouldn't ask people about learning curves nor read anymore).


```javascript jsonion

import *, { flags AS flag } from "jsonion/raw"

export default var json = { ion: "{ databaseName }", db: {






  
```

(You know you like implementing JavaScript procedures that deal with data trees and reinvent database talk, because you still don't have a native DOMParser that supports templating (like React or xml:ns enable), nor two conventional methods to declare paths to a JSON object and to bind a data state observer ... Aleast there's also React for CommonMark; hovering along, over the cascades, under a browser's hood}
