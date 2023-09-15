---
date: 2017-01-15
title: Deploying Your Next.js App on AWS S3
description: '(AWS) S3 to host static and server-rendered React apps is a dependable and scalable solution. AWS S3 offers worldwide availability, security features, and low cost, making it a perfect alternative for launching your Next.js application. We will lead you through the process of hosting your Next.js application on AWS S3, assuring a flawless deployment experience, in this step-by-step guide.'
categories:
  - AWS
  -NextJS

---
## Prerequisites:
To successfully follow this guide, you should have the following prerequisites:

- Basic knowledge of Next.js, React.js, and JavaScript
- An active AWS account with appropriate permissions
- A Next.js application ready for deployment
- AWS Command Line Interface (CLI) installed on your local machine

## Step 1: Create an S3 Bucket
- Log in to your AWS Management Console and navigate to the S3 service.
- Click on "Create Bucket" and provide a unique name for your bucket.
- Select the AWS region closest to your target audience for optimal performance.
- Leave the other options as default and click "Create" to create the bucket.

## Step 2: Configure the S3 Bucket
- Once your bucket is created, select it from the S3 dashboard.
- Go to the "Properties" tab and click on "Static website hosting."
- Choose the "Use this bucket to host a website" option.
- Set the "Index document" to the appropriate file path for your Next.js app (e.g., "index.html").
- Optionally, configure an "Error document" to handle 404 errors.
- Save the configuration settings.

## Step 3: Prepare Your Next.js App for Deployment
- In your project's root directory, open the terminal.
- Run the command npm run build or yarn build to build your - Next.js app for production.
- This process generates a ".next" folder containing the optimized static and server-rendered assets.

## Step 4: Deploy Your Next.js App to S3
- Ensure that the AWS CLI is installed on your local machine.
- Open the terminal and run aws configure to set up your AWS - credentials. Follow the prompts and enter your access key, - secret key, preferred region, and default output format.
- Once configured, execute the following command to upload - your Next.js app's build folder to the S3 bucket:  
``
aws s3 sync .next/ s3://your-bucket-name
``

Replace "your-bucket-name" with the actual name of your S3 bucket.
4.Wait for the upload to complete. Your Next.js app's files will now be present in the S3 bucket.

## Step 5: Enable Public Access to Your Next.js App
- Go back to your S3 bucket in the AWS Management Console.
- Select the "Permissions" tab and click on "Bucket Policy."
- In the bucket policy editor, paste the following policy, - which grants public read access to the bucket contents:
``
{
  "Version":"2012-10-17",
  "Statement":[{
    "Sid":"PublicReadGetObject",
    "Effect":"Allow",
    "Principal": "*",
    "Action":["s3:GetObject"],
    "Resource":["arn:aws:s3:::your-bucket-name/*"]
  }]
}
``
Replace "your-bucket-name" with the name of your S3 bucket.
- Save the policy to enable public access.

## Step 6: Configure DNS (Optional)
- If you have a custom domain, you can configure it to point - to your S3 bucket.
- Go to your domain provider's website and locate the DNS - management settings.
- Create a new CNAME record and assign it a subdomain (e.g., - "www" or any other desired subdomain).
- Set the CNAME target to your S3 bucket's endpoint. To find - the endpoint, go to your S3 bucket's properties and copy the - "Endpoint" URL.
- Save the DNS settings and allow some time for the changes to propagate.

## Step 7: Test Your Next.js App
- After the DNS changes have propagated, you can access your - Next.js app using either the S3 bucket URL (provided in the - bucket properties) or your custom domain (if configured).
- Open a web browser and enter the URL. You should see your - Next.js app up and running, including both the statically - generated and server-rendered pages.

--- 

### Conclusion:
You have successfully deployed your Next.js app on AWS S3 by following this step-by-step guide. AWS S3 is an excellent alternative for hosting your Next.js projects since it provides a dependable and scalable infrastructure for providing static and server-rendered Next.js apps. Remember to create and deploy your Next.js project to the S3 bucket, as well as configure public access and, if desired, DNS for a custom domain. You can take advantage of AWS S3's global availability and solid infrastructure by hosting your Next.js app there, assuring optimal performance for your website users.