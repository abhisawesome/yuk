export const DEFAULT_PRIVATE_KEY = 'default@privateKey';
export const IS_DEVELOPING = process.env.NODE_ENV !== 'production';
export const DEFAULT_USER = process.env.DEFAULT_USER;
export const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;
export const PRIVATE_KEY = process.env.PRIVATE_KEY || 'default@privateKey'
export const CONFIGURE_PATH = process.env.NODE_ENV === 'production'
    ? '/etc/nginx/'
    : './nginx/'