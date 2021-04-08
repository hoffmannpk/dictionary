<script>
	import Dictionary from './Dictionary.svelte'
	import Footer from './Footer.svelte'
	import Header from './Header.svelte'
	import Exercise from './Exercise.svelte'
	import Button from './Button.svelte'

 	let mode = 'create';   //nytt
	
</script>

<Header {mode}/>
<Button type="secondary" on:click={() => (mode = 'create')}>Skapa</Button>
<Button type="secondary" on:click={() => (mode = 'exercise')}>Öva</Button>
{#if mode === 'exercise'}
	<Button type="secondary" on:click={() => (mode = 'exercise')}>Rätta</Button>
{/if}
{#if mode === 'create'}
	<Dictionary />
{:else if mode === 'exercise'}
	<Exercise />
{/if}
<Footer />
