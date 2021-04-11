# Portfolio Description

This is my portfolio project built using React. My portfolio gives a little insight about me, my skills (tech stack and proficiency), and personal projects. [Link](https://kevinsaephanh.com/)

## Deployment Process

- Create a public S3 bucket with encryption and enable static hosting
- Register a domain name from Route53
- Request a public certificate from Certificate Manager
- Create a CDN with CloudFront using the S3 bucket URL, registered domain name, and custom SSL
- Create a Record Set in Route53 and set the Alias target to the CDN
