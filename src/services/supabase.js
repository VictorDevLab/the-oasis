import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mjnrgzacoxukfbxunjml.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbnJnemFjb3h1a2ZieHVuam1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNTc2MDIsImV4cCI6MjA0NDYzMzYwMn0.NHLRbjTz0vlxeZkNJ2_0GYJ9NhmXkTudH9dkiDTXy2M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
