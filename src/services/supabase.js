import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://miinqjrhbplqkzeunerm.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1paW5xanJoYnBscWt6ZXVuZXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5OTUwMjMsImV4cCI6MjAxNjU3MTAyM30.HA2qKn9oXp9muWv2u-I2AopQByJ_EuUQfo5xEccGqa8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
