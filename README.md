# Generate a Pre-signed URL for S3-Compatible Storage

This example generates an HTTPS pre-signed `PUT` URL for uploading a PDF to an S3-compatible bucket. Use the generated URL as PDFBolt's `customS3PresignedUrl` value.

## Install

```bash
npm install
```

## Configure

Set your storage credentials as environment variables:

```bash
S3_REGION=us-east-1 \
S3_ACCESS_KEY_ID=your-access-key-id \
S3_SECRET_ACCESS_KEY=your-secret-access-key \
node generatePresignedUrl.js
```

For S3-compatible providers other than AWS S3, also set `S3_ENDPOINT`:

```bash
S3_REGION=us-east-1 \
S3_ENDPOINT=https://your-s3-compatible-endpoint.com \
S3_ACCESS_KEY_ID=your-access-key-id \
S3_SECRET_ACCESS_KEY=your-secret-access-key \
node generatePresignedUrl.js
```

For providers that require path-style URLs, set `S3_FORCE_PATH_STYLE=true`.

## What the URL Allows

The generated URL allows a single `PUT` upload for the configured bucket and object key. It is signed with:

```http
Content-Type: application/pdf
Content-Disposition: inline
```

PDFBolt sends these headers when uploading the generated PDF to your pre-signed URL.

## Learn More

See the [PDFBolt S3 bucket upload documentation](https://pdfbolt.com/docs/s3-bucket-upload) for the full integration guide.
