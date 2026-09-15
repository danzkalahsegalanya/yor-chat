(function() {
    'use strict';

    // Config Supabase (private — gak bocor ke global)
    var SUPABASE_URL = 'https://zezkqbfqqfhjuswfcjrc.supabase.co';
    var SUPABASE_ANON_KEY = 'sb_publishable_C4zPmqecx7MmjIBYg_NtfQ_AlP_HmK_';

    function initSupabase() {
        // Cek kalo Supabase CDN udah loaded
        if (window.supabase && window.supabase.createClient) {
            try {
                window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                window.dispatchEvent(new Event('supabase-ready'));
                console.log('✅ Supabase ready');
            } catch (e) {
                console.error('❌ Gagal init Supabase:', e);
            }
            return;
        }

        // Kalo belum, load CDN-nya
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = function() {
            try {
                window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                window.dispatchEvent(new Event('supabase-ready'));
                console.log('✅ Supabase ready (loaded from CDN)');
            } catch (e) {
                console.error('❌ Gagal init Supabase:', e);
            }
        };
        script.onerror = function() {
            console.error('❌ Gagal load Supabase CDN');
        };
        document.head.appendChild(script);
    }

    // Kalo DOM udah ready, langsung init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSupabase);
    } else {
        initSupabase();
    }
})();
