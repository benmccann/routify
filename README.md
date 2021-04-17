# Routify 3

## Using Routify

#### Creating a Routify instance

```javascript
const instance = new Routify({/* options */})
```

#### Creating nodes

```javascript
// create a root node
const rootNode = instance.superNode.createChild('my-root-node')

// create a page node
rootNode.createChild('im-page-1', component)
rootNode.createChild('im-page-2', component)

// Note: component can be a component or its path
```

#### Appending nodes

```javascript
// create a root node
const rootNode = instance.createNode('my-root-node')
instance.superNode.appendChild(rootNode)

// create a page node
const childNode = instance.createNode('my-child-node')
rootNode.appendChild(childNode)
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [RoutifyCallback](#routifycallback)
    -   [Parameters](#parameters)
-   [RoutifyPlugin](#routifyplugin)
    -   [Properties](#properties)

### 

### RoutifyCallback

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

#### Parameters

-   `first` **{instance: Routify}** 

Returns **(T | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>)** 

### RoutifyPlugin

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

-   `before` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>)?** name of plugin(s) to run before
-   `after` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>)?** name of plugin(s) to run after
-   `condition` **[RoutifyCallback](#routifycallback)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>?** run plugin if true
-   `run` **[RoutifyCallback](#routifycallback)&lt;any>** plugin script
-   `mode` **(`"compile"` \| `"runtime"`)** 
