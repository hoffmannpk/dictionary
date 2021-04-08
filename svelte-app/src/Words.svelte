<script>
    import {db} from './firestore.js'
    import Button from './Button.svelte'
    export let id = ''
    export let words = {}

    const deleteWords = () => {
        db.collection('dictionary').doc(id).delete()
    }

    const updateWords = () => {
        db.collection('dictionary').doc(id).update( {
            "deutsch":words.deutsch,  
            "svenska":words.svenska
        })
    }
</script>

<div class="words">
    <input on:input={updateWords} type="text" bind:value={words.deutsch}>
    <input on:input={updateWords} type="text" bind:value={words.svenska}>
    <Button on:click={deleteWords}>x</Button>
</div>

<style>
    .words{
        display: grid;
        grid-template-columns: 6fr 6fr 3fr;
        grid-gap: 10px;
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
</style>