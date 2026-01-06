<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACME Corp - Legacy</title>
    <style>
        /* Legacy CSS - no framework, matching DaisyUI appearance */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #1f2937; background: #ffffff; min-height: 100vh; display: flex; flex-direction: column; }
        a { color: #7c3aed; text-decoration: none; }
        a:hover { text-decoration: underline; }

        /* Header - matches DaisyUI navbar */
        .header { background: #7c3aed; color: white; padding: 0.5rem 1rem; display: flex; justify-content: space-between; align-items: center; min-height: 4rem; }
        .header h1 { font-size: 1.25rem; font-weight: 700; }
        .nav { display: flex; gap: 0.25rem; list-style: none; }
        .nav a { color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; }
        .nav a:hover { background: rgba(255,255,255,0.1); text-decoration: none; }

        /* Hero - matches DaisyUI hero */
        .hero { background: #f5f3ff; padding: 6rem 1rem; text-align: center; }
        .hero-content { max-width: 32rem; margin: 0 auto; }
        .hero h2 { font-size: 3rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2; }
        .hero p { color: rgba(31,41,55,0.7); margin-bottom: 1.5rem; font-size: 1rem; }
        .btn { display: inline-block; background: #7c3aed; color: white; padding: 0.75rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-size: 0.875rem; font-weight: 600; }
        .btn:hover { background: #6d28d9; text-decoration: none; color: white; }

        /* Products - matches DaisyUI cards */
        .products { padding: 4rem 1rem; }
        .products-inner { max-width: 72rem; margin: 0 auto; }
        .products h2 { text-align: center; margin-bottom: 2rem; font-size: 1.875rem; font-weight: 700; }
        .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .product-grid { grid-template-columns: 1fr; } }
        .product-card { background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
        .product-image { height: 12rem; background: #e5e7eb; display: flex; align-items: center; justify-content: center; color: rgba(31,41,55,0.5); }
        .product-info { padding: 2rem; display: flex; flex-direction: column; }
        .product-info h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
        .product-price { font-size: 1.5rem; color: #7c3aed; font-weight: 700; }
        .product-actions { display: flex; justify-content: flex-end; margin-top: 1rem; }

        /* Contact - matches DaisyUI form */
        .contact { background: #f5f3ff; padding: 4rem 1rem; }
        .contact-inner { max-width: 28rem; margin: 0 auto; }
        .contact h2 { text-align: center; margin-bottom: 2rem; font-size: 1.875rem; font-weight: 700; }
        .contact-form { max-width: 28rem; margin: 0 auto; background: white; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
        .card-body { padding: 2rem; }
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-size: 0.875rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; background: white; }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #7c3aed; box-shadow: 0 0 0 2px rgba(124,58,237,0.2); }
        .form-group textarea { resize: vertical; min-height: 6rem; }
        .btn-submit { width: 100%; margin-top: 0.5rem; }
        .btn-submit:disabled { background: #9ca3af; cursor: not-allowed; }
        .alert { padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; }
        .alert-success { background: #d1fae5; color: #065f46; }
        .alert-error { background: #fee2e2; color: #991b1b; }
        .hidden { display: none; }

        /* Footer - matches DaisyUI footer */
        .footer { background: #1f2937; color: white; padding: 2rem; text-align: center; margin-top: auto; }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <h1>ACME</h1>
        <ul class="nav">
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-content">
            <h2>Welcome to ACME</h2>
            <p>Providing innovative solutions for a better tomorrow.</p>
            <a href="#products" class="btn">View Products</a>
        </div>
    </section>

    <!-- Products -->
    <section id="products" class="products">
        <div class="products-inner">
            <h2>Our Products</h2>
            <div class="product-grid">
            <?php
            $products = [
                ['name' => 'Widget', 'price' => 29],
                ['name' => 'Gadget', 'price' => 49],
                ['name' => 'Gizmo', 'price' => 99],
            ];

            foreach ($products as $product):
            ?>
            <div class="product-card">
                <div class="product-image">Product Image</div>
                <div class="product-info">
                    <h3><?= htmlspecialchars($product['name']) ?></h3>
                    <p class="product-price">$<?= $product['price'] ?></p>
                    <div class="product-actions">
                        <button class="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact">
        <div class="contact-inner">
            <h2>Get in Touch</h2>
            <!--
                VANILLA JS CONTACT FORM

                This is the "before" state - pure PHP/vanilla JS with custom CSS.
                Compare with index.php which uses React Islands + DaisyUI.

                Problems with this approach:
                - Form logic is inline, not reusable
                - Styles are custom, inconsistent with other apps
                - No shared code with SPA or mobile
            -->
            <form id="contact-form" class="contact-form">
            <div class="card-body">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn btn-submit">Send Message</button>
                <div id="form-status" class="hidden"></div>
            </div>
        </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 ACME Corp</p>
    </footer>

    <!-- Vanilla JS - No React, no shared code -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('contact-form');
        var status = document.getElementById('form-status');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var submitBtn = form.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Get form data
            var formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
            };

            // Simulate API call
            setTimeout(function() {
                // Show success
                status.className = 'alert alert-success';
                status.textContent = 'Thanks! We\'ll be in touch soon.';

                // Reset form
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        });
    });
    </script>
</body>
</html>
