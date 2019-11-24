module.exports = {
    plugins: [
        {
            resolve:'@korf/gatsby-theme-blog',
            options: {
                contentPath: 'content/blog',
            }
        },
        {
            resolve:'@korf/gatsby-theme-blog',
            options: {
                contentPath: 'content/tips',
                basePath: '/tips/',
                useExternalMDX: true,
                ns: '@korf/gatsby-theme-blog/tips',
            }
        }
    ]
}