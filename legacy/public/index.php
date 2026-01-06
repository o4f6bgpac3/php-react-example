<!DOCTYPE html>
<html lang="en" data-theme="acme">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACME Corp - Legacy</title>
    <link rel="stylesheet" href="/css/theme.css">
</head>
<body class="min-h-screen flex flex-col bg-base-100">
    <!-- Header -->
    <header class="navbar bg-primary text-primary-content px-4">
        <div class="flex-1">
            <a href="/" class="btn btn-ghost text-xl">ACME</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero -->
    <section class="hero bg-base-200 py-24">
        <div class="hero-content text-center">
            <div class="max-w-lg">
                <h1 class="text-5xl font-bold">Welcome to ACME</h1>
                <p class="py-6 text-base-content/70">Providing innovative solutions for a better tomorrow.</p>
                <a href="#products" class="btn btn-primary">View Products</a>
            </div>
        </div>
    </section>

    <!-- Products -->
    <section id="products" class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">Our Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <?php
                $products = [
                    ['name' => 'Widget', 'price' => 29],
                    ['name' => 'Gadget', 'price' => 49],
                    ['name' => 'Gizmo', 'price' => 99],
                ];

                foreach ($products as $product):
                ?>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="h-48 bg-base-300 flex items-center justify-center text-base-content/50">
                        Product Image
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title"><?= htmlspecialchars($product['name']) ?></h2>
                        <p class="text-2xl font-bold text-primary">$<?= $product['price'] ?></p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-16 px-4 bg-base-200">
        <div class="max-w-md mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">Get in Touch</h2>

            <!--
                React Island: ContactForm

                This mounts the same React component used in the SPA, sharing:
                - useContactForm hook (business logic)
                - submitContactForm API client
                - TypeScript types

                The component uses DaisyUI classes, inheriting the theme from data-theme="acme"

                Props via data attributes:
                - data-success-message: Custom success message (optional)
            -->
            <div
                data-island="contact-form"
                data-success-message="Thanks! We'll be in touch soon."
            >
                <!-- Fallback content shown while React loads or if JS is disabled -->
                <noscript>
                    <div class="alert alert-warning">
                        <span>Please enable JavaScript to use the contact form.</span>
                    </div>
                </noscript>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer footer-center p-8 bg-neutral text-neutral-content mt-auto">
        <p>&copy; 2026 ACME Corp</p>
    </footer>

    <!-- React Islands Bundle -->
    <script src="/js/islands.js"></script>
</body>
</html>
