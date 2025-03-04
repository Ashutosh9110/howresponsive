import jwt from 'jsonwebtoken';

export const JWT_SECRET = process.env.JWT_SECRET || '';
export const JWT_EXPIRES_IN = '24h';

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}; 