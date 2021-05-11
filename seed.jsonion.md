## Initial seeding of database with records, as usual
... with a slightly different design: only a JSON object, encoded in conventional JavaScript.

"Jsonion/raw" implements an augmentation of a database controller in a minimialistic fashion; so to avoid any needless future transforms to format of data imported while seeding the database (for trivial reasons of updating or replacing database controllers in use). JavaScript ES2015 "import" statement is used in document head to declare dummy methods, which place parsable flags within data objects (readable at this point, at a certain performance trade-off).

```javascript jsonion

import *, {} from "jsonion/raw"

export default var json = { ion: "{ databaseName }", db: {






  
```

(You know you like implementing JavaScript procedures that deal with data trees and reinvent databases, because you still don't have a native DOMParser that supports templating (like React or xml:ns enable), nor a conventional method to declare a path to a JSON object and bind code and state observer (by xpath, right). Atleast now there's also React for CommonMark, still using that C# syntax parser somewhere under a browser's hood}
