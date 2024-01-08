import { siteConfig } from './lib/site-config'

export default siteConfig({
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '1fe6b5956db3460795aa462b4686e350',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'glitter-mole-321',

  // basic site info (required)åå
  name: 'CEVTUOGRND LITE',
  domain: 'lite.cevtuogrnd.com',
  author: 'c_jw*',

  // open graph metadata (optional)
  description: "c_jw*'s PUBLIC COLLECTION",
  // socialImageTitle: 'HM_dev',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
   twitter: 'jwaps110156',
  //github: 'hanmilLee',
  //linkedin: 'hanmil-lee-828a57187',
  instagram: 'cevtuo',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:'https://cevtuogrnd.com/wp-content/uploads/2021/07/cevuo-logo-small.png',
  defaultPageCover: 'https://cevtuogrnd.com/wp-content/uploads/2023/10/未标题-2-6.png',
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
 // utterancesGitHubRepo: 'hanmilLee/nextjs-notion-starter-kit',
 
  // Cusdis comment widget (optional)
  // cusdis: {
  //   appId: 'd39a1dc4-5580-4ad8-8d75-c6a486475b5a' // your website id
  // },
  
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'FNZONE',
      pageId: '8492007cf4dd492096a0324fc503512f'
    },
    
    // {
    //   title: 'About me',
    //   url: 'https://www.linkedin.com/in/hanmil-lee-828a57187/'
    // },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})  