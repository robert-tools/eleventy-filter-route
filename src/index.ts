/* istanbul ignore next */
export const getEnv = (key: string) => process.env[key] || '';

const fn = (slug: string, options: any = {}) => {
    const listIsSortedBy = options.listIsSortedBy;
    // in production the home dir is mapped to root
    const isProduction = getEnv('NODE_ENV') === 'production';
    if (isProduction && slug === 'home') {
        slug = '';
    }
    const baseSlug = slug.replace(/^\/|\/$/g, ''); // remove trailing and leading slashes
    let route = baseSlug && baseSlug.length ? `/${baseSlug}/` : '/';

    if (listIsSortedBy === 'addedAt') {
        route += 'latest/';
    }
    return route;
};
export default fn;
