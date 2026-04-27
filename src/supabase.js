import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rujjqvfkzplklnzygvgn.supabase.co"
const supabaseAnonKey = "sb_publishable_gAB6UJzN0pwaa6okXkThDg_2UyeVptW"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)