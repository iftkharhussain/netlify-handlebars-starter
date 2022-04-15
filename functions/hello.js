const Handlebars = require("handlebars");
const fs = require("fs");

exports.handler = async (event) => {
    const { name } = event.queryStringParameters;
    let data = { 
        name: name || "World", 
        timestamp: new Date().toISOString()
    };

    const template_contents = fs.readFileSync("./templates/hello.hbs", "utf8");

    const template = Handlebars.compile(template_contents);

    console.log(data);

    return {
        statusCode: 200,
        headers: {
            "content-type": "text/html; charset=utf-8",
        },
        body: template(data),
    };
};
