
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are not available
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: () => ({ error: new Error('Supabase not configured. Please connect your Supabase integration.') }),
        select: () => ({ error: new Error('Supabase not configured. Please connect your Supabase integration.') }),
        update: () => ({ error: new Error('Supabase not configured. Please connect your Supabase integration.') }),
        delete: () => ({ error: new Error('Supabase not configured. Please connect your Supabase integration.') })
      })
    } as any
