const replace = require('replace-in-file');

const inputString = 'This is a foo string with multiple foo occurrences.';
const temporaryFilePath = 'path/to/temporary-file'; // Use a temporary file, but the path doesn't matter
const replacementOptions = {
    files: temporaryFilePath,
    from: /foo/g,
    to: 'bar',
};
a(replacementOptions);
function a(replacementOptions){
    try {
        const results = replace.sync(replacementOptions);
        const outputString = results.map(result => result.hasChanged ? result.content : inputString).join('\n');
        console.log(outputString);
    } catch (error) {
        console.error('Error occurred:', error);
    }
    

}

