const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@constants': path.resolve(__dirname, 'src/constants'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@views': path.resolve(__dirname, 'src/views'),
                '@images': path.resolve(__dirname, 'src/images'),
            },
        },
    });
};
