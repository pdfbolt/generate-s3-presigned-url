# 🛠️ Generate Pre-Signed URL for S3-Compatible Storage

Welcome to the **Generate Pre-Signed URL** repository! This project demonstrates how to generate a pre-signed URL for uploading files to an S3-compatible storage service.

## 🌟 What’s Included?

This repository contains an easy-to-use Node.js script that generates a pre-signed URL. You can use this URL to allow file uploads to your S3-compatible storage, such as AWS S3, DigitalOcean Spaces, or MinIO, and more — without exposing your storage credentials.

### 🚀 Getting Started

#### 1. Clone the Repository

Clone this repository and navigate into the project directory:

```
git clone https://github.com/pdfbolt/generate-s3-presigned-url.git
```

#### 2. Install Dependencies

This project uses AWS SDK v3 to interact with your S3-compatible storage. Install the required dependencies:

```
npm install
```

### 🔧 Usage

#### 3. Configure Your S3 Client

Open `generatePresignedUrl.js` and replace the placeholders with your S3-compatible storage details.

#### 4. Generate a Pre-Signed URL

Run the script to generate a pre-signed URL:

```
node generatePresignedUrl.js
```

The generated URL will be printed in the terminal. Use this URL to securely upload files to your S3 bucket.

### 📖 Learn More

For a detailed walkthrough and more information, check out the [PDFBolt Documentation](https://pdfbolt.com/docs/s3-bucket-upload).