import { Node } from '../../../../common/Node.js' //eslint-disable-line
import { nameFilter } from '../../utils.js'

/**
 * for nodes that have a _module.svelte or _reset.svelte file,
 * `file` prop and component is moved to node.parent and the old node is removed
 * @param {Node} node
 */
export const moveModuleToParentNode = (node) => {
    const { options } = node.instance
    const { moduleFiles } = options.filemapper

    node.descendants.filter(nameFilter(moduleFiles)).forEach((node) => {
        node.parent.component = node.component
        node.parent.file = node.file
        node.parent.meta = { ...node.parent.meta, ...node.meta }
        node.remove()
    })
}
