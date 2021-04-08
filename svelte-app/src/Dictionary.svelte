<script>
    import {db} from './firestore.js'
    // importerar det som finns i words
    import Words from './Words.svelte'
    import Button from './Button.svelte'
    let dictionary = []
    // dictionary är namnet på collecation
    db.collection('dictionary').orderBy('created').onSnapshot(data => {
        // som sedan hämtas och sparas i arrayen som är skapad ovan
        dictionary = data.docs
    })

    let deutsch = ""
    let svenska = ""

    const addWord = () => {
        const created = new Date().getTime()
        db.collection('dictionary').add({created, deutsch, svenska})
        deutsch = ""
        svenska = ""
    }
</script>

<div class="rubrik">
        <label for="tyska">Tyska</label>
        <label for="svenska">Svenska</label>
</div>
<div class="words">
    <form on:submit|preventDefault={addWord}>
        <input type="text" id="tyska" bind:value={deutsch}>
        <input type="text" id="svenska" bind:value={svenska}>
        <Button type=secondary>Ny</Button>
    </form>
</div>

<div id="dictionary">
    {#each dictionary as words}
        <Words id={words.id} words={words.data()}/>
    {/each}
</div>

<style>
    .rubrik{
        width: 400px;
        margin: auto;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 6fr 6fr 3fr;
        grid-gap: 10px;
        font-weight: bold;
    }
    .words form{
        display: grid;
        grid-template-columns: 6fr 6fr 3fr;
        grid-gap: 10px;
        border-bottom: 1px solid #ddd;
    }
    form{
        width: 400px;
        margin: auto;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    input, label{
        display: block;
  }
</style>