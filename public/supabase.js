// Config Supabase
const SUPABASE_URL = 'https://zezkqbfqqfhjuswfcjrc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_C4zPmqecx7MmjIBYg_NtfQ_AlP_HmK_';

// Init client langsung (CDN udah di-load dari HTML)
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
