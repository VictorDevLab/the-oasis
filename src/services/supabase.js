import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://yjfrrcmitushcjueobmh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZnJyY21pdHVzaGNqdWVvYm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODMxMDAsImV4cCI6MjA2OTI1OTEwMH0.tqOdPu8jXQcg8xH4eNIDPIpWzLTJxhY51_-LRBJtf54";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
