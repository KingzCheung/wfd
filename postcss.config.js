/**
 * Created by kingzcheung on 2017/3/6.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'],
            cascade: true
        })
    ]
};