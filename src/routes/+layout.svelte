<script>
    import "../styles/global.css"
   import { app } from "$lib/store/config.store.js";
    import Navbar from "$lib/navbar.svelte";
</script>

<div id="app">
    <Navbar />
    <div class="app-display">
        <slot></slot>
    </div>
</div>