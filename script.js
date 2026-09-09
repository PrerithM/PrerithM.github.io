document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Performance-optimized Custom Cursor & Magnetic effect
    const cursor = document.querySelector('.cursor');
    const magneticElements = document.querySelectorAll('.magnetic');

    // Check if device supports hover
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    if (!isTouchDevice && cursor) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Use requestAnimationFrame for smooth cursor movement
        const renderCursor = () => {
            // Linear interpolation for extra smoothness (ease out)
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`; // -10 to center the 20px cursor
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        document.querySelectorAll('a, button, .hover-reveal').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });

        // Magnetic Effect using requestAnimationFrame to prevent layout thrashing
        magneticElements.forEach(elem => {
            let magneticHover = false;
            let reqId = null;

            elem.addEventListener('mouseenter', () => {
                magneticHover = true;
                elem.style.transition = 'none';

                const renderMagnetic = () => {
                    if (!magneticHover) return;

                    const rect = elem.getBoundingClientRect();
                    const strength = elem.dataset.strength || 20;

                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    const distX = (mouseX - centerX) * (strength / 100);
                    const distY = (mouseY - centerY) * (strength / 100);

                    elem.style.transform = `translate(${distX}px, ${distY}px)`;
                    reqId = requestAnimationFrame(renderMagnetic);
                };
                reqId = requestAnimationFrame(renderMagnetic);
            });

            elem.addEventListener('mouseleave', () => {
                magneticHover = false;
                if (reqId) cancelAnimationFrame(reqId);
                elem.style.transform = 'translate(0px, 0px)';
                elem.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
            });
        });
    } else if (cursor) {
        cursor.style.display = 'none';
    }

    // Hero Text Reveal Animation
    setTimeout(() => {
        document.querySelectorAll('.hero-title .line span').forEach((span, index) => {
            setTimeout(() => {
                span.style.transform = 'translateY(0)';
                span.style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)';
            }, index * 200);
        });
    }, 100);

    // Initial Navbar animation
    setTimeout(() => {
        const header = document.querySelector('.main-header');
        if (header) header.classList.add('in-view');
    }, 500);

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                // Handle staggered animations
                if (entry.target.classList.contains('stagger-fade-up')) {
                    const children = Array.from(entry.target.children);
                    children.forEach((child, idx) => {
                        child.style.opacity = '0';
                        child.style.transform = 'translateY(40px)';

                        setTimeout(() => {
                            child.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, idx * 150 + 200);
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .stagger-fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // Initialize 3D Background (Three.js)
    initThreeJS();
});

// Three.js 3D Objects Setup
function initThreeJS() {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js failed to load.');
        return;
    }

    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Add subtle fog to match background
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create objects (Swiss design inspired floating wireframes)
    const objects = [];

    // Icosahedron (Geometric, clean)
    const geometry1 = new THREE.IcosahedronGeometry(8, 0);
    const material1 = new THREE.MeshBasicMaterial({
        color: 0x888888,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });

    const mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.position.set(-15, 5, -10);
    scene.add(mesh1);
    objects.push(mesh1);

    // Torus (Smooth curves)
    const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
    const material2 = new THREE.MeshBasicMaterial({
        color: 0x888888,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });

    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(20, -10, -20);
    scene.add(mesh2);
    objects.push(mesh2);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse movement interaction for 3D scene
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.0005;
        mouseY = (event.clientY - windowHalfY) * 0.0005;
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Rotate objects slowly
        objects.forEach((obj, index) => {
            const speed = index === 0 ? 0.1 : 0.05;
            obj.rotation.x = elapsedTime * speed;
            obj.rotation.y = elapsedTime * (speed * 1.5);
        });

        // Rotate particles slowly
        particlesMesh.rotation.y = elapsedTime * 0.05;

        // Smooth camera movement based on mouse
        targetX = mouseX * 0.5;
        targetY = mouseY * 0.5;

        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();
}
