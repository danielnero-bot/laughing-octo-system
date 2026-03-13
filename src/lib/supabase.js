import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://szhjpfarggguopeaesyv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6aGpwZmFyZ2dndW9wZWFlc3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTI1NDQsImV4cCI6MjA4ODk4ODU0NH0.5Q_JTs32vASSf3ZzGOO5OMqfVEB0uxfO3xBtAVcOSMI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);