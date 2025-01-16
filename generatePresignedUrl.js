const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

// Configure the S3 client for your storage provider
const s3 = new S3Client({
    endpoint: 'https://your-s3-compatible-endpoint.com', // Replace with your storage endpoint
    region: 'your-region', // Replace with your region
    credentials: {
        accessKeyId: 'your-access-key-id', // Replace with your Access Key ID
        secretAccessKey: 'your-secret-access-key' // Replace with your Secret Access Key
    }
});

// Function to generate a pre-signed URL
async function generatePresignedUrl(bucketName, fileName) {
    const command = new PutObjectCommand({
        Bucket: bucketName, // Name of your bucket
        Key: fileName, // Name of the file to upload
        ContentType: 'application/pdf' // Specify the file type
    });

    try {
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // URL valid for 1 hour. Adjust expiresIn as needed
        console.log('Pre-signed URL:', url);
        return url;
    } catch (error) {
        console.error('Error generating Pre-Signed URL:', error);
    }
}

// Example usage
generatePresignedUrl('your-bucket-name', `document-${Date.now()}.pdf`);