const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  region: process.env.S3_REGION || 'us-east-1',
  ...(process.env.S3_ENDPOINT ? { endpoint: process.env.S3_ENDPOINT } : {}),
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
  },
  // Some S3-compatible providers, such as MinIO, require path-style URLs.
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === 'true'
});

async function generatePresignedUrl(bucketName, objectKey) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
    ContentType: 'application/pdf',
    ContentDisposition: 'inline'
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
  console.log(url);
  return url;
}

generatePresignedUrl('your-bucket-name', `pdfbolt/document-${Date.now()}.pdf`)
  .catch((error) => {
    console.error('Error generating pre-signed URL:', error);
    process.exit(1);
  });
