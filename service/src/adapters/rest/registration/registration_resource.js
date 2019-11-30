import {corsHeaders} from "../../../configuration";

exports.getNewRegistration = async ({
    queryStringParameters = {},
    },
    context
) => {
    const { username } = queryStringParameters;
    // Caution, username is unsafe...
    return {
        statusCode: 200,
        headers: corsHeaders,
        body: {message: `hi ${username}`}
    };
};

