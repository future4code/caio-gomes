const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIA3B2DXMLI35U5IMHR';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'futuretube-users-photos-profile';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});


export const uploadFile = (photo) => {
    // Read content from the file
    const fileContent = fs.readFileSync(photo);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: photo,
        Body: fileContent
    };

    // Uploading files to the bucket
    return s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        return data.Location
    });

};