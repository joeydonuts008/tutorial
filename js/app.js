const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is'. banner.nodeType);
console.log('#page-banner node name is'. banner.nodeName);
console.log('#page-banner node has child nodes'. banner.hasChildNodes);

const clonedbanner = banner.cloneNode(true);
console.log(clonedbanner)