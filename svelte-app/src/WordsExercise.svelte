<script>
    import {db} from './firestore.js'
    import Button from './Button.svelte'
    export let words = {}
    let answers = {}
</script>

<div class="words">
    <input type="text" id="tyska" bind:value={answers.deutschAntwort}>
    <input type="text" id="svenska" bind:value={words.svenska}>
</div>

<style>
    .words{
        display: grid;
        grid-template-columns: 6fr 6fr;
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