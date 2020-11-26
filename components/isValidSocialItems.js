function isValidSocialItem(itemObject) {
if (typeof itemObject !== 'object') {
    console.error('error:')
}
if (typeof itemObject.link !== 'string') {
    itemObject.link === '';
    console.error('error:')
}
}
