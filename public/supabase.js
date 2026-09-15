// Config Supabase
const SUPABASE_URL = 'https://zezkqbfqqfhjuswfcjrc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_C4zPmqecx7MmjIBYg_NtfQ_AlP_HmK_';

// Load Supabase CDN sendiri (biar gak ada masalah urutan)
(function loadSupabase() {
    if (window.supabase && window.supabase.createClient) {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        window.dispatchEvent(new Event('supabase-ready'));
        return;
    }

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = function() {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        window.dispatchEvent(new Event('supabase-ready'));
    };
    script.onerror = function() {
        console.error('Gagal load Supabase CDN');
        alert('Gagal konek ke Supabase. Cek koneksi internet lo.');
    };
    document.head.appendChild(script);
})();
