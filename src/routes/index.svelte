<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import { goto } from '$app/navigation';
import { session } from '$app/stores';

	import Counter from '$lib/Counter/index.svelte';

    const onClick = async (e) => {
        e.preventDefault();
        const res = await fetch('/test.json', {
            method: 'POST',
            credentials: 'include'
        })
        if(res.status === 200) {
            const data = await res.json()
            $session = data;
            goto('/secret');
        }
    }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
    <button on:click={onClick}>Click to add a cookie</button>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
