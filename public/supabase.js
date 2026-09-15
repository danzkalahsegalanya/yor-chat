const SUPABASE_URL = 'https://zezkqbfqqfhjuswfcjrc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_C4zPmqecx7MmjIBYg_NtfQ_AlP_HmK_';

const supabaseScript = document.createElement('script');
supabaseScript.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
supabaseScript.onload = () => {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.dispatchEvent(new Event('supabase-ready'));
};
document.head.appendChild(supabaseScript);