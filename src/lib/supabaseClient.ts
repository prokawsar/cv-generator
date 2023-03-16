import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabaseUrl = 'https://lxdsjebbaxliighjcbxn.supabase.co';
const supabaseAnonKey = PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
