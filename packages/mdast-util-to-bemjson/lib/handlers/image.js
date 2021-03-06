'use strict';

const normalize = require('normalize-uri');

const parseBlock = require('../build-node').parse;

function image(transform, node) {
    const block = parseBlock(node.type);

    const props = { src: normalize(node.url) };
    node.title && (props.title = node.title);
    node.alt && (props.alt = node.alt);

    return transform(node, block, props, node.value);
}

module.exports = image;
