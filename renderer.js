var fs = require('fs');
//==========================================//
//             GENERATOR                    //
//==========================================//
function generate(count, value, content) {
    var t = "";
    if (value instanceof Array) {
        // condition for words
        for (var i = 0; i < count; i++) {
            ///*paragraph*
            //if(i % 50 == 0 && i > 1){t +='\n\n';}
            if (count > value.length) {
                value.push(value[i]);
                t += value[i];
            } else {
                t += value[i];
            }
        }
    } else {
        // condition for letters
        for (var i = 0; i < count; i++) {
            ///*paragraph*
            //if(i % 295 == 0 && i > 1){t +='\n\n';}
            if (count > value.length) {
                value += new Array(value[i]);
                t += value[i];
            } else {
                t += value[i];
            }
        }
    }
    content = content.replace("{{Lorem ipsum}}", t);
    return content;
}
function generateParagraph(count, value, content) {
    var t = "";
    for (var i = 0; i < count; i++) {
        ///*paragraph*
        if (i % 10 == 0 && i > 1) {
            t += '\n\n';
        }
        t += value;
    }
    content = content.replace("{{Lorem ipsum}}", t);
    return content;
}
//==========================================//
//             VIEW                         //
//==========================================//
function mergeValues(values, content) {
    for (var key in values) {
        content = content.replace("{{" + key + "}}", values[key]);
    }
    return content;
}
function view(templateName, values, request, response) {
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"});
    fileContents = mergeValues(values, fileContents);
    response.write(fileContents);
}
//==========================================//
//             CONTENT-TYPE                  //
//==========================================//
function contentType(values, request, response) {
    var fileContents = fs.readFileSync(__dirname + values);
    response.write(fileContents);
}
//==========================================//
//           EXPORTS                       //
//========================================//
module.exports.generate = generate;
module.exports.generateParagraph = generateParagraph;
module.exports.contentType = contentType;
module.exports.view = view;