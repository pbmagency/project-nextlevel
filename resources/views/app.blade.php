<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if (request()->routeIs('home'))
        <link rel="preload" as="image" href="/storage/mentor/final-hero-hd-transparent.webp"
            type="image/webp" fetchpriority="high">
    @endif

    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    {{-- Preload the stylesheet so it downloads in the background --}}
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;900&display=swap" />
    
    {{-- Apply the stylesheet asynchronously --}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;900&display=swap" media="print" onload="this.media='all'" />
    
    {{-- Fallback for users with JavaScript disabled --}}
    <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;900&display=swap" />
    </noscript>

    {{-- Microsoft Clarity --}}
    @if (config('services.clarity.id'))
        <script type="text/javascript">
            window.addEventListener('load', function() {
                setTimeout(function() {
                    (function(c, l, a, r, i, t, y) {
                        c[a] = c[a] || function() {
                            (c[a].q = c[a].q || []).push(arguments)
                        };
                        t = l.createElement(r);
                        t.async = 1;
                        t.src = "https://www.clarity.ms/tag/" + i;
                        y = l.getElementsByTagName(r)[0];
                        y.parentNode.insertBefore(t, y);
                    })(window, document, "clarity", "script", "{{ config('services.clarity.id') }}");
                }, 2500);
            });
        </script>
    @endif

    @if (config('services.meta.pixel_id'))
        <!-- Meta Pixel Code -->
        <script>
            ! function(f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function() {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                window.addEventListener('load', function() {
                    setTimeout(function() {
                        t = b.createElement(e);
                        t.async = !0;
                        t.src = v;
                        s = b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t, s)
                    }, 2500);
                });
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '{{ config('services.meta.pixel_id') }}');
        </script>

        <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id={{ config('services.meta.pixel_id') }}&ev=PageView&noscript=1" /></noscript>
        <!-- End Meta Pixel Code -->

        <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id={{ config('services.meta.pixel_id') }}&ev=PageView&noscript=1" /></noscript>
    @endif

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>