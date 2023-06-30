/*eslint-disable */
const {optimize} = require('svgo');
const {version} = require('vue');
const semverMajor = require('semver/functions/major')

module.exports = async function (svg) {
    const callback = this.async();

    try {
        ({data: svg} = await optimize(svg, {
            path: this.resourcePath,
        }));
    } catch (error) {
        callback(error);
        return;
    }
    // }

    if (semverMajor(version) === 2) {
        svg = svg.replace('<svg', '<svg v-on="$listeners"');
    }

    // svg = svg.replace(/<style([\s\S]+)<\/style>|<style\/>/g, '');

    callback(null, `<template>${svg}</template>`)
};