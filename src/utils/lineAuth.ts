import { z } from 'zod';

const envSchema = z.object({
  VITE_LINE_CLIENT_ID: z.string().min(1),
  VITE_LINE_CLIENT_SECRET: z.string().min(1),
  VITE_LINE_REDIRECT_URI: z.string().url(),
  VITE_LINE_STATE_KEY: z.string().min(1),
});

const validateEnv = () => {
  const result = envSchema.safeParse({
    VITE_LINE_CLIENT_ID: import.meta.env.VITE_LINE_CLIENT_ID,
    VITE_LINE_CLIENT_SECRET: import.meta.env.VITE_LINE_CLIENT_SECRET,
    VITE_LINE_REDIRECT_URI: import.meta.env.VITE_LINE_REDIRECT_URI,
    VITE_LINE_STATE_KEY: import.meta.env.VITE_LINE_STATE_KEY,
  });

  if (!result.success) {
    throw new Error('Missing or invalid environment variables');
  }

  return result.data;
};

const getLineConfig = () => {
  const env = validateEnv();
  return {
    clientId: env.VITE_LINE_CLIENT_ID,
    clientSecret: env.VITE_LINE_CLIENT_SECRET,
    redirectUri: env.VITE_LINE_REDIRECT_URI,
    stateKey: env.VITE_LINE_STATE_KEY,
  };
};

export const generateState = () => {
  const config = getLineConfig();
  const state = Math.random().toString(36).substring(7);
  localStorage.setItem(config.stateKey, state);
  return state;
};

export const getLineLoginUrl = () => {
  const config = getLineConfig();
  const state = generateState();
  
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    state: state,
    scope: 'profile openid email',
  });

  return `https://access.line.me/oauth2/v2.1/authorize?${params.toString()}`;
};

export const validateState = (receivedState: string): boolean => {
  try {
    const config = getLineConfig();
    const savedState = localStorage.getItem(config.stateKey);
    
    if (!savedState) {
      console.error('No state found in localStorage');
      return false;
    }

    localStorage.removeItem(config.stateKey);
    return savedState === receivedState;
  } catch (error) {
    console.error('Error validating state:', error);
    return false;
  }
};

export const exchangeCodeForToken = async (code: string) => {
  const config = getLineConfig();
  
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: config.redirectUri,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error('Failed to exchange code for token');
  }

  const data = await response.json();
  localStorage.setItem('line_access_token', data.access_token);
  return data.access_token;
};

export const getUserProfile = async () => {
  const accessToken = localStorage.getItem('line_access_token');
  
  if (!accessToken) {
    throw new Error('No access token found');
  }

  const response = await fetch('https://api.line.me/v2/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  return response.json();
};