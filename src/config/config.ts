export default {
  s3: {
    baseUrl: process.env['S3_URL']!,
    resume: process.env['S3_URL']! + '/resume.pdf',
    me: process.env['S3_URL']! + '/me.jpg',
  },
  email: {
    templateId: process.env['EMAIL_TEMPLATE_ID']!,
    userId: process.env['EMAIL_USER_ID']!,
  },
};
